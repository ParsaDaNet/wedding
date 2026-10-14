'use client';

import React from 'react';

export const FormHeader = () => {
  return (
    <div className="text-center space-y-1 mb-8 mt-2 relative z-10">
      <p className="text-xs uppercase tracking-[0.25em] text-[#8C856E] font-sans font-medium">
        Please Join Us For The Celebration of a Lifetime
      </p>
      <h2 className="text-5xl md:text-6xl text-[#3D3A35] font-calligraphy tracking-wide pt-2">
        The Wedding Of Medhy & Yasaman
      </h2>
      <div className="w-12 h-[1px] bg-[#CDA86E] mx-auto my-3" />
      <p className="text-sm italic font-serif text-[#6E6A5F]">
        Please RSVP by our specified timeline details
      </p>
    </div>
  );
};
