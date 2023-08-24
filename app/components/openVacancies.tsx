function OpenVacancies() {
  return (
    <div className="py-24 px-14 relative h-[80vh] w-[90%] flex flex-col p-8 gap-16">

      {/* Heading*/}

      <div>
        <h1 className="text-6xl font-semibold">Open Vacancies</h1>
      </div>

      {/* job vacancy cards*/}

      <div className="flex justify-between">
        <div className="flex flex-col bg-[#fefbec] w-[31%] p-8 gap-4 rounded-2xl">
          <h1 className="text-xl font-semibold">Senior Full-Stack Engineer</h1>
          <ul className="list-disc pl-4 flex flex-col gap-2">
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>Full-time position</li>
          </ul>
        </div>

        <div className="flex flex-col bg-[#fefbec] w-[31%] p-8 gap-4 rounded-2xl">
          <h1 className="text-xl font-semibold">Another Job Title</h1>
          <ul className="list-disc pl-4 flex flex-col gap-2">
            <li>Full-time position</li>
            <li>Another location</li>
            <li>Full-time position</li>
          </ul>
        </div>

        <div className="flex flex-col bg-[#fefbec] w-[31%] p-8 gap-4 rounded-2xl">
          <h1 className="text-xl font-semibold">Yet Another Job Title</h1>
          <ul className="list-disc pl-4 flex flex-col gap-2">
            <li>Full-time position</li>
            <li>Another location</li>
            <li>Full-time position</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OpenVacancies;