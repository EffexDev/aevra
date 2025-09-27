'use client'

import { useState } from "react";

export default function AnimatedInfoCard({ title, content, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 max-w-100 mx-auto">
      {/* Base card */}
      <div className="flex flex-col items-center justify-evenly min-h-40 p-6 text-xl bg-white backdrop-blur-lg border border-gray-400 rounded-3xl shadow-md">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-gray-700">{content}</p>
        <div className="text-center mt-2"  onClick={() => setOpen(!open)}>
          <p className="font-medium">{open ? "See less" : "See more!"}</p>
        </div>
      </div>

      {/* Blue expanding panel */}
      <div
        onClick={() => setOpen(!open)}
        className={`
          mx-auto mt-[-1rem] 
          rounded-bl-3xl rounded-br-3xl flex flex-col items-center text-white
          bg-[#3dd0f5] border border-gray-400 cursor-pointer
          transition-all duration-500 ease-in-out overflow-hidden
          ${open ? "max-h-80 py-6" : "max-h-0 py-0"}
        `}
      >
        <div className="px-6 text-center max-w-80">
          <p className="break-words">{children}</p>
        </div>

      </div>
    </div>
  );
}
