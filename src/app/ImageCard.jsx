import Image from "next/image";

export default function ImageCard({ title, image, altText, href }) {
  return (
    <div className="relative flex flex-col flex-1 h-80 min-w-100 text-xl border border-black/20 rounded-4xl m-5">
    
      <div className="relative w-full h-80">
        <Image
          src={image}
          alt={altText}
          fill
          className="object-cover rounded-4xl" 
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/100 rounded-4xl"></div>
      <div className="absolute top-3 left-4 flex justify-between items-center bg-stone-200 border border-black/20 rounded-3xl w-20 p-1 text-sm">
        <a href={href}>Source</a>
        <div className="bg-green-700 w-2 h-2 pr-1 rounded-full"></div>
      </div>

      <div className="absolute bottom-0 flex flex-col flex-1 justify-between w-full p-4 rounded-bl-4xl">

        <h1 className="text-3xl font-light">{title}</h1>
      </div>
    </div>
  );
}
