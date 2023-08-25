'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function StartTest() {
  const btnRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(btnRef.current, {
      duration: 0.65,
      scale: 0.65,
      ease: "back",
      scrollTrigger: btnRef.current,
    });
  }, []);

  return (
    <div className="py-32 px-80 flex flex-col items-center gap-[1.25rem]">

      <p className="text-2xl">We take privacy seriously</p>

      <h1 className="text-4xl text-center font-bold">
        Before you get Started
      </h1>

      <p className="text-3xl text-center text-zinc-600">
        &quot;We won&apos;t share your answers with anyone (and won&apos;t ever
        tell you which friends said what about you)&quot;
      </p>

      <p className="text-2xl py-8">with love, Team Ahead</p>

      <button ref={btnRef} className='bg-black text-lg rounded-full p-8 py-4 text-white'>Start Test</button>

      <p className="text-lg text-zinc-600">takes only 5 minutes</p>
    </div>
  );
}

export default StartTest;