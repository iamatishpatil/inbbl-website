import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

export const MapDiscovery: React.FC = () => {
  const [activeCity, setActiveCity] = useState({ name: 'Delhi NCR', count: 38, dialect: 'Hindi, Delhi Slang, English' });

  const hubs = [
    { name: 'Delhi NCR', count: 38, dialect: 'Hindi, Delhi Slang, English' },
    { name: 'Mumbai', count: 29, dialect: 'Hindi, Marathi, Bambaiya, English' },
    { name: 'Bengaluru', count: 24, dialect: 'Kannada, English, Tech Slang, Hindi' },
    { name: 'Pune', count: 16, dialect: 'Marathi, Hindi, English' },
    { name: 'Kolkata', count: 12, dialect: 'Bengali, Hindi, English' }
  ];

  return (
    <section id="map" className="py-20 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="px-3.5 py-1 bg-inbbl-cyan/15 text-inbbl-cyan rounded-full text-xs font-extrabold uppercase">
              MAP • Regional Discovery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
              "Same world. Closer."
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              When talking about personal matters, cultural nuances matter. Discover listeners from your city who understand your regional background and references intuitively.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {hubs.map((hub) => (
                <button
                  key={hub.name}
                  onClick={() => setActiveCity(hub)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    activeCity.name === hub.name 
                      ? 'bg-black text-white' 
                      : 'bg-white border border-stone-300 text-stone-800 hover:border-black'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-inbbl-amber" />
                  <span>{hub.name} ({hub.count})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-black text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-6 border-b border-stone-800">
              <div>
                <p className="text-xs text-stone-400 font-bold uppercase">Active Geographic Hub</p>
                <h3 className="text-2xl font-extrabold text-white mt-0.5">{activeCity.name} Hub</h3>
              </div>
              <span className="text-xs bg-inbbl-purple text-white px-3.5 py-1.5 rounded-full font-bold">
                {activeCity.count} Active Listeners
              </span>
            </div>

            <div className="py-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-stone-900 border border-stone-800 p-4 rounded-2xl">
                <p className="text-xs text-stone-400 font-semibold">Local Dialect & Culture</p>
                <p className="text-sm font-bold text-white mt-1">{activeCity.dialect}</p>
              </div>
              <div className="bg-stone-900 border border-stone-800 p-4 rounded-2xl">
                <p className="text-xs text-stone-400 font-semibold">Average Call Connect</p>
                <p className="text-sm font-bold text-inbbl-emerald mt-1">Under 18 seconds</p>
              </div>
            </div>

            <a 
              href="#listeners" 
              className="block text-center w-full bg-white hover:bg-stone-200 text-black font-extrabold py-3.5 rounded-xl text-sm transition"
            >
              Browse Listeners in {activeCity.name}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

