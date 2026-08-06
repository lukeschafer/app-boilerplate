import React from 'react';
import { ArrowRight, Star, Layers, Check } from 'lucide-react';
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
      <section style={{ textAlign: 'center', paddingTop: '4rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
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
          {BRANDING.description}
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

      {/* Product Screenshot Mockup */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <ProductScreenshot />
      </section>

      {/* 3 Placeholder Feature Cards */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Core Capabilities</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Simple, powerful tools designed for modern teams.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="card">
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <Layers size={32} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Feature 1</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Insert Feature Subline Here
            </p>
          </div>

          <div className="card">
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <Star size={32} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Feature 2</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Insert Feature Subline Here
            </p>
          </div>

          <div className="card">
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <ArrowRight size={32} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Feature 3</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Insert Feature Subline Here
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Transparent Pricing</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Simple, predictable plans for {BRANDING.appName}.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Starter Plan */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Starter</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Essential features to get started.</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>$9</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}> / month</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
              {['Feature 1', 'Feature 2', 'Feature 3'].map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={16} color="var(--accent)" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button className="btn-secondary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }} onClick={() => onNavigate('/dashboard')}>
              Get Started
            </button>
          </div>

          {/* Trial Plan */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', borderColor: 'var(--accent)', borderWidth: '2px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', right: '20px', backgroundColor: 'var(--accent)', color: '#ffffff', fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
              Popular
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Trial</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Try full access before committing.</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>$1</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}> trial, then $9 / month</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
              {['Feature 1', 'Feature 2', 'Feature 3'].map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={16} color="var(--accent)" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }} onClick={() => onNavigate('/dashboard')}>
              Start Trial
            </button>
          </div>

          {/* Extra Plan */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Extra</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>For advanced usage and growing teams.</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>$19</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}> / month</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
              {['Feature 1', 'Feature 2', 'Feature 3'].map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={16} color="var(--accent)" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button className="btn-secondary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }} onClick={() => onNavigate('/dashboard')}>
              Get Extra Plan
            </button>
          </div>
        </div>
      </section>

      {/* Support CTA Banner */}
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
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Ready to get started with {BRANDING.appName}?</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', fontSize: '0.9375rem' }}>
            Have questions or need assistance? Our support team is here to help.
          </p>
          <button className="btn-primary" onClick={onOpenHelp}>
            <span>Contact Support</span>
          </button>
        </div>
      </section>
    </div>
  );
};
