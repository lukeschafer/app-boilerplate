import React from 'react';
import { Activity, Shield, Cpu, Database, Server, Check } from 'lucide-react';
import { BRANDING } from '../../config/branding';

export const ProductScreenshot: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Mock Window Titlebar */}
      <div
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border)',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            backgroundColor: 'var(--bg-primary)',
            padding: '0.2rem 0.75rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border)',
          }}
        >
          app.{BRANDING.domain}
        </div>
      </div>

      {/* Mock Product Workspace Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Header KPI Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          <div
            style={{
              padding: '1rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Global Latency</span>
              <Activity size={16} color="var(--accent)" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>18 ms</div>
            <div style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Check size={12} /> Edge Network Active
            </div>
          </div>

          <div
            style={{
              padding: '1rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>D1 Database Query</span>
              <Database size={16} color="var(--accent)" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>1.2 ms</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SQLite Edge Replica</div>
          </div>

          <div
            style={{
              padding: '1rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Security Status</span>
              <Shield size={16} color="var(--accent)" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Verified</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Turnstile & OIDC Protected</div>
          </div>
        </div>

        {/* Mock Data Table / Log Output */}
        <div
          style={{
            padding: '1.25rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Active Edge Workers</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Region: Global Anycast</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem' }}>
            {[
              { id: 'wrk_8912', route: '/api/help', status: '200 OK', duration: '4ms' },
              { id: 'wrk_4421', route: '/api/gdpr/export', status: '200 OK', duration: '9ms' },
              { id: 'wrk_1190', route: '/api/auth/me', status: '200 OK', duration: '3ms' },
            ].map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justify: 'space-between',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{row.id}</span>
                  <span style={{ fontWeight: 500 }}>{row.route}</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ color: '#10b981' }}>{row.status}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{row.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
