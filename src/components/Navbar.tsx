import React from 'react';
import { InbblLogo } from './InbblLogo';

interface NavbarProps {
  onOpenPrivacy?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrivacy }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-6 h-18 flex items-center justify-between py-3.5">
        
        {/* INBBL Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <InbblLogo variant="mark" size="sm" className="group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-black leading-none">INBBL</span>
            <span className="text-[9px] tracking-widest text-stone-500 font-bold uppercase mt-1">Same world. Closer.</span>
          </div>
        </a>

        {/* Minimal Navigation & CTA */}
        <div className="flex items-center gap-6">
          <a href="#features" className="text-xs font-bold text-stone-600 hover:text-black transition">
            Features
          </a>
          <a 
            href="#privacy" 
            onClick={(e) => {
              if (onOpenPrivacy) {
                e.preventDefault();
                onOpenPrivacy();
              }
            }}
            className="text-xs font-bold text-stone-600 hover:text-black transition cursor-pointer"
          >
            Privacy
          </a>
          <a 
            href="#get-app" 
            className="bg-black hover:bg-stone-800 text-white text-xs font-extrabold px-5 py-2.5 rounded-full transition shadow-sm"
          >
            Get the App
          </a>
        </div>

      </div>
    </header>
  );
};
