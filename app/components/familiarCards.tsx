'use client'
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function FamiliarCards() {
  const boxContainerRef = useRef(null);
  const parentContainerRef = useRef(null);
  const headingRef = useRef(null);

  // adding scroll trigger plugin

  gsap.registerPlugin(ScrollTrigger);

  // Animations using gsap

  useEffect(() => {
    gsap.to(boxContainerRef.current, {
      duration: 2,
      scrollTrigger: parentContainerRef.current,
      x: -1350,
      ease: "circ",
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
    <div ref={parentContainerRef} className="flex flex-col gap-20 items-center mb-40">
      {/* Heading */}

      <h1 ref={headingRef} className="text-6xl font-semibold flex gap-4 items-center">
        Does this sound familiar...
        <Image src="/char.png" height={70} width={70} alt="floating design" />
      </h1>

      {/* Cards */}

      <div ref={boxContainerRef} className="flex gap-12">
        <div className="rounded-3xl p-8 bg-violet-600 text-white w-[26rem] flex flex-col gap-4">
          <Image src="/emoji4.png" alt="emoji" height={50} width={50} />
          <h1 className="text-xl font-semibold"> You feel stuck</h1>
          <p className="text-md leading-[2rem] text-slate-200">
            You feel stuck You feel stuck You feel stuck You feel stuck You feel
            stuck You feel stuck You feel stuck You feel stuck You feel
          </p>
        </div>

        <div className="rounded-3xl p-8 bg-orange-200 w-[26rem] flex flex-col gap-4">
          <Image src="/emoji4.png" alt="emoji" height={50} width={50} />
          <h1 className="text-xl font-semibold"> You feel stuck</h1>
          <p className="text-md leading-[2rem] text-zinc-600">
            You feel stuck You feel stuck You feel stuck You feel stuck You feel
            stuck You feel stuck You feel stuck You feel stuck You feel
          </p>
        </div>

        <div className="rounded-3xl p-8 bg-orange-200 w-[26rem] flex flex-col gap-4">
          <Image src="/emoji4.png" alt="emoji" height={50} width={50} />
          <h1 className="text-xl font-semibold"> You feel stuck</h1>
          <p className="text-md leading-[2rem] text-zinc-600">
            You feel stuck You feel stuck You feel stuck You feel stuck You feel
            stuck You feel stuck You feel stuck You feel stuck You feel
          </p>
        </div>

        <div className="rounded-3xl p-8 bg-green-200 w-[26rem] flex flex-col gap-4">
          <Image src="/emoji4.png" alt="emoji" height={50} width={50} />
          <h1 className="text-xl font-semibold"> You feel stuck</h1>
          <p className="text-md leading-[2rem] text-zinc-600">
            You feel stuck You feel stuck You feel stuck You feel stuck You feel
            stuck You feel stuck You feel stuck You feel stuck You feel
          </p>
        </div>

        <div className="rounded-3xl p-8 bg-zinc-200 w-[26rem] flex flex-col gap-4">
          <Image src="/emoji2.png" alt="emoji" height={50} width={50} />
          <h1 className="text-xl font-semibold"> You argue with a colleague</h1>
          <p className="text-md leading-[2rem] text-zinc-600">
            You get angry and defensive, instead of staying open and working
            towards common ground.
          </p>
        </div>

        <div className="rounded-3xl rotate-[-10deg] p-8 bg-violet-600 text-white w-[26rem] flex flex-col gap-4">
          <Image src="/emoji3.png" alt="emoji" height={50} width={50} />
          <h1 className="text-xl font-semibold">
            {" "}
            You get a promotion at work
          </h1>
          <p className="text-md leading-[2rem] text-slate-200">
            You question yourself and wonder when they&apos;ll realize
            you&apos;re an unqualified impostor, instead of trusting yourself
            and your abilities.
          </p>
        </div>

        <div className="rounded-3xl p-8 bg-orange-200 w-[26rem] flex flex-col gap-4">
          <Image src="/emoji1.png" alt="emoji" height={50} width={50} />
          <h1 className="text-xl font-semibold"> You attend a class reunion</h1>
          <p className="text-md leading-[2rem] text-zinc-600">
            You compare yourself with your peer&apos;s achivement, instead of
            making your self-judgement more independent of others.
          </p>
        </div>

        <div className="rounded-3xl p-8 bg-green-200 w-[26rem] flex flex-col gap-4">
          <Image src="/emoji5.png" alt="emoji" height={50} width={50} />
          <h1 className="text-xl font-semibold">
            {" "}
            You are at a lively dinner party
          </h1>
          <p className="text-md leading-[2rem] text-zinc-600">
            You play on your phone, instead of confidently approaching strangers
            and striking up a chat.
          </p>
        </div>

        <div className="rounded-3xl p-8 bg-zinc-200 w-[26rem] flex flex-col gap-4">
          <Image src="/emoji4.png" alt="emoji" height={50} width={50} />
          <h1 className="text-xl font-semibold">
            You hit dead end in a negotiation
          </h1>
          <p className="text-md leading-[2rem] text-zinc-600">
            You get nervous, frazzled, and frustrated, instead of staying
            optimistic and solution oriented.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FamiliarCards;