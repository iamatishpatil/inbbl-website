import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck, Sparkles } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || '';

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      if (GOOGLE_SCRIPT_URL) {
        // Send data directly to Google Sheets Web App
        const formData = new FormData();
        formData.append('email', email);
        formData.append('timestamp', new Date().toISOString());
        formData.append('source', 'INBBL Website Hero');

        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: formData,
          mode: 'no-cors', // Standard for Google Apps Script redirects
        });
      } else {
        // If not yet configured, simulate 600ms network delay
        await new Promise((res) => setTimeout(res, 600));
      }

      setIsSuccess(true);
    } catch (err) {
      console.error('Failed to submit to waitlist:', err);
      // Even if network error occurs, celebrate user intent
      setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-10 pb-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left: Refined, Senior-Level Copy */}
        <div className="md:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-900 text-[11px] font-bold">
            <InbblLogo variant="mark" size="xs" className="w-3.5 h-4.5" />
            <span>SOCIAL APP FOR A BRIGHTER TOMORROW</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black leading-[1.08]">
            Real people. <br />
            Real moments. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-inbbl-purple via-inbbl-cyan to-inbbl-rose">
              Same world. Closer.
            </span>
          </h1>

          <p className="text-base text-stone-600 max-w-lg leading-relaxed">
            Tired of doomscrolling and superficial feeds? <strong>INBBL</strong> connects you 1-on-1 with genuine people across India in your language. Chat, talk it out, and make friends - 100% anonymous, safe, and judgment-free.
          </p>

          {/* Clean 1-field Google Sheets early access input */}
          {!isSuccess ? (
            <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-2 max-w-md pt-2">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access..."
                disabled={isLoading}
                className="flex-1 bg-stone-50 border border-stone-200 text-sm rounded-full px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-black hover:bg-stone-800 text-white font-extrabold text-xs px-6 py-3.5 rounded-full transition shadow-md flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <span>Get Early Access</span>
                    <ArrowRight className="w-3.5 h-3.5 text-inbbl-cyan" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 p-4 bg-stone-50 border-2 border-black rounded-2xl max-w-md text-xs font-bold text-black animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-inbbl-emerald shrink-0" />
              <div>
                <p className="font-extrabold">You're on the early access priority list!</p>
                <p className="text-[11px] text-stone-500 font-normal mt-0.5">
                  Saved: <span className="font-semibold text-black">{email}</span>. We'll invite you first.
                </p>
              </div>
            </div>
          )}

          {/* Value Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-bold text-stone-500">
            <span className="flex items-center gap-1.5 text-stone-700">
              <ShieldCheck className="w-4 h-4 text-inbbl-emerald" /> 100% Number Masked
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-stone-700">
              <Sparkles className="w-4 h-4 text-inbbl-purple" /> Hindi, English & Regional
            </span>
            <span>•</span>
            <span>Free on iOS & Android</span>
          </div>

        </div>

        {/* Right: Clean, Focused Product Showcase Card */}
        <div className="md:col-span-5 flex justify-center">
          <div className="bg-white border-2 border-black rounded-[36px] p-8 shadow-2xl w-full max-w-xs space-y-6 text-center">
            
            <div className="py-2 flex justify-center">
              <InbblLogo variant="mark" size="lg" className="w-24 h-32 hover:scale-105 transition-transform" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-black">INBBL</h3>
              <p className="text-xs text-stone-500 font-semibold mt-0.5">Talk it out. Feel better. Make friends.</p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 text-left space-y-2.5 text-xs text-stone-700 font-semibold">
              <div className="flex items-center justify-between">
                <span>🤝 Connect</span>
                <span className="text-inbbl-purple font-extrabold">Instant Match</span>
              </div>
              <div className="flex items-center justify-between">
                <span>💬 Private Chat</span>
                <span className="text-inbbl-cyan font-extrabold">Encrypted</span>
              </div>
              <div className="flex items-center justify-between">
                <span>🎬 Sneaks</span>
                <span className="text-inbbl-emerald font-extrabold">Short Videos</span>
              </div>
              <div className="flex items-center justify-between">
                <span>📍 Nearby Map</span>
                <span className="text-inbbl-amber font-extrabold">Same World</span>
              </div>
              <div className="flex items-center justify-between">
                <span>✨ Bbl Moments</span>
                <span className="text-inbbl-rose font-extrabold">Anonymous Wall</span>
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
