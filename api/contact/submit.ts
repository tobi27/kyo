import type { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../_lib/prisma';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = 'contact@actoris.fr';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message, source } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Save lead to database
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        company: company || null,
        message,
        source: source || 'contact',
      },
    });

    // Send email notification via Resend
    if (RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + RESEND_API_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'XiGate <noreply@xigate.com>',
            to: [CONTACT_EMAIL],
            subject: '[XiGate] New ' + (source === 'enterprise' ? 'Enterprise' : 'Sales') + ' Inquiry from ' + name,
            html: '<h2>New Contact Form Submission</h2>' +
              '<p><strong>Name:</strong> ' + name + '</p>' +
              '<p><strong>Email:</strong> ' + email + '</p>' +
              '<p><strong>Company:</strong> ' + (company || 'N/A') + '</p>' +
              '<p><strong>Source:</strong> ' + (source || 'contact') + '</p>' +
              '<p><strong>Message:</strong></p>' +
              '<p>' + message.replace(/\n/g, '<br>') + '</p>',
          }),
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the request if email fails - lead is already saved
      }
    }

    return res.status(200).json({ success: true, id: lead.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to submit contact form' });
  }
}
