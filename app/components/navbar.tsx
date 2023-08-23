import Image from 'next/image'

function Navbar() {
  return (
    <nav className="py-2 w-[90%] px-8 flex justify-between items-center">
      <Image src="/logo.png" height={80} width={80} alt="logo" />
      <div>
        <ul className="flex gap-8">
          <li className="font-semibold text-zinc-600">Emotions</li>
          <li className="font-semibold text-zinc-600">Manifesto</li>
          <li className="font-semibold text-zinc-600">Self-awareness test</li>
          <li className="font-semibold text-zinc-600">Work With Us</li>
        </ul>
      </div>
      <div>
        <button className="font-semibold bg-black text-white px-4 py-[0.75rem] rounded-full">
          Download app{" "}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;