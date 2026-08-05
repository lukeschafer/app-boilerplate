import React, { useState } from 'react';
import { User, Palette as PaletteIcon, ShieldCheck, Database, Mail } from 'lucide-react';
import { BRANDING, applyTheme } from '../../config/branding';
import { PALETTES } from '../../theme/palettes';

interface DashboardPageProps {
  currentUser: { id: string; name: string; email: string } | null;
  onOpenHelp: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ currentUser, onOpenHelp }) => {
  const [selectedPalette, setSelectedPalette] = useState(BRANDING.paletteId);

  const handlePaletteChange = (paletteId: string) => {
    setSelectedPalette(paletteId);
    applyTheme(paletteId, BRANDING.defaultMode);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', padding: '3rem 0 5rem 0' }}>
      <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Application Control Center</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
            Logged in as {currentUser ? currentUser.name : 'Guest User'}
          </p>
        </div>

        <button className="btn-primary" onClick={onOpenHelp}>
          <Mail size={16} />
          <span>Need Assistance</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <User size={20} color="var(--accent)" />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Account Profile</h3>
          </div>
          <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div><span style={{ color: 'var(--text-muted)' }}>Name:</span> {currentUser?.name || 'Guest Explorer'}</div>
            <div><span style={{ color: 'var(--text-muted)' }}>Email:</span> {currentUser?.email || 'guest@luminaapp.com'}</div>
            <div><span style={{ color: 'var(--text-muted)' }}>Status:</span> Authenticated via IDPFlare</div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <ShieldCheck size={20} color="var(--accent)" />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Cloudflare Security</h3>
          </div>
          <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div><span style={{ color: 'var(--text-muted)' }}>Turnstile Site Key:</span> <code>{BRANDING.turnstileSiteKey.slice(0, 10)}...</code></div>
            <div><span style={{ color: 'var(--text-muted)' }}>Bot Verification:</span> Active</div>
            <div><span style={{ color: 'var(--text-muted)' }}>Security Level:</span> Strict Edge</div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Database size={20} color="var(--accent)" />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>D1 Storage</h3>
          </div>
          <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div><span style={{ color: 'var(--text-muted)' }}>Database Name:</span> <code>{BRANDING.appSlug}-db</code></div>
            <div><span style={{ color: 'var(--text-muted)' }}>Media Caching:</span> Immutable Cache Header</div>
          </div>
        </div>
      </div>

      {/* Palette Live Preview Card */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <PaletteIcon size={20} color="var(--accent)" />
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Live Branding Palette Switcher</h3>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          Test all 5 curated palettes live in the application:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          {Object.values(PALETTES).map((pal) => (
            <button
              key={pal.id}
              onClick={() => handlePaletteChange(pal.id)}
              className="btn-secondary"
              style={{
                justifyContent: 'space-between',
                borderColor: selectedPalette === pal.id ? 'var(--accent)' : 'var(--border)',
                fontWeight: selectedPalette === pal.id ? 600 : 400,
              }}
            >
              <span>{pal.name}</span>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: pal.dark.accent }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
