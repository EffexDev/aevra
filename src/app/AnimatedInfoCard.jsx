'use client'

import { useState } from "react";

export default function AnimatedInfoCard({ title, content, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 max-w-100 mx-auto">
      {/* Base card */}
      <div className="flex flex-col items-center justify-evenly min-h-40 p-6  text-center text-xl bg-white backdrop-blur-lg border border-gray-400 rounded-3xl shadow-2xl dark:bg-gray-900">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="pt-4">{content}</p>
        <div className="text-center mt-2 cursor-pointer" onClick={() => setOpen(!open)}>
          <p className="font-light">{open ? "See less" : "See more!"}</p>
        </div>
      </div>

      {/* Blue expanding panel */}
      <div
        onClick={() => setOpen(!open)}
        className={`
          max-w-[98%] mx-auto mt-[-1rem] 
          rounded-bl-3xl rounded-br-3xl flex flex-col items-center text-white
          bg-[#2C497F] border border-gray-400 cursor-pointer
          transition-all duration-800 ease-in-out overflow-hidden
          ${open ? "max-h-80 py-6" : "max-h-0"}
        `}
      >
        <div className="px-6 text-center w-80">
          <div className="break-words">{children}</div>
        </div>

      </div>
    </div>
  );
}
