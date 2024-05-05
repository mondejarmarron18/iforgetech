"use client";

import { FaHammer } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="flex relative flex-col size-[200px] lg:size-[250px] animate-pulse items-center justify-center gap-4">
        <div className="h-full w-full absolute border-gray-600 drop-shadow-lg border-t-2 rounded-full animate-spin duration-[3000ms]"></div>
        <span className="scale-x-[-1]">
          <FaHammer className="duration-1000 origin-bottom-left animate-hammering size-[40px] lg:size-[60px]" />
        </span>
        <span className="text-md lg:text-xl font-medium">
          <Typewriter
            options={{
              strings: ["iForgeTech", "Forging Soon"],
              autoStart: true,
              loop: true,
              delay: "natural",
              deleteSpeed: "natural",
            }}
          />
        </span>
      </div>
    </main>
  );
}
