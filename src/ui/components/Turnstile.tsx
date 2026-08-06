import React, { useEffect, useRef } from 'react';
import { BRANDING } from '../../config/branding';

interface TurnstileProps {
  onVerify: (token: string) => void;
}

export const Turnstile: React.FC<TurnstileProps> = ({ onVerify }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In dev / testing, auto-pass with standard test token
    const siteKey = BRANDING.turnstileSiteKey || '1x00000000000000000000AA';

    if (siteKey === '1x00000000000000000000AA') {
      onVerify('1x00000000000000000000AA');
      return;
    }

    // Load Cloudflare Turnstile script dynamically if not present
    if (!window.turnstile) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        if (window.turnstile && containerRef.current) {
          window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: onVerify,
          });
        }
      };
    } else if (containerRef.current) {
      window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
      });
    }
  }, [onVerify]);

  return (
    <div className="turnstile-container" style={{ margin: '0.5rem 0' }}>
      <div ref={containerRef} />
    </div>
  );
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: { sitekey: string; callback: (token: string) => void }) => void;
    };
  }
}
