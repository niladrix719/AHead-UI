"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function BioSection() {

  // randoms floating animation refs

  const float1ref = useRef(null);
  const float2ref = useRef(null);
  const circle1ref = useRef(null);
  const circle2ref = useRef(null);

  useEffect(() => {

    // random shapes animation

    gsap.to(float1ref.current, {
      duration: 3,
      rotation: -640,
      ease: "linear",
      repeat: -1,
    });
    gsap.to(float2ref.current, {
      duration: 2,
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
  }, []);

  return (
    <div className="w-[90%] relative overflow-hidden bg-[#fef7f1] h-[90vh] flex items-start justify-evenly rounded-3xl">
      {/* left section */}

      <div className="flex flex-col gap-20 relative w-1/2 items-center mt-20">
        <div className="flex flex-col gap-4">
          <p>Built out of frustration</p>
          <h1 className="text-6xl font-semibold">Meet the ahead app</h1>
        </div>
        <div className="h-56 w-56 bg-white border-t-[1.5rem] relative border-l-[1.5rem] border-b-[1.5rem] border-r-[1.5rem]  border-zinc-100 rounded-full flex items-center justify-center">
          <Image src="/char4.png" alt="character" width={100} height={100} />
          <Image
            className="absolute top-[-2.5rem]"
            src="/step1.png"
            alt="step 1"
            width={55}
            height={55}
          />
        </div>
        <div className="h-96 w-96 bg-[#fae8dc] absolute rounded-full left-[-10rem] top-[10rem]"></div>
      </div>

      {/* right section */}

      <div className="w-1/2 flex flex-col gap-4 mt-[17rem]">
        <p className="text-2xl text-zinc-700">
          People with high emotional intelligence (EQ) live more fulfilled
          lives. they tend to be happier and have healthier relationships.
        </p>
        <p className="text-2xl text-zinc-700">
          But, most of us don't know how to improve our EQ. We don't know how to
          identify
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
      />
    </div>
  );
}

export default BioSection;
