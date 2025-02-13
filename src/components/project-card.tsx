import { Project } from "@/lib/Projects";

export default function ProjectCard({ project }: { project: Project }) {
  console.log(project);
  return (
    <article className="w-full h-full flex flex-col items-center justify-center overflow-hidden p-[3%]">
      <div className="flex flex-1">
        <p className="text-[4px] text-center">{project.name}</p>
      </div>
      <div className="flex flex-3">
        
      </div>
    </article>
  );
}
