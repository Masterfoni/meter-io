"use client";

import { useEffect, useState } from 'react'
import getInstance from '../../api';
import MetersTable, { IMeter } from '@/components/MetersTable/MetersTable';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [meters, setMeters] = useState<IMeter[]>([]);
  
  useEffect(() => {
    getInstance().get('meters')
      .then(data => setMeters(data.data))
      .catch(error => console.log({error}));
  }, [])
  
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col gap-4 items-center pl-24 pr-24 pt-12 pb-12">
        <MetersTable meters={meters} />
      </main>
    </>
  )
}
