import React from 'react';
import { Apple, Play } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

export const InsideApp: React.FC = () => {
  return (
    <section id="app" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Authentic Copy matching talktofriend.in */}
        <div className="lg:col-span-6 space-y-6">
          <span className="px-3.5 py-1.5 bg-stone-100 border border-stone-200 text-stone-900 rounded-full text-xs font-bold uppercase tracking-wider">
            Inside the app
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight">
            Your people, <br />one tap away.
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            See who's free to talk right now, match with someone new in one tap, and keep up with the friends you make. Everything is in the language you speak.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            
            {/* App Store Badge */}
            <a 
              href="#early-access" 
              className="bg-black hover:bg-stone-800 text-white px-5 py-3 rounded-2xl flex items-center gap-3 shadow-md transition"
            >
              <Apple className="w-6 h-6 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] text-stone-300 uppercase leading-none">Download on the</p>
                <p className="text-xs font-bold leading-tight mt-0.5">App Store</p>
              </div>
            </a>

            {/* Google Play Badge */}
            <a 
              href="#early-access" 
              className="bg-black hover:bg-stone-800 text-white px-5 py-3 rounded-2xl flex items-center gap-3 shadow-md transition"
            >
              <Play className="w-5 h-5 fill-white shrink-0 ml-0.5" />
              <div className="text-left">
                <p className="text-[10px] text-stone-300 uppercase leading-none">GET IT ON</p>
                <p className="text-xs font-bold leading-tight mt-0.5">Google Play</p>
              </div>
            </a>

          </div>

          <p className="text-xs text-stone-400 font-semibold pt-1">
            Free to download • Available on iOS and Android
          </p>
        </div>

        {/* Right Column: Phone Mockup from design assets */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative max-w-sm w-full bg-black rounded-[42px] p-4 shadow-2xl border-4 border-stone-800">
            <div className="bg-stone-900 rounded-[32px] overflow-hidden p-6 text-white text-center space-y-6">
              
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>9:41</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-inbbl-emerald"></span>
                  <span>5G</span>
                </span>
              </div>

              <div className="py-8 space-y-4">
                <InbblLogo variant="mark" size="xl" className="w-28 h-28 mx-auto" />
                <div>
                  <h4 className="text-2xl font-extrabold text-white">INBBL</h4>
                  <p className="text-xs text-stone-400 mt-1">Same world. Closer.</p>
                </div>
              </div>

              <div className="bg-stone-800/80 p-4 rounded-2xl text-left space-y-2 border border-stone-700">
                <p className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-inbbl-emerald"></span>
                  <span>Tap "Match Me"</span>
                </p>
                <p className="text-[11px] text-stone-400">
                  Instant voice chat with someone who speaks your language.
                </p>
              </div>

              <div className="pt-2 flex justify-around text-xs text-stone-400 font-semibold border-t border-stone-800">
                <span>💬 Chat</span>
                <span>📞 Call</span>
                <span>📍 Map</span>
                <span>✨ Post</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

