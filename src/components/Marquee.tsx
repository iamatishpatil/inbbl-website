import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Talk it out',
    'Feel better',
    'Make friends',
    'In your language',
    'Same world. Closer.',
    'Voice calls & Rooms',
    'Real people. Real moments.',
    'Made in India'
  ];

  return (
    <div className="py-4 bg-black text-white overflow-hidden whitespace-nowrap border-y border-stone-800">
      <div className="inline-flex items-center gap-8 text-xs font-bold uppercase tracking-wider animate-pulse">
        {[...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span>{item}</span>
            <span className="text-inbbl-purple">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

