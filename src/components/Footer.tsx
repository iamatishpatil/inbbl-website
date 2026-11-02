import React from 'react';
import { Apple, Play, ArrowUpRight } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <>
      {/* High-Impact Bottom Call to Action */}
      <section id="get-app" className="py-24 bg-black text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 space-y-6 relative z-10">
          
          <div className="flex justify-center">
            <InbblLogo variant="mark" size="md" className="w-12 h-16 hover:scale-105 transition-transform" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Your people are already talking.
          </h2>

          <p className="text-sm text-stone-400 max-w-md mx-auto leading-relaxed">
            Be part of a warmer, calmer social space. Reserve your early access spot today. Free on Android and iOS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto bg-white hover:bg-stone-200 text-black px-7 py-3.5 rounded-full flex items-center justify-center gap-2 transition font-extrabold text-xs shadow-lg"
            >
              <span>Join the Waitlist</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-white" title="Apple App Store">
                <Apple className="w-4 h-4" />
              </span>
              <span className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-white" title="Google Play">
                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Clean Minimalist 1-Line Footer */}
      <footer className="py-8 bg-white border-t border-stone-100 text-stone-500 text-xs">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <InbblLogo variant="mark" size="xs" className="w-5 h-7" />
            <span className="font-extrabold text-black">INBBL</span>
            <span>— Same world. Closer.</span>
          </div>
          <div className="flex items-center gap-6 font-semibold text-stone-600">
            <a 
              href="#privacy" 
              onClick={(e) => {
                if (onOpenPrivacy) {
                  e.preventDefault();
                  onOpenPrivacy();
                }
              }} 
              className="hover:text-black transition cursor-pointer"
            >
              Privacy Policy
            </a>
            <a href="mailto:support@inbbl.com" className="hover:text-black transition">Contact</a>
          </div>
          <p>© 2026 Friends Universe Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
