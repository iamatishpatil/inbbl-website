import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Moment } from '../types';

export const MomentsFeed: React.FC = () => {
  const [moments, setMoments] = useState<Moment[]>([
    {
      id: 'm1',
      city: 'Bengaluru',
      timeAgo: '14 mins ago',
      category: 'Career Stress',
      text: "Worked 12 hours straight today, yet my manager told me I look disengaged. I came home and sat in the car for 20 minutes before walking up.",
      hugs: 34,
      responses: 3
    },
    {
      id: 'm2',
      city: 'Mumbai',
      timeAgo: '42 mins ago',
      category: 'Relationship',
      text: "It hurts when someone who used to talk to you for hours suddenly responds in one-word texts. Trying my best not to double-text them tonight.",
      hugs: 56,
      responses: 5
    }
  ]);

  const [input, setInput] = useState('');

  const handlePost = () => {
    if (!input.trim()) return;
    const newMoment: Moment = {
      id: Date.now().toString(),
      city: 'You',
      timeAgo: 'Just now',
      category: 'Anonymous Thought',
      text: input,
      hugs: 1,
      responses: 0
    };
    setMoments([newMoment, ...moments]);
    setInput('');
  };

  const addHug = (id: string) => {
    setMoments(moments.map(m => m.id === id ? { ...m, hugs: m.hugs + 1 } : m));
  };

  return (
    <section id="feed" className="py-20 max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <span className="px-3.5 py-1 bg-inbbl-rose/15 text-inbbl-rose rounded-full text-xs font-extrabold uppercase">
          POST • BBL MOMENTS
        </span>
        <h2 className="text-3xl font-extrabold text-black mt-2">The Anonymous Venting Wall</h2>
        <p className="text-sm text-stone-600">Sometimes just typing it out releases 80% of the heaviness. Drop your thought into the bubble.</p>
      </div>

      <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-md mb-8">
        <textarea 
          rows={3} 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What is burdening your heart today? (No names or profiles attached)..." 
          className="w-full text-sm bg-stone-50 border border-stone-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-stone-400 font-medium">🛡️ Zero tracking • Encrypted drop</span>
          <button 
            onClick={handlePost}
            className="bg-black hover:bg-stone-800 text-white font-extrabold text-xs px-6 py-3 rounded-xl transition flex items-center gap-1.5"
          >
            <span>Drop in Bubble 🐬</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {moments.map((m) => (
          <div key={m.id} className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
              <span>Anonymous in {m.city} • {m.timeAgo}</span>
              <span className="bg-stone-100 text-stone-800 font-bold px-2 py-0.5 rounded">{m.category}</span>
            </div>
            <p className="text-stone-800 text-sm leading-relaxed">{m.text}</p>
            <div className="mt-4 flex items-center gap-4 text-xs font-bold">
              <button 
                onClick={() => addHug(m.id)}
                className="flex items-center gap-1.5 text-stone-600 hover:text-inbbl-rose transition"
              >
                <Heart className="w-4 h-4 fill-inbbl-rose text-inbbl-rose" />
                <span>{m.hugs} Sending Hugs</span>
              </button>
              <span>•</span>
              <span className="text-inbbl-purple">{m.responses} Listeners sent gentle words</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

