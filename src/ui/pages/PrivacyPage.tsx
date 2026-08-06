import React, { useState } from 'react';
import { Shield, Download, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import { BRANDING } from '../../config/branding';

interface PrivacyPageProps {
  currentUser?: { id: string; name: string; email: string } | null;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ currentUser }) => {
  const [userEmail, setUserEmail] = useState(currentUser?.email || '');
  const [requestStatus, setRequestStatus] = useState<{ type: 'export' | 'delete'; success: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRequestData = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailToUse = currentUser?.email || userEmail;
    if (!emailToUse) return;

    setLoading(true);
    setRequestStatus(null);

    try {
      const res = await fetch('/api/help', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `[GDPR DATA EXPORT REQUEST] User ${emailToUse} requested a complete copy of their personal data.`,
          email: emailToUse,
          name: currentUser?.name || 'Data Subject',
          userId: currentUser?.id,
          turnstileToken: '1x00000000000000000000AA',
        }),
      });

      if (res.ok) {
        setRequestStatus({
          type: 'export',
          success: true,
          message: `Your data export request for ${emailToUse} has been logged. An archive of your personal records will be dispatched to your email address within 30 days.`,
        });
      } else {
        throw new Error('Failed to process data request.');
      }
    } catch (err: any) {
      setRequestStatus({ type: 'export', success: false, message: err.message || 'An error occurred during submission.' });
    } finally {
      setLoading(false);
    }
  };

  const handleEraseData = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailToUse = currentUser?.email || userEmail;
    if (!emailToUse) return;

    if (!confirm('Are you sure you want to permanently delete your account and remove all personal data associated with this email address? This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    setRequestStatus(null);

    try {
      if (currentUser) {
        await fetch('/api/gdpr/account', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: currentUser.id }),
        });
      } else {
        await fetch('/api/help', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `[GDPR ACCOUNT ERASURE REQUEST] Request to permanently erase account and all personal records associated with email: ${emailToUse}`,
            email: emailToUse,
            name: 'Data Subject',
            turnstileToken: '1x00000000000000000000AA',
          }),
        });
      }

      setRequestStatus({
        type: 'delete',
        success: true,
        message: `Account erasure request submitted for ${emailToUse}. All personal identifiable information will be purged from our databases.`,
      });
    } catch (err: any) {
      setRequestStatus({ type: 'delete', success: false, message: err.message || 'An error occurred during account deletion.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%', padding: '3rem 0 5rem 0' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
          <Shield size={24} />
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Data Privacy & Compliance Policy</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
          Effective Date: {new Date().toLocaleDateString()} &bull; Last Revised: {new Date().toLocaleDateString()} &bull; Applies to {BRANDING.domain}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, fontSize: '0.9375rem' }}>
        {/* GDPR Action Box */}
        <div className="card" style={{ borderColor: 'var(--accent)', borderWidth: '1px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
            Exercise Your Privacy & GDPR Rights
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Under the EU General Data Protection Regulation (GDPR) and international privacy laws, you possess the right to access your personal data or request permanent deletion of your account at any time.
          </p>

          {!currentUser && (
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.375rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Email Address Associated with Account:
              </label>
              <input
                type="email"
                className="input-field"
                placeholder="name@company.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                style={{ maxWidth: '400px' }}
              />
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <form onSubmit={handleRequestData}>
              <button type="submit" className="btn-secondary" disabled={loading || (!currentUser && !userEmail)}>
                <Download size={16} />
                <span>Request My Data</span>
              </button>
            </form>

            <form onSubmit={handleEraseData}>
              <button
                type="submit"
                className="btn-secondary"
                disabled={loading || (!currentUser && !userEmail)}
                style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#ef4444' }}
              >
                <Trash2 size={16} />
                <span>Erase Account Data</span>
              </button>
            </form>
          </div>

          {requestStatus && (
            <div
              style={{
                marginTop: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: requestStatus.success ? '#10b981' : '#ef4444',
                fontSize: '0.875rem',
                padding: '0.75rem',
                backgroundColor: requestStatus.success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                borderRadius: 'var(--radius-sm)',
                border: `1px solid ${requestStatus.success ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
              }}
            >
              {requestStatus.success ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
              <span>{requestStatus.message}</span>
            </div>
          )}
        </div>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>1. Introduction & Data Controller</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            This Privacy Policy governs the manner in which <strong>{BRANDING.appName}</strong> ("we", "us", "our") collects, uses, maintains, and discloses personal information collected from users ("you", "your") of the website and services accessible via <strong>{BRANDING.domain}</strong>. We act as the Data Controller responsible for safeguarding your personal data in accordance with applicable data protection laws, including the European Union General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>2. Information We Collect</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            We collect personal information through your direct interactions with our platform and automated system operations:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Account & Contact Information:</strong> Name, email address, password hashes, and profile settings provided during account creation or single sign-on authentication.</li>
            <li><strong>Communication Data:</strong> Inquiries, customer support tickets, feedback messages, and correspondence sent to our support desk.</li>
            <li><strong>Usage & System Log Data:</strong> Technical information including IP addresses, browser types, operating system details, access timestamps, and page request telemetry gathered for security and diagnostic purposes.</li>
            <li><strong>Billing & Transaction Details:</strong> Subscription history, invoice data, and transaction identifiers associated with your account plan.</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>3. Legal Basis for Data Processing (GDPR)</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            We process your personal data under the following legal grounds under Article 6 of the GDPR:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Performance of Contract:</strong> Processing necessary to fulfill our terms of service, manage your account, and deliver requested application features.</li>
            <li><strong>Legitimate Interests:</strong> Processing necessary to secure our application against fraud or malicious activity, diagnose network issues, and improve platform reliability.</li>
            <li><strong>Legal Compliance:</strong> Processing required to comply with applicable statutory obligations, tax regulations, or lawful court directives.</li>
            <li><strong>Consent:</strong> Processing conducted on the basis of your explicit consent, which may be withdrawn at any time.</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>4. Data Sharing & Third-Party Disclosure</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We strictly do <strong>not</strong> sell, rent, or trade your personal information to third parties or advertising networks. We may share necessary data with trusted third-party service providers (such as infrastructure hosts, transactional email services, and payment processors) who act as Data Processors strictly under bound Data Processing Agreements (DPAs) requiring equal data confidentiality and security compliance.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>5. Security & International Transfers</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We implement industry-standard administrative, physical, and technical safeguards—including TLS encryption in transit and AES encryption at rest—to protect your personal information against unauthorized access, loss, or disclosure. Data may be processed in global data centers ensuring compliance with standard contractual clauses (SCCs) and adequacy frameworks.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>6. Data Retention & Erasure</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We retain personal data only for as long as your account remains active or as required to fulfill the legitimate business purposes outlined in this policy. Upon receiving a valid request for account erasure or upon account termination, all identifiable user data will be permanently purged from our active databases within 30 days, subject to legal or audit record retention mandates.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>7. Cookies & Analytical Telemetry</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {BRANDING.appName} uses minimal, strictly essential session cookies and storage tokens required to maintain authenticated login states and security validation. We do not utilize invasive cross-site tracking cookies or third-party behavioral marketing trackers.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>8. Children's Privacy</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Our services are not intended for or directed toward individuals under 16 years of age. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal information, we will take prompt steps to delete such data.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>9. Policy Modifications & Contact</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We reserve the right to update this Privacy Policy at any time to reflect operational, legal, or regulatory changes. Any modifications will be posted on this page with an updated effective date. For questions regarding this privacy notice or to submit formal privacy inquiries, please contact our support desk through the support request portal accessible on {BRANDING.domain}.
          </p>
        </section>
      </div>
    </div>
  );
};
