'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [start, setStart] = useState(false)
  const route = useRouter();

  const handleStart = () => {
    setStart(true);
    setTimeout(() => {
      route.push('/game');
    }, 2000)
  }

  return (
    <main className="flex flex-col justify-center items-center gap-14 h-screen">
      <Image 
        src="https://egyyudanugraha.site/icon.svg"
        alt="logo" 
        width="100" 
        height="100"
      />

      <section className="flex flex-col gap-2 justify-end place-content-end">
        <span className="text-sm font-light">Press button to start the game!</span>
        <Button disabled={start} onClick={handleStart}>
          {start ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : 'Start'}
        </Button>
      </section>
    </main>
  )
}
