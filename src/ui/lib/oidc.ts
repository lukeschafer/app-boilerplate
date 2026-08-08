import { BRANDING } from '../../config/branding';

// Helper: Convert ArrayBuffer to Base64URL string
function base64UrlEncode(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

// Helper: Compute SHA-256 hash using SubtleCrypto API
async function sha256(plain: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

// Helper: Generate random cryptographic string
function generateRandomString(length: number = 48): string {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return Array.from(array, (byte) => ('0' + (byte & 0xff).toString(16)).slice(-2)).join('');
}

// Initiate OIDC PKCE Authorization Redirect
export async function initiateOidcLogin() {
  const verifier = generateRandomString(64);
  const hash = await sha256(verifier);
  const challenge = base64UrlEncode(hash);
  const state = generateRandomString(32);

  // Store verifier & state in sessionStorage for callback verification
  sessionStorage.setItem('oidc_code_verifier', verifier);
  sessionStorage.setItem('oidc_state', state);

  const redirectUri = `${window.location.origin}/auth/callback`;
  const issuer = BRANDING.oidcIssuerUrl.replace(/\/+$/, '');

  const authUrl = new URL(`${issuer}/oauth/authorize`);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', BRANDING.oidcClientId);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', 'openid profile email');
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('code_challenge', challenge);
  authUrl.searchParams.set('code_challenge_method', 'S256');

  window.location.href = authUrl.toString();
}

// Process OIDC Callback Token Exchange
export async function handleOidcCallback(code: string, state: string): Promise<{ id: string; name: string; email: string }> {
  const savedState = sessionStorage.getItem('oidc_state');
  const codeVerifier = sessionStorage.getItem('oidc_code_verifier');

  if (savedState && state !== savedState) {
    throw new Error('OIDC authentication failed: State mismatch / invalid request.');
  }

  if (!codeVerifier) {
    throw new Error('OIDC authentication failed: Missing PKCE code verifier.');
  }

  const redirectUri = `${window.location.origin}/auth/callback`;
  const issuer = BRANDING.oidcIssuerUrl.replace(/\/+$/, '');

  // Exchange authorization code for tokens
  const tokenRes = await fetch(`${issuer}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: BRANDING.oidcClientId,
      redirect_uri: redirectUri,
      code: code,
      code_verifier: codeVerifier,
    }),
  });

  const tokenData = await tokenRes.json() as any;
  if (!tokenRes.ok) {
    throw new Error(tokenData.error_description || tokenData.error || 'Token exchange failed');
  }

  // Clean up session storage
  sessionStorage.removeItem('oidc_state');
  sessionStorage.removeItem('oidc_code_verifier');

  // Fetch User Profile from /oauth/userinfo or decode ID token payload
  if (tokenData.access_token) {
    try {
      const userRes = await fetch(`${issuer}/oauth/userinfo`, {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      });
      if (userRes.ok) {
        const userInfo = await userRes.json() as any;
        return {
          id: userInfo.sub || userInfo.id || 'usr_' + Math.random().toString(36).substring(2, 9),
          name: userInfo.name || userInfo.email?.split('@')[0] || 'Authenticated User',
          email: userInfo.email || 'user@example.com',
        };
      }
    } catch (e) {
      console.warn('Userinfo fetch warning:', e);
    }
  }

  // Fallback: Parse claims from ID token
  if (tokenData.id_token) {
    try {
      const payloadBase64 = tokenData.id_token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payloadBase64.replace(/-/g, '+').replace(/_/g, '/')));
      return {
        id: decodedPayload.sub || 'usr_' + Math.random().toString(36).substring(2, 9),
        name: decodedPayload.name || decodedPayload.email?.split('@')[0] || 'Authenticated User',
        email: decodedPayload.email || 'user@example.com',
      };
    } catch (e) {
      console.warn('ID token payload parse warning:', e);
    }
  }

  return {
    id: 'usr_' + Math.random().toString(36).substring(2, 9),
    name: 'Authenticated User',
    email: 'user@example.com',
  };
}
