function WorkWithUs() {
  return (
    <div className="bg-[#eeebfef7] overflow-hidden py-24 px-14 relative h-[140vh] w-[90%] justify-between flex p-8 gap-24 rounded-3xl">
      {/* left section */}

      <div className="flex flex-col w-[50%] items-start gap-12">
        <h1 className="text-6xl font-semibold">Work with us</h1>
        <div className="flex-col bg-white w-full rounded-3xl shadow-lg shadow[#eeebfef7]">
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">About</h1>
            <p className="text-2xl text-zinc-600">
              At ahead our goal is to make self- improvement fun and lasting. We
              know there&apos;s a way how to make it work. And that&apos;s what
              aHead is all about!
            </p>
          </div>
          <div className="p-8 flex flex-col gap-4 bg-[#fef7f1] rounded-3xl">
            <h1 className="text-3xl font-semibold">Product</h1>
            <p className="text-2xl text-zinc-600">
              Sure, you could spend ages reading books or sitting in seminars on
              how to become a better spouse, parent, or manager - like we
              did....
            </p>
          </div>
        </div>
      </div>

      {/* right section */}

      <div className="flex flex-col w-[40%] items-start gap-12">
        <h1 className="text-6xl text-end w-full px-20 text-violet-500 font-semibold">
          ahead
        </h1>
        <div className="flex flex-col gap-8 w-5/6 rounded-3xl">
          <div className="p-8 flex flex-col gap-4 bg-white rounded-3xl shadow[#eeebfef7]">
            <h1 className="text-2xl font-semibold">
              Power through, even when the going gets tough
            </h1>
            <p className="text-xl text-zinc-600">
              We help you spot and work around whatever stands in the way, be it
              bad habits, fears, etc.
            </p>
          </div>
          <div className="p-8 flex flex-col gap-4 bg-white rounded-3xl shadow[#eeebfef7]">
            <h1 className="text-2xl font-semibold">
              Learn more about who you are and where you want to go
            </h1>
            <p className="text-xl text-zinc-600">
              We ask the right questions to help you better understand why you
              do things the way you do.
            </p>
          </div>
          <div className="p-8 flex flex-col gap-4 bg-white rounded-3xl shadow[#eeebfef7]">
            <h1 className="text-2xl font-semibold">
              Play and grow together with others on the same journey
            </h1>
            <p className="text-xl text-zinc-600">
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