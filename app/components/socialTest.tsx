'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from 'next/image';

function SocialTest() {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const timeline1Ref = useRef(null);
  const timeline2Ref = useRef(null);
  const timeline3Ref = useRef(null);
  const timeline4Ref = useRef(null);

  useEffect(() => {
    gsap.from([step1Ref.current, step2Ref.current, step3Ref.current], {
      duration: 0.45,
      scale: 0.75,
      opacity: 0.5,
      ease: "back",
      stagger: 0.15,
      scrollTrigger: step1Ref.current,
    });

    gsap.from([timeline1Ref.current, timeline2Ref.current, timeline3Ref.current, timeline4Ref.current], {
      duration: 0.45,
      scale: 0.75,
      opacity: 0.5,
      ease: "back",
      stagger: 0.15,
      scrollTrigger: timeline1Ref.current,
    });
  }, []);

  return (
    <div className="bg-[#edf8fe] overflow-hidden pb-0 p-20 relative h-[100vh] w-[90%] items-center flex flex-col p-8 gap-20 rounded-3xl">
      <div className="flex flex-col items-center w-full gap-4">
        <p className="text-lg">
          Let your friends, family and co-workers (anonymously) rate your social
          skills.
        </p>
        <h1 className="text-5xl font-semibold">
          Ever wondered what other&apos;s think of you?
        </h1>
      </div>

      <div className="flex justify-evenly w-full">
        <div ref={step1Ref} className="flex flex-col items-center w-1/4 gap-4">
          <Image src="/step1.png" width={75} height={75} alt="step 1" />
          <p className="text-center">Answer Questions on your social skills</p>
        </div>
        <div ref={step2Ref} className="flex flex-col items-center w-1/4 gap-4">
          <Image src="/step1.png" width={75} height={75} alt="step 1" />
          <p className="text-center">
            Let others anonymously answer the same questions for you
          </p>
        </div>
        <div ref={step3Ref} className="flex flex-col items-center w-1/4 gap-4">
          <Image src="/step1.png" width={75} height={75} alt="step 1" />
          <p className="text-center">
            Find out where you and others see things the same way - and where
            not!
          </p>
        </div>
      </div>

      <div className="w-4/6 bg-white h-[32vh] rounded-3xl shadow-lg flex items-center justify-center">
        <div className="w-5/6 border-2 relative">
          <div ref={timeline1Ref} className="rounded-full w-[1.5rem] h-[1.5rem] bg-[#6341ef] absolute top-[-0.75rem]">
            <div className='bg-[#6341ef] absolute text-white rounded-2xl px-[1.5rem] py-[0.75rem] top-[-4.5rem] left-[-4rem] text-xl'>You</div>
          </div>
          <div ref={timeline2Ref} className="rounded-full w-[1.5rem] h-[1.5rem] bg-[#40c2fc] absolute top-[-0.75rem] left-[14rem]">
            <div className='bg-[#40c2fc] absolute text-white rounded-2xl px-[1.5rem] py-[0.75rem] top-[2.5rem] left-[-4rem] text-xl'>Anonymously</div>
          </div>
          <div ref={timeline3Ref} className="rounded-full w-[1.5rem] h-[1.5rem] bg-[#f5ad36] absolute top-[-0.75rem] left-[28rem]">
            <div className='bg-[#f5ad36] absolute text-white rounded-2xl px-[1.5rem] py-[0.75rem] top-[-4.5rem] left-[-4rem] text-xl flex'><span>Anonymously</span>&nbsp;<span>2</span></div>
          </div>
          <div ref={timeline4Ref} className="rounded-full w-[1.5rem] h-[1.5rem] bg-[#58c896] absolute top-[-0.75rem] left-[42rem]">
            <div className='bg-[#58c896] absolute text-white rounded-2xl px-[1.5rem] py-[0.75rem] top-[2.5rem] left-[-4rem] text-xl'><span>Anonymously</span>&nbsp;<span>3</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialTest;