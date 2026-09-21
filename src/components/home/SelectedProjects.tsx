import Link from "next/link";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function SelectedProjects() {
  return (
    <section
      id="projetos"
      className="bg-[var(--background)] px-5 py-24 lg:px-10 lg:py-36 xl:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
      <div className="mb-14 flex items-end justify-between lg:mb-24">
        <div>
          <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            01
          </span>

          <h2 className="text-[26px] font-light uppercase leading-none tracking-[-0.03em] lg:text-[42px]">
            Projetos
            <br />
            selecionados
          </h2>
        </div>

        <span className="pb-1 text-[10px] tracking-[0.18em] text-[var(--muted)]">
          01 — {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="grid gap-y-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-20">
  {projects.map((project) => (
    <ProjectCard
      key={project.id}
      project={project}
    />
  ))}
</div>

      <div className="mt-20 border-t border-[var(--border)] pt-6 pb-2">
        <Link
          href="/projetos"
          className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em]"
        >
          Todos os projetos

          <span className="text-lg font-light">→</span>
        </Link>
      </div>
      </div>
    </section>
  );
}