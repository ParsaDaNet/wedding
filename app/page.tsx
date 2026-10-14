'use client';

import dynamic from 'next/dynamic';
import Navbar from './components/NavBar';
import WeddingWeekend from './components/MenuPages/WeddingWeekend';

// This completely eliminates the crypto.randomUUID pre-render server crash 
// and naturally prevents any internal React hook linting warnings.
const RsvpForm = dynamic(() => import('@/app/components/RsvpForm').then((mod) => mod.RsvpForm), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center p-8">
      <p className="text-gray-500 font-mono text-sm animate-pulse">Loading RSVP layout...</p>
    </div>
  ),
});

export default function Home() {
  return (
    //  <main className="flex min-h-screen flex-col bg-black items-center justify-center p-24">
    <>
      {/* <Navbar /> */}
      {/* <RsvpForm /> */}
      <WeddingWeekend />
    </>
    //</main>
  );
}
