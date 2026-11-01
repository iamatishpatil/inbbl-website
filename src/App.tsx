import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-inbbl-purple selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
