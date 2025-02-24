import React from 'react';

export default function PageBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }}></div>

      {/* Vertical Lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-black/10"></div>
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-black/10"></div>

      {/* Hero Section Divider */}
      <div className="absolute w-full top-[600px] space-y-2">
        <div className="h-px bg-black/10 w-full"></div>
        <div className="h-px bg-black/10 w-full"></div>
      </div>
    </div>
  );
}
