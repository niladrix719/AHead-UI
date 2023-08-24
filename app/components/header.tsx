"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { gsap } from "gsap";

function header() {

  // Header Refs


  // random shapes animation refs
  const float1ref = useRef(null);
  const float2ref = useRef(null);
  const circle1ref = useRef(null);
  const circle2ref = useRef(null);

  // floating characters animation refs
  const char1ref = useRef(null);
  const char2ref = useRef(null);
  const char3ref = useRef(null);

  // right animation refs
  const headingref = useRef(null);
  const phoneRef = useRef(null);
  const border1ref = useRef(null);
  const border2ref = useRef(null);


  // Animations using gsap


  useEffect(() => {
    // random shapes animation
    gsap.to(float1ref.current, {
      duration: 1.75,
      rotation: 310,
      ease: "power3.inOut",
    });
    gsap.to(float2ref.current, {
      duration: 4,
      rotation: 310,
      ease: "power3.inOut",
    });
    gsap.from(circle1ref.current, {
      duration: 5,
      x: -20,
      y: 20,
      ease: "power3.inOut",
    });

    //floating characters animation
    gsap.from(circle2ref.current, {
      duration: 5,
      x: 20,
      y: -20,
      ease: "power3.inOut",
    });
    gsap.from(char1ref.current, {
      duration: 1,
      x: 0,
      y: 300,
      rotate: 150,
      scale: 0.5,
      ease: "back",
    });
    gsap.from(char2ref.current, {
      duration: 1,
      y: -300,
      x: -90,
      scale: 0.5,
      rotate: 150,
      ease: "back",
    });
    gsap.from(char3ref.current, {
      duration: 1,
      x: 300,
      y: -90,
      scale: 0.5,
      rotate: 150,
      ease: "back",
    });

    //right animation
    gsap.from(headingref.current, {
      duration: 1,
      x: -300,
      y: 0,
      ease: "power3.inOut",
    });
    gsap.from(phoneRef.current, {
      duration: 0.5,
      scale: 0.75,
      rotate: 30,
      ease: "power3.inOut",
    });
    gsap.from(border1ref.current, {
      duration: 0.5,
      scale: 0.75,
      rotate: 30,
      ease: "power3.inOut",
    });
    gsap.from(border2ref.current, {
      duration: 0.5,
      scale: 0.75,
      rotate: 30,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <div className="bg-[#eeebfef7] overflow-hidden relative h-[90vh] w-[90%] flex justify-between p-8 items-center rounded-3xl">

      {/* left section */}

      <div className="w-1/2 px-4 flex flex-col gap-[2rem] items-start">
        <div ref={headingref} className="flex flex-col gap-4">
          <p>Ahead app</p>
          <h1 className="text-7xl font-semibold leading-[4.85rem]">
            Master your life by mastering emotions
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/apple-png.png"
            width={150}
            height={150}
            alt="app-store"
          />
          <div className="flex flex-col items-start">
            <div className="flex">
              <AiFillStar style={{ color: "#FFC700", fontSize: "1.5rem" }} />
              <AiFillStar style={{ color: "#FFC700", fontSize: "1.5rem" }} />
              <AiFillStar style={{ color: "#FFC700", fontSize: "1.5rem" }} />
              <AiFillStar style={{ color: "#FFC700", fontSize: "1.5rem" }} />
              <AiFillStar style={{ color: "#FFC700", fontSize: "1.5rem" }} />
            </div>
            <div>
              <p className="text-zinc-700">100+ AppStore reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* right section */}

      <div className="relative">
        <div
          ref={border2ref}
          className="rounded-full h-[37rem] w-[37rem] border-dashed border-4 border-white flex items-center justify-center"
        >
          <div
            ref={border1ref}
            className="rounded-full bg-violet-200 h-[25rem] w-[25rem] flex items-center justify-center"
          >
            <div
              ref={phoneRef}
              className="h-[25rem] w-[13.5rem] border-4 bg-white border-black rounded-3xl"
            ></div>
          </div>
        </div>
        <Image
          src="/char2.png"
          className="absolute top-[27.5rem] left-[3rem]"
          height={110}
          width={110}
          alt="floating design"
          ref={char2ref}
        />
        <Image
          src="/char3.png"
          className="absolute top-[3rem] left-[2rem]"
          height={95}
          width={95}
          alt="floating design"
          ref={char3ref}
        />
        <Image
          src="/char.png"
          className="absolute top-[11.5rem] right-[-1rem]"
          height={70}
          width={70}
          alt="floating design"
          ref={char1ref}
        />
      </div>

      {/* floating shapes marked absolute */}

      <Image
        src="/float1.png"
        className="absolute top-[-11rem] rotate-45"
        height={350}
        width={350}
        alt="floating design"
        ref={float1ref}
      />
      <Image
        src="/float1.png"
        className="absolute top-[1.5rem] left-[34%] rotate-90"
        height={130}
        width={130}
        alt="floating design"
        ref={float2ref}
      />
      <div
        ref={circle1ref}
        className="rounded-full absolute top-[6.5rem] left-[32%] h-12 opacity-50 w-12 bg-orange-300 flex items-center justify-center"
      >
        <div className="rounded-full h-4 w-4 bg-red-500"></div>
      </div>
      <div
        ref={circle2ref}
        className="rounded-full absolute top-[2.75rem] left-[42%] h-4 w-4 bg-red-300"
      ></div>
    </div>
  );
}

export default header;
