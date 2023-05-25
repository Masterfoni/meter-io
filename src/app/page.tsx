"use client";

import { useEffect, useState } from 'react'
import getInstance from '../../api';
import MetersTable, { IMeter } from '@/components/MetersTable/MetersTable';

export default function Home() {
  const [meters, setMeters] = useState<IMeter[]>([]);
  
  useEffect(() => {
    getInstance().get('meters')
      .then(data => setMeters(data.data))
      .catch(error => console.log({error}));
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MetersTable meters={meters} />
    </main>
  )
}
