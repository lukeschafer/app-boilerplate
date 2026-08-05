import React from 'react';
import { FileText } from 'lucide-react';
import { BRANDING } from '../../config/branding';

export const TermsPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', padding: '3rem 0 5rem 0' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
          <FileText size={24} />
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Legal Agreement</span>
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
          Effective Date: {new Date().toLocaleDateString()} &bull; {BRANDING.appName}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7, fontSize: '0.9375rem' }}>
        <div className="card">
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>1. Agreement to Terms</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            By registering for, accessing, or using {BRANDING.appName} services, you enter into a binding agreement with us and agree to be bound by these Terms of Service. If you do not agree to these terms, you must refrain from using the platform.
          </p>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>2. Account Security & Use</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use or security breach.
          </p>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>3. Prohibited Conduct</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            You agree not to engage in any activity that interferes with or disrupts the application, including transmitting harmful code, attempting unauthorized access, or violating applicable regulations.
          </p>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>4. Termination</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We reserve the right to suspend or terminate your account and access to the service at our sole discretion, without prior notice, for conduct that violates these Terms of Service or is harmful to other users.
          </p>
        </div>
      </div>
    </div>
  );
};
