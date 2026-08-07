import React, { useEffect, useState } from 'react';
import { Loader2, AlertCircle, Terminal, HelpCircle } from 'lucide-react';
import { handleOidcCallback } from '../lib/oidc';
import { BRANDING } from '../../config/branding';

interface CallbackPageProps {
  onSuccess: (user: { id: string; name: string; email: string }) => void;
  onNavigate: (path: string) => void;
  onDevLogin: () => void;
}

export const CallbackPage: React.FC<CallbackPageProps> = ({ onSuccess, onNavigate, onDevLogin }) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const authError = params.get('error_description') || params.get('error');

    if (authError) {
      setError(authError);
      return;
    }

    if (!code || !state) {
      setError('Invalid callback response: missing authorization code or state.');
      return;
    }

    handleOidcCallback(code, state)
      .then((user) => {
        onSuccess(user);
        onNavigate('/dashboard');
      })
      .catch((err: any) => {
        setError(err.message || 'Authentication failed. Please try again.');
      });
  }, [onSuccess, onNavigate]);

  if (error) {
    const isInvalidClient = error.includes('invalid_client');

    return (
      <div style={{ maxWidth: '600px', margin: '5rem auto', padding: '0 1rem' }}>
        <div className="card" style={{ padding: '2.5rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <AlertCircle size={48} color="#ef4444" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem' }}>Authentication Failed</h3>
            <div style={{
              display: 'inline-block',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              borderRadius: 'var(--radius-sm)',
              padding: '0.4rem 0.8rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              fontFamily: 'monospace',
            }}>
              {error}
            </div>
          </div>

          {isInvalidClient && (
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                lineHeight: 1.6,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                <HelpCircle size={18} color="var(--accent)" />
                <span>Why did this happen?</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                The Client ID <code style={{ color: 'var(--accent)' }}>"{BRANDING.oidcClientId}"</code> is not registered on your Identity Provider (<code style={{ color: 'var(--text-primary)' }}>{BRANDING.oidcIssuerUrl}</code>).
              </p>
              <div style={{ fontWeight: 600, marginBottom: '0.375rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Terminal size={15} />
                <span>How to resolve:</span>
              </div>
              <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <li>Register client ID <code style={{ color: 'var(--accent)' }}>"{BRANDING.oidcClientId}"</code> in your IDP database.</li>
                <li>Or update <code style={{ color: 'var(--text-primary)' }}>oidcClientId</code> & <code style={{ color: 'var(--text-primary)' }}>oidcIssuerUrl</code> in <code style={{ color: 'var(--text-primary)' }}>src/config/branding.ts</code>.</li>
              </ol>
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-secondary" onClick={() => onNavigate('/')}>
              Return to Home
            </button>
            <button className="btn-primary" onClick={onDevLogin}>
              Bypass with Demo Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '500px', margin: '8rem auto', textAlign: 'center' }}>
      <div className="card" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Loader2 size={40} color="var(--accent)" className="animate-spin" style={{ marginBottom: '1.25rem' }} />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Authenticating...</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          Completing secure sign in with your Identity Provider.
        </p>
      </div>
    </div>
  );
};
