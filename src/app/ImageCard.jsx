import Image from "next/image";

export default function ImageCard({ title, image, altText, href }) {
  return (
    <div className="mt-10 relative flex flex-col h-80 w-100 text-xl border border-black/20 rounded-4xl">
    
      <div className="relative w-full h-80">
        <Image
          src={image}
          alt={altText}
          fill
          className=" rounded-4xl" 
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/100 rounded-4xl"></div>


      <div className="absolute bottom-0 flex flex-row flex-1 justify-between w-full p-4 rounded-bl-4xl">
        <h1 className="text-3xl font-light text-black">{title}</h1>
          <div className="flex justify-between items-center bg-stone-200 border border-black/20 rounded-3xl w-20 p-1 text-black text-sm">
            <a href={href}><p className="pl-2">Visit</p></a>
          <div className="bg-green-700 w-2 h-2 mr-1 rounded-full"></div>
      </div>
      </div>
    </div>
  );
}
