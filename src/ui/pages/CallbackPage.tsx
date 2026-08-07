import React, { useEffect, useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { handleOidcCallback } from '../lib/oidc';

interface CallbackPageProps {
  onSuccess: (user: { id: string; name: string; email: string }) => void;
  onNavigate: (path: string) => void;
}

export const CallbackPage: React.FC<CallbackPageProps> = ({ onSuccess, onNavigate }) => {
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
    return (
      <div style={{ maxWidth: '500px', margin: '6rem auto', textAlign: 'center' }}>
        <div className="card" style={{ padding: '2.5rem 2rem' }}>
          <AlertCircle size={48} color="#ef4444" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Authentication Failed</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            {error}
          </p>
          <button className="btn-primary" onClick={() => onNavigate('/')}>
            Return to Home
          </button>
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
