import { Carousel3D } from "./carousel-3d";

export default function Projects() {
  return (
    <div className="bg-transparent flex flex-col justify-center items-center h-[800px] max-h-[90svh] w-full transform-3d perspective-2500 overflow-hidden" id="Projects">
      <Carousel3D />
    </div>
  );
}

