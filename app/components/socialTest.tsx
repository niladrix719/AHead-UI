import Image from 'next/image';

function SocialTest() {
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
        <div className="flex flex-col items-center w-1/4 gap-4">
          <Image src="/step1.png" width={75} height={75} alt="step 1" />
          <p className="text-center">Answer Questions on your social skills</p>
        </div>
        <div className="flex flex-col items-center w-1/4 gap-4">
          <Image src="/step1.png" width={75} height={75} alt="step 1" />
          <p className="text-center">
            Let others anonymously answer the same questions for you
          </p>
        </div>
        <div className="flex flex-col items-center w-1/4 gap-4">
          <Image src="/step1.png" width={75} height={75} alt="step 1" />
          <p className="text-center">
            Find out where you and others see things the same way - and where
            not!
          </p>
        </div>
      </div>

      <div className="w-4/6 bg-white h-[32vh] rounded-3xl shadow-lg flex items-center justify-center">
        <div className="w-5/6 border-2 relative">
          <div className="rounded-full w-[1.5rem] h-[1.5rem] bg-violet-400 absolute top-[-0.5rem]"></div>
          <div className="rounded-full w-[1.5rem] h-[1.5rem] bg-blue-400 absolute top-[-0.5rem] left-[15rem]"></div>
          <div className="rounded-full w-[1.5rem] h-[1.5rem] bg-yellow-400 absolute top-[-0.5rem] left-[30rem]"></div>
          <div className="rounded-full w-[1.5rem] h-[1.5rem] bg-green-400 absolute top-[-0.5rem] left-[45rem]"></div>
        </div>
      </div>
    </div>
  );
}

export default SocialTest;