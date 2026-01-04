import type { VercelRequest } from '@vercel/node';

interface Auth0JWTPayload {
  sub: string;
  email?: string;
  name?: string;
  picture?: string;
  iss: string;
  aud: string | string[];
  exp: number;
  iat: number;
}

export async function verifyAuth0Token(req: VercelRequest): Promise<Auth0JWTPayload | null> {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  const domain = process.env.VITE_AUTH0_DOMAIN || process.env.AUTH0_DOMAIN;

  if (!domain) {
    console.error('AUTH0_DOMAIN not configured');
    return null;
  }

  try {
    // Fetch JWKS from Auth0
    const jwksResponse = await fetch(`https://${domain}/.well-known/jwks.json`);
    const jwks = await jwksResponse.json();

    // Decode token header to get kid
    const [headerB64] = token.split('.');
    const header = JSON.parse(Buffer.from(headerB64, 'base64url').toString());

    // Find matching key
    const key = jwks.keys.find((k: any) => k.kid === header.kid);
    if (!key) {
      console.error('No matching key found in JWKS');
      return null;
    }

    // Import the public key
    const publicKey = await crypto.subtle.importKey(
      'jwk',
      key,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['verify']
    );

    // Verify signature
    const [, payloadB64, signatureB64] = token.split('.');
    const signedData = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
    const signature = Buffer.from(signatureB64, 'base64url');

    const isValid = await crypto.subtle.verify(
      'RSASSA-PKCS1-v1_5',
      publicKey,
      signature,
      signedData
    );

    if (!isValid) {
      console.error('Token signature verification failed');
      return null;
    }

    // Decode and validate payload
    const payload: Auth0JWTPayload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString());

    // Check expiration
    if (payload.exp * 1000 < Date.now()) {
      console.error('Token expired');
      return null;
    }

    // Check issuer
    if (payload.iss !== `https://${domain}/`) {
      console.error('Invalid issuer');
      return null;
    }

    return payload;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export function getAuth0UserId(payload: Auth0JWTPayload): string {
  return payload.sub;
}

export function getAuth0Email(payload: Auth0JWTPayload): string {
  return payload.email || `${payload.sub}@auth0.local`;
}

export function getAuth0Name(payload: Auth0JWTPayload): string | undefined {
  return payload.name;
}
