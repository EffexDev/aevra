import Menu from "./MenuBar";
import Socials from "./Socials";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] min-h-50 text-center pt-50">
        <h1 className="text-8xl mb-10">
            Build your future.
        </h1>
        <Menu />
        <Socials />
        <div>
          <p className="p-10"> 
            A strong online presence makes the difference between being overlooked and being unforgettable
          </p>
        </div>
    </div>
  );
}
