'use client';
import Image from 'next/image';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WorkWithUs() {
  const headingRef = useRef(null);
  const heading2Ref = useRef(null);
  const scrollRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    timeline.to(scrollRef.current, {
      duration: 5,
      scrollTop:
        (scrollRef.current as unknown as HTMLElement).scrollHeight -
        (scrollRef.current as unknown as HTMLElement).clientHeight,
      ease: "linear",
    });

    gsap.from(headingRef.current, {
      duration: 1,
      x: -500,
      scale: 0.65,
      opacity: 0.5,
      ease: "back.inOut",
      scrollTrigger: headingRef.current,
    });

    gsap.from(heading2Ref.current, {
      duration: 1,
      x: 500,
      scale: 0.65,
      opacity: 0.5,
      ease: "back.inOut",
      scrollTrigger: heading2Ref.current,
    });
  }, []);

  return (
    <div className="bg-[#eeebfef7] overflow-hidden py-24 px-14 relative h-[150vh] w-[90%] justify-between flex p-8 gap-24 rounded-3xl">
      {/* left section */}

      <div className="flex flex-col w-[50%] items-start gap-12">
        <h1 ref={headingRef} className="text-6xl font-semibold">Work with us</h1>
        <div className="flex-col bg-white w-full rounded-3xl shadow-lg shadow[#eeebfef7]">
          <div className="p-10 flex flex-col gap-4">
          <Image src='/char5.png' alt='animation' height={60} width={60} />
            <h1 className="text-3xl font-semibold">About</h1>
            <p className="text-2xl text-zinc-600 py-2 leading-9">
              At ahead our goal is to make self- improvement fun and lasting. We
              know there&apos;s a way how to make it work. And that&apos;s what
              aHead is all about!
            </p>
          </div>
          <div className="p-10 flex flex-col gap-4 bg-[#fef7f1] rounded-3xl">
            <h1 className="text-3xl font-semibold">Product</h1>
            <p className="text-2xl text-zinc-600 py-2 leading-9">
              Sure, you could spend ages reading books or sitting in seminars on
              how to become a better spouse, parent, or manager - like we
              did....
            </p>
          </div>
        </div>
      </div>

      {/* right section */}

      <div className="flex flex-col w-[45%] items-start gap-12">
        <h1 ref={heading2Ref} className="text-6xl text-end w-full text-violet-500 font-semibold">
          ahead
        </h1>
        <div ref={scrollRef} className="flex flex-col gap-8 w-full rounded-3xl items-start h-[100vh] overflow-y-scroll custom-scrollbar">
          <div className="p-8 flex flex-col w-5/6 gap-4 bg-white rounded-3xl shadow[#eeebfef7]">
            <h1 className="text-xl font-semibold">
              Power through, even when the going gets tough
            </h1>
            <p className="text-lg text-zinc-600">
              We help you spot and work around whatever stands in the way, be it
              bad habits, fears, etc.
            </p>
          </div>
          <div className="p-8 flex flex-col w-5/6 gap-4 bg-white rounded-3xl shadow[#eeebfef7]">
            <h1 className="text-xl font-semibold">
              Learn more about who you are and where you want to go
            </h1>
            <p className="text-lg text-zinc-600">
              We ask the right questions to help you better understand why you
              do things the way you do.
            </p>
          </div>
          <div className="p-8 flex flex-col w-5/6 gap-4 bg-white rounded-3xl shadow[#eeebfef7]">
            <h1 className="text-xl font-semibold">
              Play and grow together with others on the same journey
            </h1>
            <p className="text-lg text-zinc-600">
              Ahead feels like a game, not like a chore. See yourself grow every
              day towards achieving your goals!
            </p>
          </div>
          <div className="p-8 flex flex-col w-5/6 gap-4 bg-white rounded-3xl shadow[#eeebfef7]">
            <h1 className="text-xl font-semibold">
              Power through, even when the going gets tough
            </h1>
            <p className="text-lg text-zinc-600">
              We help you spot and work around whatever stands in the way, be it
              bad habits, fears, etc.
            </p>
          </div>
          <div className="p-8 flex flex-col w-5/6 gap-4 bg-white rounded-3xl shadow[#eeebfef7]">
            <h1 className="text-xl font-semibold">
              Learn more about who you are and where you want to go
            </h1>
            <p className="text-lg text-zinc-600">
              We ask the right questions to help you better understand why you
              do things the way you do.
            </p>
          </div>
          <div className="p-8 flex flex-col w-5/6 gap-4 bg-white rounded-3xl shadow[#eeebfef7]">
            <h1 className="text-xl font-semibold">
              Play and grow together with others on the same journey
            </h1>
            <p className="text-lg text-zinc-600">
              Ahead feels like a game, not like a chore. See yourself grow every
              day towards achieving your goals!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;