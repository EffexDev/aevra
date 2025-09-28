"use client"

import Image from "next/image";
import ScrollButton from "../ScrollButton";
import Menu from "../MenuBar";
import Socials from "../Socials";
import ImageCard from "../ImageCard";

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
           Look deeper.
        </h1>
        <Menu />
        <Socials />
        <div className="flex flex-col lg:flex-row">
          <div className="m-10">
            <ImageCard title="React.js" image="/reactlogo.png" altText="MyTek IT Services" href="https://react.dev"/>
          </div>
          <div className="m-10">
            <ImageCard title="Tailwind" image="/tailwind.svg" altText="MyTek IT Services" href="https://tailwindcss.com/?;dc_transparent=1?https://tailwindcss.com/&gad_source=1"/>
          </div>
          <div className="m-10">
            <ImageCard title="Next.js" image="/nextjs.png" altText="MyTek IT Services" href="https://nextjs.org"/>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="m-10">
            <ImageCard title="n8n" image="/n8n.png" altText="MyTek IT Services" href="https://n8n.io"/>
          </div>
          <div className="m-10">
            <ImageCard title="Docker" image="/docker.jpg" altText="MyTek IT Services" href="https://www.docker.com"/>
          </div>
        </div>
        </div>
    </>
  );
}
