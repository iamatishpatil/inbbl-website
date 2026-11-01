import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export function App() {
  const [view, setView] = useState<'home' | 'privacy'>('home');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#privacy') {
        setView('privacy');
        window.scrollTo(0, 0);
      } else if (window.location.hash === '' || window.location.hash === '#features' || window.location.hash === '#get-app') {
        if (view === 'privacy') {
          setView('home');
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [view]);

  const openPrivacy = () => {
    window.location.hash = 'privacy';
    setView('privacy');
    window.scrollTo(0, 0);
  };

  const closePrivacy = () => {
    window.location.hash = '';
    setView('home');
    window.scrollTo(0, 0);
  };

  if (view === 'privacy') {
    return <PrivacyPolicy onBack={closePrivacy} />;
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-inbbl-purple selection:text-white">
      <Navbar onOpenPrivacy={openPrivacy} />
      <Hero />
      <Features />
      <Footer onOpenPrivacy={openPrivacy} />
    </div>
  );
}

export default App;
