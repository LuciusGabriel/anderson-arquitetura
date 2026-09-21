import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={`/projetos/${project.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#d9d8d3] lg:aspect-[4/3]">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.location}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex items-start justify-between gap-6 pt-4">
          <div>
            <h3 className="text-[15px] font-medium uppercase tracking-[-0.01em]">
              {project.title}
            </h3>

            <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
              {project.location} — {project.year}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="pt-[2px] text-lg font-light"
          >
            ↗
          </span>
        </div>

        <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
          {project.category}
        </p>
      </Link>
    </article>
  );
}