'use client';
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function SelfImprovementSection() {
  const charRef = useRef(null);
  const headingRef = useRef(null);
  const scrollRef = useRef(null);

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);

  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);

  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);
  const dot3Ref = useRef(null);
  const dot4Ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    // animation for the floating design

    gsap.from(charRef.current, {
      duration: 2,
      x: 400,
      rotate: -95,
      y: 100,
      scrollTrigger: charRef.current,
      ease: "power1.inOut"
    });

    gsap.from(charRef.current, {
      duration: 3,
      delay: 3,
      scrollTrigger: charRef.current,
      ease: "power1.inOut"
    });

    gsap.to(charRef.current, {
      duration: 2,
      delay: 5,
      y: 0,
      rotate: -10,
      ease: "power1.inOut",
    })

    gsap.from(headingRef.current, {
      duration: 1,
      x: -500,
      scale: 0.65,
      opacity: 0.5,
      ease: "back.inOut",
      scrollTrigger: headingRef.current,
    });

    const contentRefs = [contentRef1.current, contentRef2.current, contentRef3.current, contentRef4.current];

    gsap.from(contentRefs, {
        duration: 6,
        stagger: 1.5,
        opacity: 0.25,
        ease: "power1.inOut",
        scrollTrigger: contentRef1.current,
    });

    const dotRefs = [dot1Ref.current, dot2Ref.current, dot3Ref.current, dot4Ref.current];

    gsap.from(dotRefs, {
        duration: 0,
        stagger: 0.45,
        scale: 0.25,
        ease: "power1.inOut",
        scrollTrigger: dot1Ref.current,
    });

    const circleRefs = [circle1Ref.current, circle2Ref.current, circle3Ref.current, circle4Ref.current];

    gsap.from(circleRefs, {
        duration: 3.5,
        stagger: 0.45,
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: circle1Ref.current,
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
          <h1 className="flex items-center text-6xl font-semibold">
            Self-Improvement. Ugh.
          </h1>
        </div>
        <div className="w-[40%]">
          <Image
              src="/char3.png"
              height={78}
              width={78}
              alt="floating design"
              className="rotate-45 right-[-5rem]"
              ref={charRef}
            />
        </div>
      </div>

      {/* body */}

      <div ref={scrollRef} className="flex gap-8 justify-center relative overflow-y-scroll noScrollBar h-[80vh]">

        {/* Timeline line */}

        <div className="h-[40rem] border-[2.5px] border-violet-200"></div>

        {/* Content part */}

        <div className="flex flex-col gap-12 w-4/6">

          <div ref={contentRef1} className="flex flex-col gap-4 relative">
            <h1 className="font-semibold text-[1.75rem]">
              it&apos;s not as easy as 1-2-3.
            </h1>
            <p className="text-2xl">
              The journey of change may be long, but our sessions are quick. We
              get to the point and tell you what you want to know to know(and
              nothing else).
            </p>
            <div ref={circle1Ref} className="h-10 w-10 bg-violet-100 rounded-full absolute left-[-3.35rem] top-[0.5rem] flex items-center justify-center">
              <div ref={dot1Ref} className="h-[1.25rem] w-[1.25rem] bg-violet-600 rounded-full"></div>
            </div>
            <div ref={circle2Ref} className="h-10 w-10 bg-violet-100 rounded-full absolute left-[-3.35rem] top-[0.5rem] flex items-center justify-center">
              <div ref={dot2Ref} className="h-[1.25rem] w-[1.25rem] bg-violet-600 rounded-full"></div>
            </div>
          </div>

          <div ref={contentRef2} className="flex flex-col gap-4 relative">
            <h1 className="font-semibold text-[1.75rem]">
              Old habits are hard to break.
            </h1>
            <p className="text-2xl">
              And bad behaviors die hard. Fortunately, we give you great,
              science-backed techniques to use.
            </p>
            <div ref={circle2Ref} className="h-10 w-10 bg-violet-100 rounded-full absolute left-[-3.35rem] top-[0.5rem] flex items-center justify-center">
              <div ref={dot2Ref} className="h-[1.25rem] w-[1.25rem] bg-violet-600 rounded-full"></div>
            </div>
          </div>

          <div ref={contentRef3} className="flex flex-col gap-4 relative">
            <h1 className="font-semibold text-[1.75rem]">
              You and your motivation don&apos;t have a long-term relationship.
            </h1>
            <p className="text-2xl">
              Luckily, we can proactively prepare you for the marathon, not just
              the race. Effective, memorable exercises will help you stick to
              your goals.
            </p>
            <div ref={circle3Ref} className="h-10 w-10 bg-violet-100 rounded-full absolute left-[-3.35rem] top-[0.5rem] flex items-center justify-center">
              <div ref={dot3Ref} className="h-[1.25rem] w-[1.25rem] bg-violet-600 rounded-full"></div>
            </div>
          </div>

          <div ref={contentRef4} className="flex flex-col gap-4 relative">
            <h1 className="font-semibold text-[1.75rem]">
              Books just dont&apos;t offer practical solutions.
            </h1>
            <p className="text-2xl">
              The journey of change may be long, but our sessions are quick. We
              get to the point and tell you what you want to know to know(and
              nothing else).
            </p>
            <div ref={circle4Ref} className="h-10 w-10 bg-violet-100 rounded-full absolute left-[-3.35rem] top-[0.5rem] flex items-center justify-center">
              <div ref={dot4Ref} className="h-[1.25rem] w-[1.25rem] bg-violet-600 rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SelfImprovementSection;