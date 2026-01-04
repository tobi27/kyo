# XiGate - Financial Control Plane for AI Agents

Landing page with Auth0 authentication and Stripe payments.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Auth**: Auth0
- **Payments**: Stripe
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Deployment**: Vercel

## Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

### 3. Setup database
```bash
npx prisma db push
```

### 4. Run development server
```bash
npm run dev
```

## Auth0 Setup

1. Create a **Single Page Application** in Auth0
2. Configure URLs:
   - Callback: `http://localhost:3000, https://your-domain.vercel.app`
   - Logout: same
   - Web Origins: same
3. Create an API for the audience

## Stripe Setup

1. Create products in Stripe Dashboard:
   - **Standard**: $500/month subscription
   - **Design Partner**: $25,000 one-time

2. Setup webhook: `https://your-domain.vercel.app/api/stripe/webhook`
   - Events: `checkout.session.completed`, `customer.subscription.*`

## Vercel Deployment

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Update Auth0 URLs

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user/profile` | Get user profile |
| POST | `/api/user/sync` | Sync user from Auth0 |
| POST | `/api/stripe/checkout` | Create checkout session |
| POST | `/api/stripe/portal` | Billing portal |
| POST | `/api/stripe/webhook` | Stripe webhooks |
