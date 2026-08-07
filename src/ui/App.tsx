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
import { CallbackPage } from './pages/CallbackPage';
import { initiateOidcLogin } from './lib/oidc';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [themeMode] = useState<'light' | 'dark'>(BRANDING.defaultMode);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  
  // Restore authenticated session from localStorage if present, else null (logged out)
  const [currentUser, setCurrentUser] = useState<{ id: string; name: string; email: string } | null>(() => {
    try {
      const saved = localStorage.getItem('auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

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
      case '/auth/callback':
        document.title = `Authenticating - ${BRANDING.appName}`;
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
    // Initiate real OIDC PKCE Authorization Redirect to Identity Provider
    initiateOidcLogin().catch((err) => {
      console.error('OIDC login initiation failed:', err);
    });
  };

  const handleDevLogin = () => {
    const devUser = {
      id: 'usr_dev_' + Math.random().toString(36).substring(2, 8),
      name: 'Demo Developer',
      email: 'dev@example.com',
    };
    localStorage.setItem('auth_user', JSON.stringify(devUser));
    setCurrentUser(devUser);
    handleNavigate('/dashboard');
  };

  const handleOidcSuccess = (user: { id: string; name: string; email: string }) => {
    localStorage.setItem('auth_user', JSON.stringify(user));
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_user');
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
      case '/auth/callback':
        return (
          <CallbackPage
            onSuccess={handleOidcSuccess}
            onNavigate={handleNavigate}
            onDevLogin={handleDevLogin}
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
