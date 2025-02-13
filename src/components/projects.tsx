import { Carousel3D } from "./carousel-3d";
import projects from "../lib/Projects"

export default function Projects() {
  return (
    <div
      className="bg-transparent flex flex-col justify-center items-center h-[800px] max-h-[90svh] w-full transform-3d persp overflow-hidden"
      id="Projects"
    >
      <Carousel3D projects={projects}/>
    </div>
  );
}
