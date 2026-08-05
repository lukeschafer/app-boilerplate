import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Turnstile } from './Turnstile';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser?: { id: string; name: string; email: string } | null;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose, currentUser }) => {
  const [name, setName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [message, setMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('1x00000000000000000000AA');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || (!currentUser && (!email || !name))) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/help', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          email: currentUser?.email || email,
          name: currentUser?.name || name,
          userId: currentUser?.id,
          turnstileToken,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit support request');
      }

      setSuccess(true);
      setMessage('');
    } catch (err: any) {
      setError(err.message || 'An error occurred while submitting your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Contact Support</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Submit your inquiry to our customer service team.
            </p>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', color: 'var(--text-muted)', border: 'none', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        {success ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Request Submitted</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Your inquiry has been received. Our support team will review it and get back to you shortly.
            </p>
            <button className="btn-primary" onClick={() => { setSuccess(false); onClose(); }}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {error && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: 'var(--radius-sm)',
                color: '#ef4444',
                fontSize: '0.875rem'
              }}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            {currentUser ? (
              <div style={{
                padding: '0.75rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                fontSize: '0.875rem'
              }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Submitting As:</div>
                <div style={{ fontWeight: 500 }}>{currentUser.name} ({currentUser.email})</div>
              </div>
            ) : (
              <>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.375rem', color: 'var(--text-secondary)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.375rem', color: 'var(--text-secondary)' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.375rem', color: 'var(--text-secondary)' }}>
                Message
              </label>
              <textarea
                className="input-field"
                rows={4}
                placeholder="Describe your question or request in detail..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <Turnstile onVerify={(token) => setTurnstileToken(token)} />

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button type="button" className="btn-secondary" onClick={onClose} disabled={loading}>
                Cancel
              </button>
              <button type="submit" className="btn-primary" disabled={loading}>
                <Send size={16} />
                <span>{loading ? 'Sending...' : 'Submit Request'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
