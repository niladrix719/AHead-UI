import Image from 'next/image';
import { IoLocationSharp, IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className="border-t-2 relative w-[90%] flex flex-col items-center p-8 gap-8">
      {/* Logo*/}

      <div className="flex flex-col items-center">
        <Image src="/logo.png" height={100} width={100} alt="logo" />
        <h1 className="text-3xl text-violet-700 font-semibold">ahead</h1>
      </div>

      {/* Contact*/}

      <div className="flex gap-12">
        <p className="flex text-md gap-2 items-center">
          <IoLocationSharp className="bg-[#98f0d7] h-8 w-8 p-2 rounded-full" />
          Auguststraße 26, 10117 Berlin
        </p>
        <p className="flex text-md gap-2 items-center">
          <IoMail className="bg-[#98f0d7] h-8 w-8 p-2 rounded-full" />
          hi@ahead-app.com
        </p>
      </div>

      {/* lower footer*/}

      <Image src="/apple-png.png" width={160} height={160} alt="app-store" />
      <p className="text-zinc-600">&copy; 2023 Ahead app. All right reserved</p>
    </div>
  );
}

export default Footer;
