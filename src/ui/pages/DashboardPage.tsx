import React from 'react';
import { User, ShieldCheck, Mail, LogOut, LogIn } from 'lucide-react';
import { BRANDING } from '../../config/branding';

interface DashboardPageProps {
  currentUser: { id: string; name: string; email: string } | null;
  onOpenHelp: () => void;
  onLogin: () => void;
  onLogout: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  currentUser,
  onOpenHelp,
  onLogin,
  onLogout,
}) => {
  if (!currentUser) {
    return (
      <div style={{ maxWidth: '600px', margin: '4rem auto', width: '100%', textAlign: 'center' }}>
        <div className="card" style={{ padding: '3rem 2rem' }}>
          <User size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>Sign In Required</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', marginBottom: '2rem' }}>
            Please sign in to access your workspace dashboard and manage your account.
          </p>
          <button className="btn-primary" onClick={onLogin} style={{ padding: '0.75rem 2rem' }}>
            <LogIn size={18} />
            <span>Sign In to {BRANDING.appName}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', padding: '3rem 0 5rem 0' }}>
      <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>User Workspace</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
            Welcome back, {currentUser.name}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn-secondary" onClick={onOpenHelp}>
            <Mail size={16} />
            <span>Support</span>
          </button>
          <button className="btn-secondary" onClick={onLogout} style={{ color: '#ef4444' }}>
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <User size={20} color="var(--accent)" />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Account Profile</h3>
          </div>
          <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div><span style={{ color: 'var(--text-muted)' }}>Name:</span> {currentUser.name}</div>
            <div><span style={{ color: 'var(--text-muted)' }}>Email:</span> {currentUser.email}</div>
            <div><span style={{ color: 'var(--text-muted)' }}>Account ID:</span> <code>{currentUser.id}</code></div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <ShieldCheck size={20} color="var(--accent)" />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Subscription Plan</h3>
          </div>
          <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div><span style={{ color: 'var(--text-muted)' }}>Current Plan:</span> Standard Workspace</div>
            <div><span style={{ color: 'var(--text-muted)' }}>Status:</span> Active</div>
          </div>
        </div>
      </div>
    </div>
  );
};
