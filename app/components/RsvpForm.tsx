'use client';

import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { superstructResolver } from '@hookform/resolvers/superstruct';
import { motion, type Variants } from 'framer-motion';

import { RsvpStruct } from './schema';
import { RsvpFormValues } from './types';
import { launchFireworks } from '../utils/fireworks';

// Component Imports
import { FormHeader } from './FormHeader';
import { PartyDetailsFields } from './PartyDetailsFeilds';
import { GuestRegistryFields } from './GuestRegistryFields';
import { OptionalFields } from './OptionalFields';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const RsvpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const { register, control, handleSubmit, formState: { errors } } = useForm<RsvpFormValues>({
    resolver: superstructResolver(RsvpStruct),
    defaultValues: {
      partyName: '',
      guests: [{ name: '', attendance: 'ATTENDING' }]
    }
  });

  const { fields, append, remove } = useFieldArray({ control, name: "guests" });

    const onSubmit = async (data: RsvpFormValues) => {
      console.log("hiiiiii")
    setIsSubmitting(true);
    setApiError(null);
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Something went wrong');

      setIsSubmitted(true);
      
      const isAnyoneAttending = data.guests.some(g => g.attendance === 'ATTENDING');
      if (isAnyoneAttending) {
        launchFireworks();
      }
    } catch (error) {
      setApiError(error instanceof Error ? error.message : 'Failed to submit RSVP.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-2 md:p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#FAFAF6] text-[#2C2C2A] rounded-2xl p-6 md:p-10 shadow-xl border border-[#E5E2D9] relative overflow-hidden"
      >
        {/* Stationery Borders */}
        <div className="absolute inset-3 border border-[#D1CBB7] opacity-40 pointer-events-none rounded-xl" />
        <div className="absolute inset-4 border border-[#D1CBB7] opacity-70 pointer-events-none rounded-xl" />

        <FormHeader />

        {apiError && (
          <div className="p-3 mb-6 bg-red-50 text-red-700 text-xs tracking-wide rounded border border-red-100 text-center relative z-10">
            ⚠️ {apiError}
          </div>
        )}

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-8 space-y-4 relative z-10"
          >
            <span className="text-3xl">✨</span>
            <h3 className="text-3xl font-calligraphy text-[#516E5A] tracking-wider">With Warm Thanks</h3>
            <p className="text-sm font-serif text-[#6E6A5F] max-w-md mx-auto leading-relaxed">
              Your response has been securely and completely added to our guest list registry. We look forward to celebrating together.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-6 relative z-10"
            >
              <PartyDetailsFields register={register} errors={errors} itemVariants={itemVariants} />
              
              <GuestRegistryFields 
                register={register} 
                errors={errors} 
                fields={fields} 
                append={append} 
                remove={remove} 
                itemVariants={itemVariants} 
              />

              <OptionalFields register={register} itemVariants={itemVariants} />

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 p-3.5 bg-[#3D3A35] hover:bg-[#2C2A27] disabled:bg-[#BAC1BB] text-[#FAFAF6] font-sans text-xs uppercase tracking-[0.2em] font-semibold rounded shadow transition-all duration-300 hover:tracking-[0.25em]"
              >
                {isSubmitting ? 'Sending Response...' : 'Send RSVP Responses'}
              </motion.button>
            </motion.div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
