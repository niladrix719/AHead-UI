"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Navbar from "./components/navbar";
import { gsap } from "gsap";

export default function Home() {
  const float1ref = useRef(null);
  const float2ref = useRef(null);
  const circle1ref = useRef(null);
  const circle2ref = useRef(null);
  const char1ref = useRef(null);
  const char2ref = useRef(null);
  const char3ref = useRef(null);

  useEffect(() => {
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
    gsap.from(circle2ref.current, {
      duration: 5,
      x: 20,
      y: -20,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <div className="bg-[#eeebfef7] overflow-hidden relative h-[90vh] w-[90%] flex justify-between p-8 items-center rounded-3xl">
        <div className="w-1/2 px-4 flex flex-col gap-[2rem] items-start">
          <p>Ahead app</p>
          <h1 className="text-7xl font-semibold leading-[4.85rem]">
            Master your life by mastering emotions
          </h1>
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
        <div className="relative">
          <div className="rounded-full h-[37rem] w-[37rem] border-dashed border-4 border-white flex items-center justify-center">
            <div className="rounded-full bg-violet-200 h-[25rem] w-[25rem] flex items-center justify-center">
              <div className="h-[25rem] w-[13.5rem] border-4 bg-white border-black rounded-3xl"></div>
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
    </main>
  );
}
