import ImageCard from "../app/ImageCard";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-20">
      <h2 className="text-3xl text-b">Built by Aevra</h2>
      <ImageCard title="MyTek IT" image="/winterlandscape.jpg" altText="Wintery wonderland" href="https://www.mytek.net.au"/>
    </div>
  );
}
