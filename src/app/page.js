"use client"

import Clients from "@/app/Clients";
import Hero from "@/app/Hero";
import Value from "./Value";
import Services from "./Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="absolute w-full h-[400px]">
      <div className="relative w-full h-full 
        [mask-image:linear-gradient(to_bottom,black,transparent)] 
        [mask-repeat:no-repeat] 
        [mask-size:100%_100%] 
        [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] 
        [-webkit-mask-repeat:no-repeat] 
        [-webkit-mask-size:100%_100%]">
        
        <Image
          src="/winterlandscape.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      </div>
        <div className="relative">
          <Hero />
          <Value />
          <Services />
          <Clients />
        </div>
    </>
  );
}
