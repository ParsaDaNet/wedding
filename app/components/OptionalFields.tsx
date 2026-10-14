'use client';

import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { motion } from 'framer-motion';
import { RsvpFormValues } from './types';

interface OptionalFieldsProps {
  register: UseFormRegister<RsvpFormValues>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemVariants: any;
}

export const OptionalFields = ({ register, itemVariants }: OptionalFieldsProps) => {
  return (
    <motion.div variants={itemVariants} className="space-y-4 pt-2 border-t border-[#EBE8DF]">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs uppercase tracking-wider font-semibold text-[#5C584F]">
          Song Request <span className="text-[#A19C8E] font-normal lowercase italic">(optional)</span>
        </label>
        <input 
          {...register('songRequest')} 
          placeholder="A tune that will get you dancing..."
          className="p-2.5 bg-white border border-[#D9D5C9] rounded font-serif text-sm focus:outline-none focus:border-[#CDA86E] transition-colors placeholder:text-gray-300 placeholder:italic" 
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs uppercase tracking-wider font-semibold text-[#5C584F]">
          Warm Notes for the Couple <span className="text-[#A19C8E] font-normal lowercase italic">(optional)</span>
        </label>
        <textarea 
          {...register('messageForCouple')} 
          rows={3} 
          placeholder="Write a little message..."
          className="p-2.5 bg-white border border-[#D9D5C9] rounded font-serif text-sm focus:outline-none focus:border-[#CDA86E] transition-colors resize-none placeholder:text-gray-300 placeholder:italic" 
        />
      </div>
    </motion.div>
  );
};
