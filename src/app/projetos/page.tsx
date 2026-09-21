import Link from "next/link";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main id="inicio" className="bg-[#f2f0eb] text-[#25292b]">
        {/* Introdução */}
        <section className="px-5 pb-20 pt-32 lg:px-10 lg:pb-32 lg:pt-40 xl:px-16">
          <div className="border-t border-[#25292b]/20 pt-5">
            <div className="flex items-start justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#72787b]">
                Portfólio
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#72787b]">
                {String(projects.length).padStart(2, "0")} projetos
              </span>
            </div>

            <div className="mt-16 lg:mt-24">
              <h1 className="max-w-[340px] text-[48px] font-light uppercase leading-[0.95] tracking-[-0.045em] lg:max-w-[900px] lg:text-[96px] xl:text-[120px]">
                Projetos
              </h1>

              <p className="mt-8 max-w-[330px] text-[14px] font-light leading-[1.7] text-[#72787b] lg:ml-auto lg:max-w-[420px] lg:text-[16px]">
                Uma seleção de projetos desenvolvidos a partir da relação entre
                espaço, função, materialidade e identidade.
              </p>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="px-5 pb-28 lg:px-10 lg:pb-40 xl:px-16">
          <div className="mb-12 flex items-center justify-between border-y border-[#25292b]/15 py-5 lg:mb-20">
            <span className="text-[10px] uppercase tracking-[0.18em]">
              Todos
            </span>

            <span className="text-[10px] uppercase tracking-[0.18em] text-[#72787b]">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-y-20 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-24 xl:grid-cols-3">
  {projects.map((project) => (
    <ProjectCard
      key={project.id}
      project={project}
    />
  ))}
</div>
        </section>

        {/* Voltar */}
        <section className="px-5 pb-24 lg:px-10 lg:pb-32 xl:px-16">
          <Link
            href="/"
            className="flex items-center justify-between border-t border-[#25292b]/20 pt-6 text-[10px] font-medium uppercase tracking-[0.18em]"
          >
            ← Voltar para o início

            <span>Anderson Júnio</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}