import React from 'react';
import { Apple, Play } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

export const Footer: React.FC = () => {
  return (
    <>
      {/* Simple CTA Banner with Accurate 3D Logo */}
      <section id="get-app" className="py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <div className="flex justify-center">
            <InbblLogo variant="mark" size="md" className="w-12 h-16" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Your people are already talking.
          </h2>
          <p className="text-sm text-stone-400 max-w-md mx-auto">
            Join thousands across India sharing real conversations every single day. Free on iOS and Android.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a 
              href="#" 
              className="w-full sm:w-auto bg-white hover:bg-stone-200 text-black px-6 py-3.5 rounded-2xl flex items-center justify-center gap-3 transition font-extrabold text-xs"
            >
              <Apple className="w-5 h-5" />
              <span>Download for iOS</span>
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 border border-stone-800 text-white px-6 py-3.5 rounded-2xl flex items-center justify-center gap-3 transition font-extrabold text-xs"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Download for Android</span>
            </a>
          </div>
        </div>
      </section>

      {/* Minimal 1-Line Footer */}
      <footer className="py-8 bg-white border-t border-stone-100 text-stone-500 text-xs">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <InbblLogo variant="mark" size="xs" className="w-5 h-7" />
            <span className="font-extrabold text-black">INBBL</span>
            <span>— Same world. Closer.</span>
          </div>
          <div className="flex items-center gap-6 font-medium text-stone-600">
            <a href="#" className="hover:text-black transition">Privacy Policy</a>
            <a href="#" className="hover:text-black transition">Terms</a>
            <a href="mailto:support@inbbl.com" className="hover:text-black transition">Contact</a>
          </div>
          <p>© 2026 INBBL Inc. Real people. Real moments.</p>
        </div>
      </footer>
    </>
  );
};
