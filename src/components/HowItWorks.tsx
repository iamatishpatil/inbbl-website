import React from 'react';
import { MessageSquare, Phone, Heart, Users } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Say hi',
      desc: 'Tap Match me and we connect you with someone new who speaks your language. No awkward intros.',
      icon: MessageSquare,
      color: 'text-inbbl-purple',
      bg: 'bg-inbbl-purple/10'
    },
    {
      num: '2',
      title: 'Talk it out',
      desc: "Chat, call or pull up a chair in a Room. Say what's on your mind, or just listen for a while.",
      icon: Phone,
      color: 'text-inbbl-cyan',
      bg: 'bg-inbbl-cyan/10'
    },
    {
      num: '3',
      title: 'Feel better',
      desc: 'A good conversation can turn your whole day around, and every chat makes the next one easier.',
      icon: Heart,
      color: 'text-inbbl-rose',
      bg: 'bg-inbbl-rose/10'
    },
    {
      num: '4',
      title: 'Make friends',
      desc: 'Add the people you click with and keep it going with calls, chats and shared Rooms.',
      icon: Users,
      color: 'text-inbbl-amber',
      bg: 'bg-inbbl-amber/10'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 max-w-6xl mx-auto px-6">
      
      <div className="max-w-2xl mb-16">
        <span className="px-3.5 py-1.5 bg-stone-100 border border-stone-200 text-stone-900 rounded-full text-xs font-bold uppercase tracking-wider">
          How it works
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-black mt-4 tracking-tight">
          From hello to friends.
        </h2>
        <p className="text-base text-stone-600 mt-4 leading-relaxed">
          INBBL is a social app for real conversations with people across India, in the language you are most comfortable in. This is how a stranger becomes a friend, and how talking gets easier every time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div 
              key={s.num} 
              className="bg-white p-7 rounded-3xl border border-stone-200 hover:border-black transition-all flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-stone-300 font-mono">0{s.num}</span>
                  <div className={`w-10 h-10 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-extrabold text-lg text-black">{s.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

