import React, { useState, useEffect } from 'react';
import { Listener } from '../types';
import { Phone, PhoneOff } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

interface ModalProps {
  listener: Listener | null;
  onClose: () => void;
}

export const CallModal: React.FC<ModalProps> = ({ listener, onClose }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isConnected) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isConnected]);

  if (!listener) return null;

  const formatTime = (secs: number) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl relative border-2 border-black animate-in fade-in zoom-in duration-150">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-black text-xl font-bold"
        >
          ✕
        </button>

        <div className="text-center space-y-4 pt-2">
          
          {/* Exact Brand Logo in Modal */}
          <div className="flex justify-center">
            <InbblLogo variant="mark" size="lg" className="w-16 h-16" />
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-black">
              {isConnected ? `Speaking with ${listener.name}` : `Calling ${listener.name}...`}
            </h3>
            <p className="text-xs text-stone-500 font-medium">{listener.languages.join(', ')}</p>
          </div>

          <div className="bg-inbbl-light border border-inbbl-purple/20 p-3 rounded-2xl text-inbbl-deep text-xs font-bold">
            🎁 First 3 Minutes are Completely FREE!
          </div>

          <div className="bg-stone-50 p-3 rounded-xl space-y-2 text-xs text-stone-600 text-left">
            <div className="flex justify-between">
              <span>Connection:</span>
              <strong className="text-black">Browser WebRTC (No SIM)</strong>
            </div>
            <div className="flex justify-between">
              <span>Your Caller ID:</span>
              <strong className="text-inbbl-emerald font-bold">100% Masked / Anonymous</strong>
            </div>
            <div className="flex justify-between">
              <span>Rate after 3 mins:</span>
              <strong className="text-black">₹{listener.ratePerMin}/min</strong>
            </div>
          </div>

          {!isConnected ? (
            <button 
              onClick={() => setIsConnected(true)}
              className="w-full bg-inbbl-emerald hover:bg-emerald-600 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Start Call Now</span>
            </button>
          ) : (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-center gap-2 text-inbbl-emerald font-bold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-inbbl-emerald animate-ping"></span>
                <span>Call Connected: {formatTime(seconds)}</span>
              </div>
              <button 
                onClick={onClose}
                className="w-full bg-inbbl-rose hover:bg-rose-600 text-white font-extrabold py-3 rounded-xl transition flex items-center justify-center gap-2"
              >
                <PhoneOff className="w-4 h-4" />
                <span>End Call</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
