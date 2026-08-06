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
  const [themeMode] = useState<'light' | 'dark'>(BRANDING.defaultMode);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  
  // Default user state is strictly null (logged out)
  const [currentUser, setCurrentUser] = useState<{ id: string; name: string; email: string } | null>(null);

  useEffect(() => {
    applyTheme(BRANDING.paletteId, themeMode);
  }, [themeMode]);

  useEffect(() => {
    // Dynamic page title management for SEO & browser navigation
    switch (currentPath) {
      case '/pricing':
        document.title = `Transparent Pricing - ${BRANDING.appName}`;
        break;
      case '/privacy':
        document.title = `Privacy Policy - ${BRANDING.appName}`;
        break;
      case '/terms':
        document.title = `Terms of Service - ${BRANDING.appName}`;
        break;
      case '/dashboard':
        document.title = `Dashboard - ${BRANDING.appName}`;
        break;
      case '/':
      default:
        document.title = `${BRANDING.appName} - ${BRANDING.tagline}`;
        break;
    }
  }, [currentPath]);

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

  const handleLogin = () => {
    // Simulated OIDC authentication callback
    setCurrentUser({
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: 'Authenticated User',
      email: 'user@example.com',
    });
    handleNavigate('/dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    handleNavigate('/');
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case '/privacy':
        return <PrivacyPage currentUser={currentUser} />;
      case '/terms':
        return <TermsPage />;
      case '/dashboard':
        return (
          <DashboardPage
            currentUser={currentUser}
            onOpenHelp={() => setIsHelpOpen(true)}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />
        );
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
        onOpenHelp={() => setIsHelpOpen(true)}
        currentUser={currentUser}
        onLogin={handleLogin}
      />

      <main style={{ flex: 1, padding: '0 1.5rem' }}>{renderPage()}</main>

      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} currentUser={currentUser} />

      <Footer onNavigate={handleNavigate} onOpenHelp={() => setIsHelpOpen(true)} />
    </div>
  );
};
