'use client';
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SelfImprovementSection() {
  const charRef = useRef(null);
  const headingRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    // animation for the floating design

    const charTimeline = gsap.timeline();
    charTimeline.from(charRef.current, {
      duration: 3,
      x: 300,
      rotate: -95,
      ease: "power1.inOut",
    }).to(charRef.current, {
      duration: 2,
      rotate: -5,
      ease: "power1.inOut",
    });

    gsap.from(headingRef.current, {
      duration: 1,
      x: -500,
      scale: 0.65,
      opacity: 0.5,
      ease: "back.inOut",
      scrollTrigger: headingRef.current,
    });
  }, []);

  return (
    <div className="flex flex-col mt-40 w-[90%] items-center gap-20">

      {/* Heading part */}

      <div className="flex items-center justify-center w-full">
        <div ref={headingRef}>
          <p className="text-2xl">
            Wrong with self-improvement &amp; how we&apos;re fixing it
          </p>
          <h1 className="flex items-center text-6xl font-semibold relative">
            Self-Improvement. Ugh.
            <Image
              src="/char3.png"
              height={78}
              width={78}
              alt="floating design"
              className="rotate-45 absolute right-[-5rem]"
              ref={charRef}
            />
          </h1>
        </div>
        <div className="w-[40%]"></div>
      </div>

      {/* body */}

      <div className="flex gap-8 justify-center">

        {/* Timeline line */}

        <div className="h-[36.5rem] border-[2.5px] border-violet-200"></div>

        {/* Content part */}

        <div className="flex flex-col gap-12 w-4/6">

          <div className="flex flex-col gap-4 relative">
            <h1 className="font-semibold text-[1.75rem] opacity-100">
              it&apos;s not as easy as 1-2-3.
            </h1>
            <p className="text-2xl opacity-100">
              The journey of change may be long, but our sessions are quick. We
              get to the point and tell you what you want to know to know(and
              nothing else).
            </p>
            <div className="h-10 w-10 bg-violet-100 rounded-full absolute left-[-3.35rem] top-[0.5rem] flex items-center justify-center">
              <div className="h-[1.25rem] w-[1.25rem] bg-violet-600 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 relative">
            <h1 className="font-semibold text-[1.75rem] opacity-75">
              Old habits are hard to break.
            </h1>
            <p className="text-2xl opacity-75">
              And bad behaviors die hard. Fortunately, we give you great,
              science-backed techniques to use.
            </p>
            <div className="h-4 w-4 bg-violet-200 rounded-full absolute left-[-2.65rem] top-[0.5rem]"></div>
          </div>

          <div className="flex flex-col gap-4 relative">
            <h1 className="font-semibold text-[1.75rem] opacity-50">
              You and your motivation don&apos;t have a long-term relationship.
            </h1>
            <p className="text-2xl opacity-50">
              Luckily, we can proactively prepare you for the marathon, not just
              the race. Effective, memorable exercises will help you stick to
              your goals.
            </p>
            <div className="h-4 w-4 bg-violet-200 rounded-full absolute left-[-2.65rem] top-[0.5rem]"></div>
          </div>

          <div className="flex flex-col gap-4 relative">
            <h1 className="font-semibold text-[1.75rem] opacity-25">
              Books just dont&apos;t offer practical solutions.
            </h1>
            <p className="text-2xl opacity-25">
              The journey of change may be long, but our sessions are quick. We
              get to the point and tell you what you want to know to know(and
              nothing else).
            </p>
            <div className="h-4 w-4 bg-violet-200 rounded-full absolute left-[-2.65rem] top-[0.5rem]"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SelfImprovementSection;