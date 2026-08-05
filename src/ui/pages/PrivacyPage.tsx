import React, { useState } from 'react';
import { Shield, Download, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import { BRANDING } from '../../config/branding';

export const PrivacyPage: React.FC = () => {
  const [exportData, setExportData] = useState<any>(null);
  const [loadingExport, setLoadingExport] = useState(false);
  const [deletionStatus, setDeletionStatus] = useState('');

  const handleExportData = async () => {
    setLoadingExport(true);
    try {
      const res = await fetch('/api/gdpr/export?userId=demo-user');
      const data = await res.json();
      setExportData(data);
    } catch (err) {
      console.error('Export error:', err);
    } finally {
      setLoadingExport(false);
    }
  };

  const handleDeleteData = async () => {
    if (!confirm('Are you sure you want to permanently erase all personal data associated with your account?')) {
      return;
    }
    try {
      const res = await fetch('/api/gdpr/account', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'demo-user' }),
      });
      const data = await res.json();
      setDeletionStatus(data.message || 'Data deleted successfully.');
      setExportData(null);
    } catch (err) {
      console.error('Deletion error:', err);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', padding: '3rem 0 5rem 0' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
          <Shield size={24} />
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>GDPR Data Sovereignty</span>
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
          Last updated: {new Date().toLocaleDateString()} &bull; Applies to {BRANDING.domain}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, fontSize: '0.9375rem' }}>
        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>1. Data Controller Statement</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {BRANDING.appName} operates natively on Cloudflare infrastructure. We process data strictly to provide and maintain our services. We do not sell user personal data or employ third-party tracking cookies.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>2. Data Collection & Processing</h2>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Identity Data:</strong> Provided via IDPFlare single sign-on (name, email).</li>
            <li><strong>Support Inquiries:</strong> Messages sent via the Help system stored in Cloudflare D1.</li>
            <li><strong>Security Tokens:</strong> Processed via Cloudflare Turnstile for bot prevention.</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>3. Your Rights Under GDPR</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Under the EU General Data Protection Regulation (GDPR), you hold full rights to access, export, or erase your data at any time.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={handleExportData} disabled={loadingExport}>
              <Download size={16} />
              <span>{loadingExport ? 'Fetching Bundle...' : 'Export My Data (JSON)'}</span>
            </button>

            <button className="btn-secondary" onClick={handleDeleteData} style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#ef4444' }}>
              <Trash2 size={16} />
              <span>Erase Account Data</span>
            </button>
          </div>

          {deletionStatus && (
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.875rem' }}>
              <CheckCircle size={16} />
              <span>{deletionStatus}</span>
            </div>
          )}

          {exportData && (
            <div style={{ marginTop: '1.25rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Exported Record Payload:</h4>
              <pre
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem',
                  fontSize: '0.75rem',
                  overflowX: 'auto',
                  maxHeight: '200px',
                }}
              >
                {JSON.stringify(exportData, null, 2)}
              </pre>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
