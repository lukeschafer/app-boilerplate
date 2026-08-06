import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { BRANDING } from '../../config/branding';
import { PRICING_CONFIG } from '../../config/pricing';

interface PricingSectionProps {
  onNavigate: (path: string) => void;
  showTitle?: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onNavigate, showTitle = true }) => {
  // Auto-detect currency based on user timezone / locale
  const detectInitialCurrency = (): 'USD' | 'AUD' => {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (timeZone.toLowerCase().includes('australia') || timeZone.toLowerCase().includes('sydney') || timeZone.toLowerCase().includes('melbourne')) {
        return 'AUD';
      }
    } catch (e) {
      // Fallback
    }
    return 'USD';
  };

  const [currency, setCurrency] = useState<'USD' | 'AUD'>(detectInitialCurrency);
  const currentPrices = PRICING_CONFIG[currency];

  return (
    <div style={{ width: '100%' }}>
      {showTitle && (
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Transparent Pricing</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Simple, predictable plans for {BRANDING.appName}.</p>
        </div>
      )}

      {/* Currency Toggle Switch */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>Currency:</span>
        <div
          style={{
            display: 'inline-flex',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '9999px',
            padding: '3px',
          }}
        >
          <button
            onClick={() => setCurrency('USD')}
            style={{
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.8125rem',
              fontWeight: 600,
              backgroundColor: currency === 'USD' ? 'var(--accent)' : 'transparent',
              color: currency === 'USD' ? '#ffffff' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            USD ($)
          </button>
          <button
            onClick={() => setCurrency('AUD')}
            style={{
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.8125rem',
              fontWeight: 600,
              backgroundColor: currency === 'AUD' ? 'var(--accent)' : 'transparent',
              color: currency === 'AUD' ? '#ffffff' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            AUD ($)
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Basic Plan */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Basic</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Essential features for your workflow.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>{currentPrices.symbol}{currentPrices.basic}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}> {currentPrices.code} / month</span>
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
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Try full access before subscribing.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>{currentPrices.symbol}{currentPrices.trial}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}> {currentPrices.code} first month</span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
            {[
              `${currentPrices.symbol}${currentPrices.trial} for the first month!`,
              `${currentPrices.symbol}${currentPrices.trialThereafter} Thereafter`,
              'Same features as Basic',
            ].map((feat, idx) => (
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

        {/* Perpetual Plan */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Perpetual</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>One-time purchase for lifetime license.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>{currentPrices.symbol}{currentPrices.perpetual}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}> {currentPrices.code} one-time purchase</span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
            {[
              'Pay once, use forever (*)',
              'No ongoing subscription fee',
              'Same features as Basic',
            ].map((feat, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <Check size={16} color="var(--accent)" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <button className="btn-secondary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }} onClick={() => onNavigate('/dashboard')}>
            Buy Perpetual License
          </button>
        </div>
      </div>

      {/* Footnote Link */}
      <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        * See{' '}
        <button
          onClick={() => onNavigate('/terms')}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', textDecoration: 'underline', cursor: 'pointer', padding: 0, fontSize: '0.75rem' }}
        >
          Terms of Service
        </button>{' '}
        for lifetime license terms and operational conditions.
      </div>
    </div>
  );
};
