import ImageCard from "./ImageCard";

export default function CallToAction() {
  return (
    <div className="flex flex-col w-full mt-40">
      <h2 className="text-3xl text-center mb-5">Built by Aevra</h2>
      <div className="flex flex-col justify-evenly items-center lg:flex-row lg:align-top lg:pl-30 lg:pr-30">
        <ImageCard title="MyTek IT Services" image="/mytekSS.jpg" altText="MyTek IT Services" href="https://www.mytek.net.au"/>
      </div>
    </div>
  );
}
