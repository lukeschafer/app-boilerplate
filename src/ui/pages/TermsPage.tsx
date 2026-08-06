import React from 'react';
import { FileText } from 'lucide-react';
import { BRANDING } from '../../config/branding';

export const TermsPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%', padding: '3rem 0 5rem 0' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
          <FileText size={24} />
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Legal Agreement & Terms of Use</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
          Effective Date: {new Date().toLocaleDateString()} &bull; Last Revised: {new Date().toLocaleDateString()} &bull; {BRANDING.appName} ({BRANDING.domain})
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, fontSize: '0.9375rem' }}>
        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>1. Agreement & Acceptance of Terms</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            These Terms of Service ("Terms", "Agreement") constitute a legally binding agreement between you ("User", "you", "your") and <strong>{BRANDING.appName}</strong> ("Company", "we", "us", "our"), regarding your access to and use of the website <strong>{BRANDING.domain}</strong> and all related applications, software, tools, and services (collectively, the "Service").
          </p>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
            By registering an account, accessing, or using any part of the Service, you confirm that you have read, understood, and agree to be bound by all terms, conditions, and disclaimers set forth herein. If you do not agree, you must discontinue use of the Service immediately.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>2. Provision of Service on a "Best Efforts" Basis</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            The Service is provided strictly on a commercial <strong>"best efforts"</strong> basis. While we endeavor to maintain system functionality and operational stability, we make no promises, guarantees, or commitments regarding service uptime, continuous availability, response speeds, data processing timeliness, or error-free operation. We reserve the right to modify, suspend, restrict, or discontinue any portion of the Service at any time without prior notice or liability.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>3. Absolute Disclaimer of Warranties</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED ENTIRELY ON AN <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE"</strong> BASIS. THE COMPANY EXPRESSLY DISCLAIMS ALL WARRANTIES, REPRESENTATIONS, AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
            <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</li>
            <li>WARRANTIES THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS.</li>
            <li>WARRANTIES THAT OPERATION WILL BE UNINTERRUPTED, TIMELY, SECURE, ACCURATE, COMPLETE, OR FREE FROM BUGS, VIRUSES, OR ERROR.</li>
            <li>WARRANTIES REGARDING THE RELIABILITY, ACCURACY, OR BACKUP SAFETY OF ANY DATA STORED OR PROCESSED ON THE SERVICE.</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>4. Total Release & Limitation of Liability</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS OWNERS, DIRECTORS, OFFICERS, EMPLOYEES, CONTRACTORS, AGENTS, AFFILIATES, OR SUPPLIERS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR RELIANCE DAMAGES WHATSOEVER.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
            THIS LIMITATION INCLUDES, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, DATA, SAVINGS, BUSINESS OPPORTUNITIES, OR BUSINESS INTERRUPTION, AS WELL AS ANY DAMAGES RESULTING FROM DATA LOSS, DATA CORRUPTION, SYSTEM FAILURE, SECURITY BREACH, UNSCHEDULED DOWNTIME, OR UNAUTHORIZED ACCESS, REGARDLESS OF CAUSE AND UNDER ANY THEORY OF LIABILITY (CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE), EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
            IN ANY EVENT, THE AGGREGATE CUMULATIVE LIABILITY OF THE COMPANY FOR ALL CLAIMS RELATING TO THE SERVICE SHALL BE STRICTLY LIMITED TO THE LESSER OF: (A) THE TOTAL AMOUNT PAID BY YOU TO THE COMPANY IN THE THIRTY (30) DAYS IMMEDIATELY PRECEDING THE CLAIM, OR (B) FIFTY US DOLLARS ($50.00 USD).
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>5. User Responsibility & Data Backup Waiver</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            You are solely responsible for your use of the Service, the security of your login credentials, and for maintaining independent off-site backups of all data, files, and content transmitted to or stored within the Service. You acknowledge that we assume no responsibility or liability for data loss, data corruption, hardware failure, or unauthorized account access resulting from your failure to maintain independent safeguards.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>6. Indemnification & Hold Harmless</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            You agree to defend, indemnify, release, and hold harmless the Company, its owners, operators, affiliates, officers, directors, employees, and agents from and against any and all third-party claims, liabilities, losses, damages, penalties, costs, and legal fees arising out of or related to: (a) your access to or use of the Service; (b) your violation of these Terms; (c) your violation of any third-party right; or (d) any data or content uploaded through your account.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>7. Account Security & Acceptable Use</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            You agree not to misuse the Service or attempt unauthorized access. Prohibited activities include:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Attempting to probe, scan, test vulnerabilities, or breach security access controls.</li>
            <li>Engaging in automated abuse, scraping, denial-of-service attacks, or transmitting malicious software.</li>
            <li>Using the Service for unlawful, fraudulent, or harmful purposes.</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>8. Subscriptions, Fees & Non-Refundability</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Subscription fees are billed in advance on a recurring schedule based on your selected plan. All fees paid are non-refundable and non-creditable, regardless of account usage, subscription cancellation, or service modification.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>9. Governing Law & Dispute Resolution</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Company operates, without giving effect to conflicts of laws principles. You agree to resolve any dispute or claim arising out of these Terms through binding individual arbitration, waiving any right to participate in class actions or jury trials.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>10. Severability & Entire Agreement</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            If any provision of these Terms is deemed invalid or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall remain in full force and effect. These Terms constitute the complete agreement between you and the Company concerning the Service.
          </p>
        </section>
      </div>
    </div>
  );
};
