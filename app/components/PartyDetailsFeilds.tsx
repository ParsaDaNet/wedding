'use client';

import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { motion, type Variants } from 'framer-motion';
import { RsvpFormValues } from './types';

interface PartyDetailsProps {
  register: UseFormRegister<RsvpFormValues>;
  errors: FieldErrors<RsvpFormValues>;
  itemVariants: Variants;
}

export const PartyDetailsFields = ({ register, errors, itemVariants }: PartyDetailsProps) => {
  return (
    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
    
      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-xs uppercase tracking-wider font-semibold text-[#5C584F]">
          Party / Family Name
        </label>
        <input 
          {...register('partyName')} 
          placeholder="e.g. The Smith Family" 
          className="p-2.5 w-full bg-white border border-[#D9D5C9] rounded font-serif text-sm focus:outline-none focus:border-[#CDA86E] transition-colors placeholder:text-gray-300 placeholder:italic"
        />
        {errors.partyName && (
          <p className="text-xs text-red-500 italic mt-0.5">{errors.partyName.message}</p>
        )}
      </div>
    </motion.div>
  );
};
