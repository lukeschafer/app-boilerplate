import React from 'react';
import { Shield, Zap, Database, Mail, Lock, ArrowRight, Check } from 'lucide-react';
import { BRANDING } from '../../config/branding';
import { ProductScreenshot } from '../components/ProductScreenshot';

interface LandingPageProps {
  onNavigate: (path: string) => void;
  onOpenHelp: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, onOpenHelp }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', paddingTop: '3rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 0.875rem',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '9999px',
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
          }}
        >
          <Zap size={14} color="var(--accent)" />
          <span>Cloudflare Edge Native Architecture</span>
        </div>

        <h1
          style={{
            fontSize: '3.25rem',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
            color: 'var(--text-primary)',
          }}
        >
          {BRANDING.tagline}
        </h1>

        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-muted)',
            maxWidth: '640px',
            margin: '0 auto 2rem auto',
            lineHeight: 1.6,
          }}
        >
          {BRANDING.description} Zero cold starts, global SQLite data storage with Cloudflare D1, and seamless IDPFlare single sign-on.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button className="btn-primary" onClick={() => onNavigate('/dashboard')} style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
            <span>Get Started</span>
            <ArrowRight size={18} />
          </button>
          <button className="btn-secondary" onClick={() => onNavigate('/pricing')} style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
            View Pricing
          </button>
        </div>
      </section>

      {/* Product Preview Screenshot Mockup */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <ProductScreenshot />
      </section>

      {/* Feature Highlights Grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Engineered for Performance</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Built from the ground up with resource discipline and edge deployment.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          <div className="card">
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Database size={20} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Cloudflare D1 Relational Engine</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Distributed SQLite SQL database running at the edge. Base64 media caching headers ensure sub-millisecond asset retrieval.
            </p>
          </div>

          <div className="card">
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Lock size={20} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>IDPFlare Identity Integration</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Self-hosted OAuth 2.0 and OpenID Connect identity provider pairing PKCE authorization code flows directly on Workers.
            </p>
          </div>

          <div className="card">
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Shield size={20} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Cloudflare Turnstile Security</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Privacy-preserving bot detection with server-side validation and automated fallback test key support for local & branch builds.
            </p>
          </div>

          <div className="card">
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Mail size={20} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Cloudflare Email Dispatch</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Integrated support ticketing system utilizing Cloudflare Email Sending for outbound notifications and Email Routing for inbound queries.
            </p>
          </div>

          <div className="card">
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Zap size={20} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Branch Deployment Tooling</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Built-in support for <code>@idpflare/cf-branch-wrangler</code> for automatic preview infrastructure creation across git branches.
            </p>
          </div>

          <div className="card">
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Check size={20} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>GDPR Data Sovereignty</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Compliant by design with built-in data export endpoints and Right to be Forgotten account deletion pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Help CTA Banner */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Need Assistance or Custom Setup?</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', fontSize: '0.9375rem' }}>
            Submit a support query directly through our integrated edge helpdesk.
          </p>
          <button className="btn-primary" onClick={onOpenHelp}>
            <Mail size={16} />
            <span>Open Support Request</span>
          </button>
        </div>
      </section>
    </div>
  );
};
