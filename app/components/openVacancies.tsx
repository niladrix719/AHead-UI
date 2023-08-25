'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function OpenVacancies() {
  const headingRef = useRef(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const btn3Ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(headingRef.current, {
      duration: 1.5,
      x: -500,
      scale: 0.65,
      opacity: 0.5,
      ease: "back.inOut",
      scrollTrigger: headingRef.current,
    });
  }, []);

  const handleMouseEnter = (ref: React.MutableRefObject<null>, btnRef: React.MutableRefObject<null>) => {
    const t = gsap.timeline();
    t.to(ref.current, { duration: 0.35, backgroundColor: "#ffd4af" }).to(
      ref.current,
      { duration: 0.35, height: "17.5rem" }
    );

    gsap.from(btnRef.current, {
      duration: 0.35,
      scale: 0.3,
      delay: 0.34,
      ease: "power4",
    });
  };

  const handleMouseLeave = (ref: React.MutableRefObject<null>, btnRef: React.MutableRefObject<null>) => {
    const t = gsap.timeline();
    t.to(ref.current, { duration: 0.35, backgroundColor: '#fefbec' })
     .to(ref.current, { duration: 0.35, height: '12.5rem' });

    // gsap.to(btnRef.current, { duration: 0.25, scale: 0.3, delay: 0.25, ease: 'power4' });
    gsap.to(btnRef.current, { duration: 0, scale: 1 });
  };

  return (
    <div className="py-24 px-14 relative h-[80vh] w-[90%] flex flex-col p-8 gap-16">
      {/* Heading*/}

      <div ref={headingRef}>
        <h1 className="text-6xl font-semibold">Open Vacancies</h1>
      </div>

      {/* job vacancy cards*/}

      <div className="flex justify-between">
        <div
          ref={card1Ref}
          onMouseEnter={() => handleMouseEnter(card1Ref, btn1Ref)}
          onMouseLeave={() => handleMouseLeave(card1Ref, btn1Ref)}
          className="flex flex-col bg-[#fefbec] w-[31.5%] overflow-hidden h-[12.5rem] p-8 gap-4 rounded-2xl"
        >
          <h1 className="text-xl font-semibold">Senior Full-Stack Engineer</h1>
          <ul className="list-disc pl-4 flex flex-col gap-2">
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€65-85k, 0.5-1.50% equity share options</li>
          </ul>

          <div className="py-[1.28rem] flex justify-start w-full">
            <button
              ref={btn1Ref}
              className="py-[1rem] px-[1.35rem] bg-black text-white rounded-full"
            >
              See details
            </button>
          </div>
        </div>

        <div
          ref={card2Ref}
          onMouseEnter={() => handleMouseEnter(card2Ref, btn2Ref)}
          onMouseLeave={() => handleMouseLeave(card2Ref, btn2Ref)}
          className="flex flex-col bg-[#fefbec] w-[33%] overflow-hidden h-[12.5rem] p-8 gap-4 rounded-2xl"
        >
          <h1 className="text-xl font-semibold">Senior Designer</h1>
          <ul className="list-disc pl-4 flex flex-col gap-2">
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€40-55k, 0.25-0.50% equity share options</li>
          </ul>

          <div className="py-[1.28rem]">
            <button
              ref={btn2Ref}
              className="py-[1rem] px-[1.35rem] bg-black text-white rounded-full"
            >
              See details
            </button>
          </div>
        </div>

        <div
          ref={card3Ref}
          onMouseEnter={() => handleMouseEnter(card3Ref, btn3Ref)}
          onMouseLeave={() => handleMouseLeave(card3Ref, btn3Ref)}
          className="flex flex-col bg-[#fefbec] w-[31.5%] overflow-hidden h-[12.5rem] p-8 gap-4 rounded-2xl"
        >
          <h1 className="text-xl font-semibold">Superstar Intern</h1>
          <ul className="list-disc pl-4 flex flex-col gap-2">
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€20-24k, 0.5-1.50% equity share options</li>
          </ul>

          <div className="py-[1.28rem]">
            <button
              ref={btn3Ref}
              className="py-[1rem] px-[1.35rem] bg-black text-white rounded-full"
            >
              See details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenVacancies;
