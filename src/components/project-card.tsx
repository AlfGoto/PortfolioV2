"use client";

import { Project } from "@/lib/Projects";
import { QueryManager } from "@/lib/use-get";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  const m = new QueryManager("project");
  return (
    <article
      onClick={(e) => {
        // @ts-expect-error Property 'href' does not exist on type 'EventTarget'.
        if (e.target.href) return;
        m.set(project.name);
      }}
      className="w-full h-full overflow-hidden"
    >
      {project.banner && (
        <Image
          src={`/imgs/${project.name}/${project.banner}`}
          sizes="100svw"
          quality={90}
          fill
          alt={"an image of the " + project.name + " project"}
          className="object-cover z-10"
          style={{imageRendering: "crisp-edges"}}
        />
      )}
      <div
        className="w-full absolute bottom-0 flex justify-between items-center z-20 p-[2px] bg-white/50"
        style={{ backdropFilter: "blur(.1px)" }}
      >
        <p className="text-[4px] text-center h-[5px]">{project.name}</p>

        {project.url && (
          <a href={project.url} className="text-[5px] bg-slate-300 px-[5px] hover:bg-slate-100">
            Link
          </a>
        )}
      </div>
    </article>
  );
}
