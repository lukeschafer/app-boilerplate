import React from 'react';
import { Layers, HelpCircle, Sun, Moon, User } from 'lucide-react';
import { BRANDING } from '../../config/branding';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenHelp: () => void;
  currentUser?: { name: string } | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  themeMode,
  onToggleTheme,
  onOpenHelp,
  currentUser,
}) => {
  return (
    <header
      style={{
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg-secondary)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0.875rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          onClick={() => onNavigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '1.125rem',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
            }}
          >
            <Layers size={20} />
          </div>
          <span>{BRANDING.appName}</span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button
            onClick={() => onNavigate('/')}
            style={{
              background: 'none',
              border: 'none',
              color: currentPath === '/' ? 'var(--text-primary)' : 'var(--text-muted)',
              fontWeight: currentPath === '/' ? 600 : 400,
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate('/pricing')}
            style={{
              background: 'none',
              border: 'none',
              color: currentPath === '/pricing' ? 'var(--text-primary)' : 'var(--text-muted)',
              fontWeight: currentPath === '/pricing' ? 600 : 400,
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            Pricing
          </button>
          <button
            onClick={() => onNavigate('/privacy')}
            style={{
              background: 'none',
              border: 'none',
              color: currentPath === '/privacy' ? 'var(--text-primary)' : 'var(--text-muted)',
              fontWeight: currentPath === '/privacy' ? 600 : 400,
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            Privacy
          </button>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onToggleTheme}
            className="btn-secondary"
            style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}
            title="Toggle theme mode"
          >
            {themeMode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button onClick={onOpenHelp} className="btn-secondary">
            <HelpCircle size={16} />
            <span>Help</span>
          </button>

          {currentUser ? (
            <button onClick={() => onNavigate('/dashboard')} className="btn-primary">
              <User size={16} />
              <span>{currentUser.name}</span>
            </button>
          ) : (
            <button onClick={() => onNavigate('/dashboard')} className="btn-primary">
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
