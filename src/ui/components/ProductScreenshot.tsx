import React from 'react';
import { Users, TrendingUp, ShieldCheck, Check } from 'lucide-react';
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

      {/* Mock SaaS Product Workspace Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* KPI Row */}
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
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active Users</span>
              <Users size={16} color="var(--accent)" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>1,280</div>
            <div style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <TrendingUp size={12} /> +14% this month
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
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Monthly Recurring</span>
              <TrendingUp size={16} color="var(--accent)" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>$12,450</div>
            <div style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <TrendingUp size={12} /> +8% vs last month
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
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Platform Status</span>
              <ShieldCheck size={16} color="var(--accent)" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Operational</div>
            <div style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Check size={12} /> All Systems Normal
            </div>
          </div>
        </div>

        {/* Mock Activity Log */}
        <div
          style={{
            padding: '1.25rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Recent Activity</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Live Feed</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem' }}>
            {[
              { user: 'Sarah Jenkins', event: 'Upgraded to Pro Plan', time: '2 mins ago' },
              { user: 'Alex Rivera', event: 'Created new project workspace', time: '15 mins ago' },
              { user: 'Michael Chen', event: 'Completed team onboarding', time: '1 hour ago' },
            ].map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ fontWeight: 500 }}>{row.user}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{row.event}</span>
                </div>
                <span style={{ color: 'var(--text-muted)' }}>{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
