import React from 'react';
import { PricingSection } from '../components/PricingSection';

interface PricingPageProps {
  onNavigate: (path: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', padding: '3rem 0 5rem 0' }}>
      <PricingSection onNavigate={onNavigate} showTitle={true} />
    </div>
  );
};
