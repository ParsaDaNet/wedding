/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { RsvpFormValues } from './types';

interface GuestRegistryProps {
  register: UseFormRegister<RsvpFormValues>;
  errors: FieldErrors<RsvpFormValues>;
  fields: any[];
  append: (value: any) => void;
  remove: (index: number) => void;
  itemVariants: any;
}

export const GuestRegistryFields = ({ 
  register, 
  errors, 
  fields, 
  append, 
  remove, 
  itemVariants 
}: GuestRegistryProps) => {
  return (
    <motion.div variants={itemVariants} className="space-y-4 pt-2">
      <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-[#8C856E] border-b border-[#EBE8DF] pb-1.5">
        Guest Registry Details
      </h4>
      
      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {fields.map((field, index) => (
            <motion.div 
              key={field.id}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-white border border-[#EBE8DF] rounded-lg shadow-sm flex flex-col md:flex-row gap-4 items-end overflow-hidden"
            >
              <div className="flex-1 flex flex-col gap-1 w-full">
                <label className="text-[11px] uppercase tracking-wider text-[#7C776D] font-medium">
                  Full Name of Guest
                </label>
                <input
                  {...register(`guests.${index}.name` as const)}
                  placeholder="Enter Guest Name"
                  className="p-2 bg-[#FAFAF9] border border-[#E2DFD5] rounded text-sm font-serif w-full focus:outline-none focus:border-[#CDA86E] transition-colors placeholder:text-gray-300"
                />
                {errors.guests?.[index]?.name && (
                  <p className="text-xs text-red-400 italic mt-0.5">{errors.guests[index]?.name?.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1 w-full md:w-auto">
                <label className="text-[11px] uppercase tracking-wider text-[#7C776D] font-medium">
                  Response
                </label>
                <select
                  {...register(`guests.${index}.attendance` as const)}
                  className="p-2 bg-[#FAFAF9] border border-[#E2DFD5] rounded text-sm font-serif focus:outline-none focus:border-[#CDA86E] transition-colors min-w-[140px] cursor-pointer"
                >
                  <option value="ATTENDING">Joyfully Accepts</option>
                  <option value="DECLINED">Regretfully Declines</option>
                </select>
              </div>

              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="p-2 text-[#A19C8E] hover:text-red-600 rounded text-xs font-serif transition-colors h-[38px] px-2 flex items-center justify-center underline underline-offset-4"
                >
                  Remove
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => append({ name: '', attendance: 'ATTENDING' })}
        className="text-xs font-serif italic text-[#8C856E] hover:text-[#CDA86E] flex items-center gap-1.5 transition-colors pt-1"
      >
        <span>✨</span> Add another guest companion row
      </button>
    </motion.div>
  );
};
