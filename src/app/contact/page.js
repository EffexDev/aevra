"use client"

import Clients from "@/app/Clients";
import Hero from "@/app/Hero";
import Image from "next/image";
import ScrollButton from "../ScrollButton";
import Menu from "../MenuBar";
import Socials from "../Socials";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <>
    <ScrollButton />
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
        <div className="relative flex flex-col items-center justify-center w-[100%] min-h-50 text-center pt-50">
        <h1 className="text-8xl mb-10">
           Reach out.
        </h1>
        <Menu />
        <Socials />
        <div className="mt-10">
          <ContactForm />
        </div>
        </div>
    </>
  );
}
