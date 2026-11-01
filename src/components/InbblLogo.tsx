import React from 'react';

interface InbblLogoProps {
  variant?: 'mark' | 'full' | 'icon' | 'solid';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const InbblLogo: React.FC<InbblLogoProps> = ({ 
  variant = 'mark', 
  className = '',
  size = 'md' 
}) => {
  if (variant === 'icon') {
    const iconSizes = {
      xs: 'w-6 h-6 rounded-lg',
      sm: 'w-8 h-8 rounded-xl',
      md: 'w-11 h-11 rounded-2xl',
      lg: 'w-16 h-16 rounded-3xl',
      xl: 'w-24 h-24 rounded-3xl'
    };
    return (
      <img 
        src="/assets/inbbl-app-icon.png" 
        alt="INBBL App Icon" 
        className={`${iconSizes[size]} object-contain shadow-md ${className}`} 
      />
    );
  }

  if (variant === 'full') {
    const fullSizes = {
      xs: 'h-8',
      sm: 'h-10',
      md: 'h-14',
      lg: 'h-20',
      xl: 'h-28'
    };
    return (
      <img 
        src="/assets/inbbl-full-logo.png" 
        alt="INBBL — Same world. Closer." 
        className={`${fullSizes[size]} w-auto object-contain ${className}`} 
      />
    );
  }

  // 3D Logo Mark (Person + Bubble + Dolphin) with 3:4 aspect ratio
  const markSizes = {
    xs: 'w-6 h-8',
    sm: 'w-8 h-10',
    md: 'w-12 h-16',
    lg: 'w-20 h-28',
    xl: 'w-32 h-44'
  };

  const src = variant === 'solid' ? '/assets/inbbl-logo-mark-solid.png' : '/assets/inbbl-logo-mark.png';

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${markSizes[size]} ${className}`}>
      <img 
        src={src} 
        alt="INBBL Dolphin Mark" 
        className="w-full h-full object-contain filter drop-shadow-sm select-none"
      />
    </div>
  );
};
