import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setJoined(true);
    }
  };

  return (
    <section className="pt-12 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left: Punchy, minimal copy */}
        <div className="md:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-800 text-[11px] font-bold">
            <InbblLogo variant="mark" size="xs" className="w-4 h-5" />
            <span>SOCIAL APP FOR A BRIGHTER TOMORROW</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black leading-[1.08]">
            Talk it out. <br />
            Feel better. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-inbbl-purple via-inbbl-cyan to-inbbl-rose">
              Make friends.
            </span>
          </h1>

          <p className="text-base text-stone-600 max-w-lg leading-relaxed">
            Real people across India, happy to listen and chat in your language. Connect 1-on-1 with genuine friends — 100% anonymous, safe, and judgment-free.
          </p>

          {/* Simple 1-field email capture */}
          {!joined ? (
            <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-2 max-w-md pt-2">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access..."
                className="flex-1 bg-stone-50 border border-stone-200 text-sm rounded-full px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button 
                type="submit"
                className="bg-black hover:bg-stone-800 text-white font-extrabold text-xs px-6 py-3.5 rounded-full transition shadow-md flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-3.5 h-3.5 text-inbbl-cyan" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2.5 p-3.5 bg-stone-50 border border-stone-200 rounded-2xl max-w-md text-xs font-bold text-black">
              <CheckCircle2 className="w-5 h-5 text-inbbl-emerald shrink-0" />
              <span>You're on the priority list! We'll notify you at {email}.</span>
            </div>
          )}

          <div className="flex items-center gap-6 pt-2 text-xs font-bold text-stone-400">
            <span>Free on iOS & Android</span> • 
            <span>100% Anonymous</span> • 
            <span>Made in India</span>
          </div>

        </div>

        {/* Right: Clean, focused product card with accurate 3D Logo */}
        <div className="md:col-span-5 flex justify-center">
          <div className="bg-white border-2 border-black rounded-[36px] p-8 shadow-2xl w-full max-w-xs space-y-6 text-center">
            
            <div className="py-2 flex justify-center">
              <InbblLogo variant="mark" size="lg" className="w-24 h-32 hover:scale-105 transition-transform" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-black">INBBL</h3>
              <p className="text-xs text-stone-500 font-semibold mt-0.5">Same world. Closer.</p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 text-left space-y-2 text-xs text-stone-600 font-medium">
              <div className="flex items-center justify-between">
                <span>💬 Private Chat</span>
                <span className="text-inbbl-emerald font-bold">Encrypted</span>
              </div>
              <div className="flex items-center justify-between">
                <span>📞 Voice Calls</span>
                <span className="text-inbbl-emerald font-bold">Masked ID</span>
              </div>
              <div className="flex items-center justify-between">
                <span>📍 Nearby Map</span>
                <span className="text-inbbl-emerald font-bold">Local</span>
              </div>
              <div className="flex items-center justify-between">
                <span>✨ Bbl Moments</span>
                <span className="text-inbbl-emerald font-bold">Anonymous</span>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider">
              Real people. Real moments.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
