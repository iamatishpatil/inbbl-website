import React from 'react';
import { Users, MessageSquare, Phone, MapPin, Sparkles } from 'lucide-react';

export const Features: React.FC = () => {
  const pillars = [
    {
      title: 'CONNECT',
      desc: 'Tap to match with friendly people across India who speak your language.',
      icon: Users,
      color: 'text-inbbl-purple',
      bg: 'bg-inbbl-purple/10'
    },
    {
      title: 'CHAT',
      desc: 'Confidential 1-on-1 messaging with optional auto-expiring conversation logs.',
      icon: MessageSquare,
      color: 'text-inbbl-cyan',
      bg: 'bg-inbbl-cyan/10'
    },
    {
      title: 'CALL',
      desc: 'Crystal clear voice calls. Your phone number is 100% masked and never shared.',
      icon: Phone,
      color: 'text-inbbl-emerald',
      bg: 'bg-inbbl-emerald/10'
    },
    {
      title: 'MAP',
      desc: 'Same world. Closer. Find friends from your hometown or regional culture.',
      icon: MapPin,
      color: 'text-inbbl-amber',
      bg: 'bg-inbbl-amber/10'
    },
    {
      title: 'POST',
      desc: 'The Anonymous Bbl Feed. Share your raw feelings and receive supportive hugs.',
      icon: Sparkles,
      color: 'text-inbbl-rose',
      bg: 'bg-inbbl-rose/10'
    }
  ];

  return (
    <section id="features" className="py-20 bg-stone-50 border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-inbbl-purple">
            Simple & Purposeful
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-2 tracking-tight">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-xs text-stone-500 mt-2">
            Dolphins are social, playful, and always connected. Here is how INBBL brings people closer:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-3xl border border-stone-200 hover:border-black transition shadow-sm space-y-3"
              >
                <div className={`w-10 h-10 rounded-2xl ${p.bg} ${p.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-sm text-black tracking-wide">{p.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}

          {/* 6th Card: Dolphin philosophy */}
          <div className="bg-black text-white p-6 rounded-3xl border border-black shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-inbbl-purple uppercase tracking-wider block mb-2">Our Promise</span>
              <h3 className="font-extrabold text-sm text-white">100% Anonymous & Free</h3>
              <p className="text-xs text-stone-400 leading-relaxed mt-1">
                No real names. No phone number exchange. Just pure, respectful human connection.
              </p>
            </div>
            <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest pt-2">
              Social • Flow • Friendship • Positive
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

