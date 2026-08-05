import React, { useState, useEffect } from 'react';
import { BRANDING, applyTheme } from '../config/branding';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HelpModal } from './components/HelpModal';
import { LandingPage } from './pages/LandingPage';
import { PricingPage } from './pages/PricingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { DashboardPage } from './pages/DashboardPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(BRANDING.defaultMode);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [currentUser] = useState<{ id: string; name: string; email: string } | null>({
    id: 'usr_881902',
    name: 'Luke Schafer',
    email: 'luke@example.com',
  });

  useEffect(() => {
    applyTheme(BRANDING.paletteId, themeMode);
  }, [themeMode]);

  const handleToggleTheme = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/dashboard':
        return <DashboardPage currentUser={currentUser} onOpenHelp={() => setIsHelpOpen(true)} />;
      case '/':
      default:
        return <LandingPage onNavigate={handleNavigate} onOpenHelp={() => setIsHelpOpen(true)} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        themeMode={themeMode}
        onToggleTheme={handleToggleTheme}
        onOpenHelp={() => setIsHelpOpen(true)}
        currentUser={currentUser}
      />

      <main style={{ flex: 1, padding: '0 1.5rem' }}>{renderPage()}</main>

      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} currentUser={currentUser} />

      <Footer onNavigate={handleNavigate} onOpenHelp={() => setIsHelpOpen(true)} />
    </div>
  );
};
