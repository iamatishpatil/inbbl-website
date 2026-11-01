import React, { useState } from 'react';
import { Listener } from '../types';
import { Play, Star, Phone } from 'lucide-react';

interface DirectoryProps {
  onCall: (listener: Listener) => void;
}

export const ListenerDirectory: React.FC<DirectoryProps> = ({ onCall }) => {
  const [filter, setFilter] = useState('All');

  const listeners: Listener[] = [
    {
      id: '1',
      name: 'Kavya Menon',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      languages: ['Hindi', 'English'],
      speciality: 'Heartbreak, Self-Doubt, Overthinking',
      rating: 4.96,
      reviewsCount: 112,
      minutesListened: 1480,
      ratePerMin: 8,
      isOnline: true,
      tags: ['Relationship', 'Hindi'],
      quote: "No advice unless you ask for it. Just a warm, non-judgmental space."
    },
    {
      id: '2',
      name: 'Rohan Sharma',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      languages: ['Hindi', 'Punjabi'],
      speciality: 'Career Burnout, Family Pressure, Loneliness',
      rating: 4.99,
      reviewsCount: 189,
      minutesListened: 2900,
      ratePerMin: 9,
      isOnline: true,
      tags: ['Career', 'Hindi'],
      quote: "Former corporate engineer who understands the silent hustle and exhaustion."
    },
    {
      id: '3',
      name: 'Deepika Raman',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      languages: ['Tamil', 'English'],
      speciality: 'Late-Night Venting, Relocation Loneliness',
      rating: 5.0,
      reviewsCount: 68,
      minutesListened: 890,
      ratePerMin: 10,
      isOnline: true,
      tags: ['Tamil', 'Late-Night'],
      quote: "Living away from home can get painfully silent. I am here to share stories."
    }
  ];

  const filtered = filter === 'All' 
    ? listeners 
    : listeners.filter(l => l.tags.includes(filter) || l.languages.includes(filter));

  return (
    <section id="listeners" className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-inbbl-purple">Directory</span>
          <h2 className="text-3xl font-extrabold text-black mt-1">Talk to a Verified Friend</h2>
          <p className="text-sm text-stone-500">Pick a listener who understands your language and what you are feeling.</p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {['All', 'Hindi', 'Tamil', 'Relationship', 'Career'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                filter === cat 
                  ? 'bg-black text-white' 
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((l) => (
          <div 
            key={l.id} 
            className="bg-white rounded-3xl border border-stone-200 p-6 hover:border-black transition-all space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={l.avatar} 
                  alt={l.name} 
                  className="w-16 h-16 rounded-2xl object-cover border border-stone-200"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-inbbl-emerald border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-black">{l.name}</h4>
                <p className="text-xs text-stone-500">{l.languages.join(', ')} • {l.minutesListened} mins</p>
                <div className="flex items-center gap-1 text-inbbl-amber text-xs font-bold mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-inbbl-amber text-inbbl-amber" />
                  <span>{l.rating}</span>
                  <span className="text-stone-400 font-normal">({l.reviewsCount})</span>
                </div>
              </div>
            </div>

            <p className="text-stone-600 text-xs leading-relaxed italic">"{l.quote}"</p>

            <div className="bg-stone-50 p-2.5 rounded-xl flex items-center justify-between text-xs text-stone-700">
              <span className="font-semibold text-[11px]">🎧 Voice Intro Bio</span>
              <button 
                onClick={() => alert(`Playing ${l.name}'s voice intro sample...`)} 
                className="text-inbbl-purple font-bold text-xs hover:underline flex items-center gap-1"
              >
                <Play className="w-3 h-3 fill-inbbl-purple" />
                <span>Play Sample</span>
              </button>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-stone-400 uppercase font-bold block">Pricing</span>
                <span className="text-base font-extrabold text-black">
                  ₹{l.ratePerMin}<span className="text-xs font-normal text-stone-500">/min</span>
                </span>
              </div>
              <button 
                onClick={() => onCall(l)}
                className="bg-black hover:bg-stone-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition flex items-center gap-1.5"
              >
                <Phone className="w-3 h-3 text-inbbl-emerald" />
                <span>Call Anonymously</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

