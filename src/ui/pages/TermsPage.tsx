import React from 'react';
import { FileText } from 'lucide-react';
import { BRANDING } from '../../config/branding';

export const TermsPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', padding: '3rem 0 5rem 0' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
          <FileText size={24} />
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Legal Agreement</span>
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
          Effective Date: {new Date().toLocaleDateString()} &bull; {BRANDING.appName}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7, fontSize: '0.9375rem' }}>
        <div className="card">
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>1. Acceptance of Terms</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            By accessing or utilizing services provided under {BRANDING.domain}, you agree to comply with these terms. If you do not accept these terms, you may not access the platform.
          </p>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>2. Use of Service</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            You are responsible for maintaining the security of your authentication tokens and for all activities conducted through your account. You agree not to misuse the service or attempt unauthorized access to edge resources.
          </p>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>3. Service Level & Availability</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {BRANDING.appName} is hosted on Cloudflare's global edge network. While we strive for 99.9% uptime, services are provided on an "as is" and "as available" basis.
          </p>
        </div>
      </div>
    </div>
  );
};
