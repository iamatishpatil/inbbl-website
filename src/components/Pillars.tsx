import React from 'react';
import { Users, MessageSquare, Phone, MapPin, Sparkles } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

export const Pillars: React.FC = () => {
  const pillars = [
    {
      title: 'CONNECT',
      desc: 'Empathetic matching by emotion: Lonely, Heartbroken, Overthinking, or Happy.',
      icon: Users,
      color: 'text-inbbl-purple',
      bg: 'bg-inbbl-purple/10'
    },
    {
      title: 'CHAT',
      desc: 'Confidential encrypted text messaging with auto-expiring conversation logs.',
      icon: MessageSquare,
      color: 'text-inbbl-cyan',
      bg: 'bg-inbbl-cyan/10'
    },
    {
      title: 'CALL',
      desc: 'Browser-based audio calls. Your real phone number is 100% shielded and never revealed.',
      icon: Phone,
      color: 'text-inbbl-emerald',
      bg: 'bg-inbbl-emerald/10'
    },
    {
      title: 'MAP',
      desc: 'Same world. Closer. Filter and discover friends from your home city or cultural region.',
      icon: MapPin,
      color: 'text-inbbl-amber',
      bg: 'bg-inbbl-amber/10'
    },
    {
      title: 'POST',
      desc: 'Anonymous Bbl Feed. Vent your raw feelings without names and receive warm community hugs.',
      icon: Sparkles,
      color: 'text-inbbl-rose',
      bg: 'bg-inbbl-rose/10'
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Brand Anatomy Showcase from the Design Sheet */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 mb-16 shadow-sm">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <InbblLogo variant="mark" size="xl" className="w-40 h-40 filter drop-shadow-md hover:scale-105 transition-transform" />
              <div className="mt-4 flex items-center justify-center gap-4 text-xs font-bold text-stone-700">
                <span className="flex items-center gap-1">🐬 <span>Social</span></span>
                <span>•</span>
                <span>Flow</span>
                <span>•</span>
                <span>Friendship</span>
                <span>•</span>
                <span className="text-inbbl-purple">Positive</span>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-inbbl-purple">
                Brand Anatomy & Meaning
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-black">
                Why a Dolphin?
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Dolphins are social, playful, and always connected. They bring people together — just like <strong>INBBL</strong>.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                  <p className="text-xs font-extrabold text-inbbl-purple">Top Sphere</p>
                  <p className="text-sm font-bold text-black mt-0.5">You</p>
                  <p className="text-[11px] text-stone-500">People & Individuality</p>
                </div>
                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                  <p className="text-xs font-extrabold text-inbbl-purple">Outer Shape</p>
                  <p className="text-sm font-bold text-black mt-0.5">Bubble</p>
                  <p className="text-[11px] text-stone-500">Safe Communication</p>
                </div>
                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                  <p className="text-xs font-extrabold text-inbbl-purple">Inner Form</p>
                  <p className="text-sm font-bold text-black mt-0.5">Dolphin</p>
                  <p className="text-[11px] text-stone-500">Connection & Social Flow</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5 Pillars Grid */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-inbbl-purple">The INBBL Pillars</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-1">
            CONNECT • CHAT • CALL • MAP • POST
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Same world. Closer. Everything you need to never feel alone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-black transition"
              >
                <div className={`w-12 h-12 rounded-2xl ${p.bg} ${p.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-base text-black tracking-wide">{p.title}</h3>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
