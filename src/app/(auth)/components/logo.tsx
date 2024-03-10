import React from "react";
import { RiArrowDownSLine, RiArrowRightDoubleFill } from "react-icons/ri";

export default function Logo() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex relative">
        <RiArrowDownSLine className="animate-bounce duration-500 absolute right-9 -top-6" />
        <span className="text-zinc-100 dark:text-zinc-100 text-4xl font-bold flex ">
          <RiArrowRightDoubleFill size={40} />
          REACT
        </span>
        <span className="text-zinc-950 dark:text-cyan-500 text-4xl tracking-widest font-bold">
          NOW
        </span>
      </h1>
    </div>
  );
}
