import React from 'react';
import { Check } from 'lucide-react';
import { BRANDING } from '../../config/branding';

interface PricingPageProps {
  onNavigate: (path: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', padding: '3rem 0 5rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Transparent Pricing
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          Simple, predictable plans for {BRANDING.appName}.
        </p>
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
    </div>
  );
};
