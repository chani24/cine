'use client';

import Image from 'next/image'
import LoadingScreen from './LoadingScreen'

export default function Home() {
  return (
    <div className="relative">
      <LoadingScreen />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
      Home
    </main>
    </div>
    
  )
}
