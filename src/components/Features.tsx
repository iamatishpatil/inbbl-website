import React from 'react';
import { Users, MessageSquare, Phone, MapPin, Sparkles, HeartHandshake } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

export const Features: React.FC = () => {
  const pillars = [
    {
      title: 'CONNECT',
      subtitle: 'Find Your Vibe',
      desc: 'Tap to connect with real people who speak your language and understand where you are coming from. No awkward cold intros.',
      icon: Users,
      color: 'text-inbbl-purple',
      bg: 'bg-inbbl-purple/10'
    },
    {
      title: 'CHAT',
      subtitle: 'Private & Ephemeral',
      desc: 'Confidential 1-on-1 messaging with auto-expiring conversation logs. Your words stay between you and your friend.',
      icon: MessageSquare,
      color: 'text-inbbl-cyan',
      bg: 'bg-inbbl-cyan/10'
    },
    {
      title: 'CALL',
      subtitle: '100% Masked Audio',
      desc: 'Crystal-clear in-app voice calls. Neither party ever sees or exchanges real personal phone numbers.',
      icon: Phone,
      color: 'text-inbbl-emerald',
      bg: 'bg-inbbl-emerald/10'
    },
    {
      title: 'MAP',
      subtitle: 'Same World. Closer.',
      desc: 'Discover active friends nearby or connect with peers from your home city who share your cultural context.',
      icon: MapPin,
      color: 'text-inbbl-amber',
      bg: 'bg-inbbl-amber/10'
    },
    {
      title: 'POST',
      subtitle: 'The Anonymous Wall',
      desc: 'Share raw thoughts, late-night reflections, or small victories without any profile attached. Receive uplifting warmth.',
      icon: Sparkles,
      color: 'text-inbbl-rose',
      bg: 'bg-inbbl-rose/10'
    }
  ];

  return (
    <section id="features" className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 bg-stone-200 text-stone-900 rounded-full text-xs font-bold uppercase tracking-wider">
            The INBBL Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black mt-3 tracking-tight">
            Built for genuine connection.
          </h2>
          <p className="text-sm text-stone-600 mt-3 leading-relaxed">
            Everything you need to talk, listen, and make real friends - without the vanity metrics, follower counts, or algorithms.
          </p>
        </div>

        {/* 5 Pillars + 1 Dolphin Philosophy Card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-7 rounded-3xl border border-stone-200 hover:border-black transition-all shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-11 h-11 rounded-2xl ${p.bg} ${p.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-black tracking-wide">{p.title}</h3>
                    <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">{p.subtitle}</p>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Dolphin Brand Philosophy */}
          <div className="bg-black text-white p-7 rounded-3xl border border-black shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <InbblLogo variant="mark" size="xs" className="w-6 h-8" />
                <span className="text-[10px] font-bold px-2 py-0.5 bg-stone-800 text-stone-300 rounded-full uppercase tracking-wider">
                  Brand Meaning
                </span>
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white">Why a Dolphin?</h3>
                <p className="text-[11px] font-bold text-inbbl-purple uppercase tracking-wider mt-0.5">
                  Social • Flow • Friendship
                </p>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                In nature, dolphins stay playfully connected in vast waters through sound and empathy. That is the heartbeat of INBBL in a noisy world.
              </p>
            </div>
            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] font-semibold text-stone-400">
              <span>You • Bubble • Dolphin</span>
              <span className="text-inbbl-emerald">100% Free</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
