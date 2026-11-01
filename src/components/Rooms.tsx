import React from 'react';
import { Mic, MicOff, Radio, PlusCircle, Headphones, Volume2 } from 'lucide-react';

export const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 bg-stone-200 text-stone-900 rounded-full text-xs font-bold uppercase tracking-wider">
              Rooms
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight">
              Pull up a chair.
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Rooms are small live voice chats about whatever is on people’s minds tonight. Cricket, exams, music, or just decompressing after a long day. Stay quiet for as long as you like, and say hi when you're ready.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-black">Listen in</h4>
                  <p className="text-xs text-stone-500 mt-0.5">No mic, no pressure. Just hear how the vibe goes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-inbbl-purple text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Mic className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-black">Say something</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Unmute when it feels right, not a second before.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-stone-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <PlusCircle className="w-4 h-4 text-inbbl-cyan" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-black">Start your own</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Pick a topic and see who shows up to hang out.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual: Live Voice Room Card Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-inbbl-emerald animate-pulse"></span>
                  <span className="text-xs font-extrabold text-black uppercase tracking-wider">Live Voice Room</span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 bg-stone-100 text-stone-700 rounded-full">
                  6 people chatting
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-black">Sunday Night Chill & Music</h3>
                <p className="text-xs text-stone-500 mt-0.5">Hindi & Hinglish • Casual chat</p>
              </div>

              {/* Speaker Avatars */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-stone-50 border-2 border-inbbl-purple p-3.5 rounded-2xl text-center space-y-1 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
                    alt="Aanya" 
                    className="w-12 h-12 rounded-full object-cover mx-auto"
                  />
                  <p className="text-xs font-extrabold text-black pt-1">Aanya</p>
                  <span className="text-[10px] text-inbbl-purple font-bold flex items-center justify-center gap-1">
                    <Volume2 className="w-3 h-3 animate-pulse" /> Speaking
                  </span>
                </div>

                <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-2xl text-center space-y-1">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" 
                    alt="Kabir" 
                    className="w-12 h-12 rounded-full object-cover mx-auto"
                  />
                  <p className="text-xs font-bold text-black pt-1">Kabir</p>
                  <span className="text-[10px] text-stone-400 font-medium">Listening</span>
                </div>

                <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-2xl text-center space-y-1">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" 
                    alt="Pooja" 
                    className="w-12 h-12 rounded-full object-cover mx-auto"
                  />
                  <p className="text-xs font-bold text-black pt-1">Pooja</p>
                  <span className="text-[10px] text-stone-400 font-medium">Listening</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-stone-500 font-medium border-t border-stone-100">
                <span>🎧 3 others in the room</span>
                <span className="text-inbbl-purple font-bold">Unmute anytime</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

