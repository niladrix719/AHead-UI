"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function BioSection() {

  // randoms floating animation refs

  const headingRef = useRef(null);

  const float1ref = useRef(null);
  const float2ref = useRef(null);
  const float3ref = useRef(null);
  const circle1ref = useRef(null);
  const circle2ref = useRef(null);
  const circle3ref = useRef(null);

  const charRef = useRef(null);
  const stepRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    // random shapes animation

    gsap.from(headingRef.current, {
      duration: 1,
      x: -500,
      scale: 0.65,
      opacity: 0.5,
      ease: "back.inOut",
      scrollTrigger: headingRef.current,
    });

    gsap.from(charRef.current, {
      duration: 1,
      rotation: '45deg',
      scale: 0.5,
      ease: "back.inOut",
      scrollTrigger: charRef.current,
    });

    gsap.from(stepRef.current, {
      duration: 0.75,
      delay: 0.5,
      y: 100,
      scale: 0.5,
      ease: "back.inOut",
      scrollTrigger: charRef.current,
    });

    gsap.to([float1ref.current, float2ref.current, float3ref.current], {
      duration: 3,
      rotation: -640,
      ease: "linear",
      repeat: -1,
    });
    gsap.from(circle1ref.current, {
      duration: 5,
      x: -20,
      y: 20,
      ease: "power3.inOut",
    });
    gsap.from(circle2ref.current, {
      duration: 5,
      x: 20,
      y: -20,
      ease: "power3.inOut",
    });
    gsap.from(circle3ref.current, {
      duration: 2,
      x: 700,
      ease: "circ",
      scrollTrigger: circle3ref.current,
    });
    gsap.from(circle3ref.current, {
      duration: 1,
      delay: 2,
      y: 100,
      ease: "circ",
      scrollTrigger: circle3ref.current,
    });
  }, []);

  return (
    <div className="w-[90%] relative overflow-hidden bg-[#fef7f1] h-[90vh] flex items-start justify-evenly rounded-3xl">
      {/* left section */}

      <div className="flex flex-col gap-20 relative w-1/2 items-center mt-20">
        <div ref={headingRef} className="flex flex-col gap-4">
          <p>Built out of frustration</p>
          <h1 className="text-6xl font-semibold">Meet the ahead app</h1>
        </div>
        <div className="h-56 w-56 bg-white z-10 border-t-[1.5rem] relative border-l-[1.5rem] border-b-[1.5rem] border-r-[1.5rem]  border-zinc-100 rounded-full flex items-center justify-center">
          <Image className='z-10' ref={charRef} src="/char4.png" alt="character" width={100} height={100} />
          <Image
            className="absolute top-[-2.5rem]"
            src="/step1.png"
            alt="step 1"
            width={55}
            height={55}
            ref={stepRef}
          />
        </div>
        <div ref={circle3ref} className="h-96 w-96 bg-[#fae8dc] absolute rounded-full left-[-10rem] top-[10rem]"></div>
      </div>

      {/* right section */}

      <div className="w-1/2 flex flex-col gap-4 mt-[17rem]">
        <p className="text-2xl text-zinc-700">
          People with high emotional intelligence (EQ) live more fulfilled
          lives. they tend to be happier and have healthier relationships.
        </p>
        <p className="text-2xl text-zinc-700">
          But, most of us don&apos;t know how to improve our EQ. We don&apos;t
          know how to identify
        </p>
      </div>

      {/* floating shapes marked absolute */}

      <Image
        src="/float1.png"
        className="absolute top-[18.5rem] left-[36%] rotate-90"
        height={130}
        width={130}
        alt="floating design"
        ref={float2ref}
      />
      <div
        ref={circle1ref}
        className="rounded-full absolute top-[24.5rem] left-[38%] h-12 opacity-50 w-12 bg-orange-300 flex items-center justify-center"
      >
        <div className="rounded-full h-4 w-4 bg-red-500"></div>
      </div>
      <div
        ref={circle2ref}
        className="rounded-full absolute top-[17.75rem] left-[40%] h-4 w-4 bg-red-300"
      ></div>

      <Image
        src="/float1.png"
        className="absolute top-[3.5rem] right-[5rem] rotate-90"
        height={130}
        width={130}
        alt="floating design"
        ref={float1ref}
      />

      <Image
        src="/float2.png"
        className="absolute top-[0.5rem] right-[3rem]"
        height={60}
        width={60}
        alt="floating design"
        ref={float3ref}
      />
    </div>
  );
}

export default BioSection;
