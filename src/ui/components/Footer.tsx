import React from 'react';
import { Layers } from 'lucide-react';
import { BRANDING } from '../../config/branding';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenHelp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenHelp }) => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <div style={{ maxWidth: '320px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <Layers size={14} />
            </div>
            <span>{BRANDING.appName}</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            {BRANDING.description}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li>
                <button onClick={() => onNavigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/pricing')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Legal & Privacy
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li>
                <button onClick={() => onNavigate('/privacy')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                  Privacy Policy (GDPR)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Support
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li>
                <button onClick={onOpenHelp} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                  Contact Helpdesk
                </button>
              </li>
              <li style={{ color: 'var(--text-muted)' }}>{BRANDING.supportEmail}</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '2rem auto 0 auto',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
        }}
      >
        <span>&copy; {new Date().getFullYear()} {BRANDING.appName}. All rights reserved.</span>
        <span>Built natively on Cloudflare Edge</span>
      </div>
    </footer>
  );
};
