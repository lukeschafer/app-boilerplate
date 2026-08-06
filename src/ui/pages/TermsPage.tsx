import React from 'react';
import { FileText } from 'lucide-react';
import { BRANDING } from '../../config/branding';

export const TermsPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%', padding: '3rem 0 5rem 0' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
          <FileText size={24} />
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Terms of Service & User Agreement</span>
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
            These Terms of Service ("Terms", "Agreement") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("User", "you"), and <strong>{BRANDING.appName}</strong> ("Company", "we", "us", "our"), concerning your access to and use of the website located at <strong>{BRANDING.domain}</strong> and all related applications, tools, and services (collectively, the "Service").
          </p>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
            By registering an account, accessing, or using any part of the Service, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree with all of these Terms, you are expressly prohibited from using the Service and must discontinue use immediately.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>2. Account Registration & Security</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            To access certain features of the Service, you may be required to register for an account. By creating an account, you agree to:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Provide accurate, current, and complete information during registration.</li>
            <li>Maintain and promptly update your account details to keep them accurate and complete.</li>
            <li>Safeguard your authentication credentials and accept full responsibility for all activities occurring under your account.</li>
            <li>Notify us immediately of any unauthorized access, security breach, or compromise of account credentials.</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>3. Acceptable Use & Conduct Restrictions</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            You agree to use the Service strictly for lawful business and personal purposes. You agree **not** to engage in any of the following prohibited actions:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Systematically retrieve data or content from the Service to create a competing product, service, or database without prior written consent.</li>
            <li>Attempt to bypass, disable, or interfere with security features, access controls, or rate-limiting mechanisms of the Service.</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code or underlying architecture of the Service.</li>
            <li>Transmit unsolicited commercial emails, automated spam, viruses, trojans, or malicious code designed to disrupt system infrastructure.</li>
            <li>Use the Service in any manner that violates applicable local, state, national, or international laws or regulations.</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>4. Subscriptions, Pricing & Payment Terms</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Certain tiers of the Service are offered on a paid subscription basis. By purchasing a subscription tier, you agree to the following pricing terms:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Billing Cycle:</strong> Subscription fees are billed in advance on a recurring monthly or annual basis depending on your selected billing plan.</li>
            <li><strong>Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing period unless cancelled prior to the renewal date via your account dashboard.</li>
            <li><strong>Taxes & Fees:</strong> You are responsible for all applicable taxes, duties, and government assessments associated with your purchase.</li>
            <li><strong>Refund Policy:</strong> All fees paid are non-refundable except where explicitly required by mandatory applicable law or specified in a signed service agreement.</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>5. Intellectual Property Rights & Ownership</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            The Service, including all software code, interface design, logos, trademarks, text, graphics, and underlying technology, is the exclusive property of {BRANDING.appName} and its licensors, protected by copyright, trademark, and intellectual property laws. Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your authorized purposes.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
            You retain full ownership rights over any data, images, or content you submit to the Service. By uploading content, you grant us a worldwide, royalty-free license to host, process, and display your data strictly as necessary to provide the Service to you.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>6. Service Availability & Modifications</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We continuously improve our platform and reserve the right to update, modify, suspend, or discontinue any feature or aspect of the Service at any time without prior notice. While we strive to maintain 99.9% uptime availability, we do not guarantee uninterrupted access and shall not be liable for temporary network downtime, scheduled maintenance, or circumstances beyond our reasonable control.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>7. Disclaimer of Warranties</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>8. Limitation of Liability</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {BRANDING.appName}, ITS DIRECTORS, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES—INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION—ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF THE SERVICE, REGARDLESS OF THE THEORY OF LIABILITY.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>9. Indemnification</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            You agree to defend, indemnify, and hold harmless {BRANDING.appName} and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses (including reasonable legal fees) arising out of or relating to your violation of these Terms or your unauthorized use of the Service.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>10. Governing Law & Dispute Resolution</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Company is registered, without regard to its conflict of law principles. Any dispute arising out of these Terms shall be submitted to confidential arbitration or the competent courts of that jurisdiction.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>11. Amendments & Termination</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We reserve the right to amend these Terms at any time by posting updated terms on {BRANDING.domain}. Your continued use of the Service following such posting constitutes acceptance of the modified Terms. We reserve the right to terminate or suspend your account access immediately for any breach of these Terms.
          </p>
        </section>
      </div>
    </div>
  );
};
