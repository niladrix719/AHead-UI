"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { gsap } from "gsap";

function Header() {
  // Header Refs

  // random shapes animation refs
  const float1ref = useRef(null);
  const float2ref = useRef(null);
  const circle1ref = useRef(null);
  const circle2ref = useRef(null);
  const circle3ref = useRef(null);
  const circle4ref = useRef(null);

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
    gsap.from(circle2ref.current, {
      duration: 5,
      x: 20,
      y: -20,
      ease: "power3.inOut",
    });
    gsap.from(circle3ref.current, {
      duration: 1.75,
      scale: 0.5,
      repeat: 1,
      ease: "circ",
    });
    gsap.from(circle4ref.current, {
      duration: 1.75,
      scale: 0.5,
      repeat: 1,
      ease: "circ",
    });

    //floating characters animation
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

    //left animation
    gsap.from(headingref.current, {
      duration: 0.65,
      x: -500,
      scale: 0.65,
      opacity: 0.5,
      ease: "back.inOut",
      scrollTrigger: headingref.current,
    });

    //right animation
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
      duration: 0.8,
      scale: 0.75,
      rotate: 120,
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
          className="rounded-full h-[37rem] w-[37rem] relative border-dashed border-4 border-white flex items-center justify-center"
        >
          <div
            ref={border1ref}
            className="rounded-full bg-violet-200 h-[25rem] w-[25rem] flex items-center justify-center"
          >
            <div
              ref={phoneRef}
              className="h-[26rem] w-[12.5rem] border-4 bg-white border-black rounded-3xl relative left-[3rem]"
              style={{
                backgroundImage: `url('/screenshot.png')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Image className='absolute top-[7.5rem] left-[-11rem]' src='/outer.png' alt='outer image' width={180} height={180} />
            </div>
          </div>

          <div className="h-[1.4rem] w-[1.05rem] absolute top-[-0.75rem] rotate-[-90deg] rounded-t-full bg-blue-400 border-b-2 border-dotted border-[#eeebfef7]"></div>
          <div className="h-[1.4rem] w-[1.05rem] absolute left-[-0.75rem] rotate-[180deg] rounded-t-full bg-red-400 border-b-2 border-dotted border-[#eeebfef7]"></div>
          <div className="h-[1.4rem] w-[1.05rem] absolute right-[1.95rem] bottom-[8rem] rotate-[30deg] rounded-t-full bg-purple-400 border-b-2 border-dotted border-[#eeebfef7]"></div>
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

      <div
        ref={circle3ref}
        className="rounded-full absolute top-[23rem] left-[-1.5rem] h-12 w-12 bg-red-300"
      ></div>

      <div
        ref={circle4ref}
        className="rounded-full absolute bottom-[-0.75rem] left-[32%] h-12 w-12 bg-red-400"
      ></div>

      <div className="rounded-full absolute top-[-1.5rem] right-[10rem] h-12 w-12 bg-red-300"></div>
    </div>
  );
}

export default Header;
