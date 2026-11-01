import React, { useState } from 'react';
import { Ticket, CheckCircle2, ArrowRight } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

export const EarlyAccess: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="early-access" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 bg-stone-200 text-stone-900 rounded-full text-xs font-bold uppercase tracking-wider">
              Early access
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight">
              Be first in line.
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Something new is coming to INBBL. Leave your name and email and we'll let you know the moment it's ready for download.
            </p>

            <div className="space-y-2 pt-2 text-xs font-bold text-stone-600">
              <p className="flex items-center gap-2">
                <span className="text-inbbl-purple">✓</span> One email when it’s ready
              </p>
              <p className="flex items-center gap-2">
                <span className="text-inbbl-purple">✓</span> Priority access to private Rooms
              </p>
              <p className="flex items-center gap-2">
                <span className="text-inbbl-purple">✓</span> No spam, ever
              </p>
            </div>
          </div>

          {/* Ticket Card Component matching talktofriend.in */}
          <div className="lg:col-span-6">
            <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-inbbl-purple" />
                  <span className="text-xs font-extrabold text-black uppercase tracking-wider">
                    Early Access Pass
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 bg-stone-100 text-stone-600 rounded-full">
                  Admit One
                </span>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="py-6 space-y-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@gmail.com"
                      className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Phone Number (Optional)</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3.5 bg-stone-100 border border-r-0 border-stone-200 rounded-l-xl text-xs font-bold text-stone-600">
                        🇮🇳 +91
                      </span>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="98765 43210"
                        className="w-full text-sm bg-stone-50 border border-stone-200 rounded-r-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-black hover:bg-stone-800 text-white font-extrabold py-4 rounded-xl text-sm transition shadow-lg flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Reserve My Spot</span>
                    <ArrowRight className="w-4 h-4 text-inbbl-cyan" />
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-inbbl-emerald/10 text-inbbl-emerald flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-black">You're on the list, {name || 'Friend'}!</h4>
                    <p className="text-xs text-stone-500 mt-1">
                      We'll send you an invitation to {email} as soon as the doors open.
                    </p>
                  </div>
                  <div className="inline-block px-4 py-2 bg-stone-100 rounded-xl text-xs font-mono font-bold text-stone-800">
                    Pass ID: INBBL-#{(Math.floor(Math.random() * 8000) + 1200)}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-stone-100 text-center text-[11px] text-stone-400 font-medium">
                psst... you're early. First 5,000 members get free priority matching.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

