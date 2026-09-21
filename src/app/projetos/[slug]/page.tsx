import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { projects } from "@/data/projects";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        notFound();
    }

    const currentIndex = projects.findIndex(
        (item) => item.slug === project.slug
    );

    const nextProject =
        projects[(currentIndex + 1) % projects.length];

    return (
        <>
            <Header />

            <main
                id="inicio"
                className="bg-[#f2f0eb] text-[#25292b]"
            >
                {/* INTRODUÇÃO */}
                <section className="pt-28 lg:pt-36">
                    <div className="mx-auto max-w-[1440px] px-5 lg:px-10 xl:px-16">

                        <div className="border-t border-[#25292b]/20 pt-5">
                            <div className="flex items-start justify-between">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#72787b]">
                                    Projeto
                                </span>

                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#72787b]">
                                    {String(project.id).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="pb-16 pt-14 lg:pb-24 lg:pt-20">
                                <h1 className="max-w-[1100px] text-[46px] font-light uppercase leading-[0.95] tracking-[-0.045em] lg:text-[88px] xl:text-[108px]">
                                    {project.title}
                                </h1>

                                <div className="mt-10 flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] text-[#72787b] lg:mt-14 lg:flex-row lg:gap-8">
                                    <span>{project.location}</span>
                                    <span>{project.year}</span>
                                    <span>{project.category}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* IMAGEM PRINCIPAL */}
                <section>
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#d9d8d3] md:aspect-[16/10] lg:aspect-[16/9]">
                        <Image
                            src={project.image}
                            alt={`${project.title} — ${project.location}`}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* SOBRE */}
                <section className="py-24 lg:py-36">
                    <div className="mx-auto max-w-[1440px] px-5 lg:px-10 xl:px-16">

                        <div className="border-t border-[#25292b]/20 pt-5">
                            <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-10">

                                <div className="lg:col-span-3">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#72787b]">
                                        01 / Sobre o projeto
                                    </span>
                                </div>

                                <div className="lg:col-span-6 lg:col-start-6">
                                    <p className="text-[24px] font-light leading-[1.35] tracking-[-0.025em] lg:text-[34px]">
                                        {project.description}
                                    </p>
                                </div>

                            </div>

                            {/* INFORMAÇÕES */}
                            <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-[#25292b]/15 pt-6 lg:ml-[41.666667%] lg:grid-cols-4">

                                <div>
                                    <span className="block text-[9px] uppercase tracking-[0.18em] text-[#72787b]">
                                        Localização
                                    </span>

                                    <span className="mt-3 block text-[13px]">
                                        {project.location}
                                    </span>
                                </div>

                                <div>
                                    <span className="block text-[9px] uppercase tracking-[0.18em] text-[#72787b]">
                                        Área
                                    </span>

                                    <span className="mt-3 block text-[13px]">
                                        {project.area}
                                    </span>
                                </div>

                                <div>
                                    <span className="block text-[9px] uppercase tracking-[0.18em] text-[#72787b]">
                                        Ano
                                    </span>

                                    <span className="mt-3 block text-[13px]">
                                        {project.year}
                                    </span>
                                </div>

                                <div>
                                    <span className="block text-[9px] uppercase tracking-[0.18em] text-[#72787b]">
                                        Status
                                    </span>

                                    <span className="mt-3 block text-[13px]">
                                        {project.status}
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* GALERIA */}
                <section className="pb-24 lg:pb-36">
                    <div className="mx-auto max-w-[1440px] px-5 lg:px-10 xl:px-16">

                        <div className="mb-12 flex items-start justify-between border-t border-[#25292b]/20 pt-5 lg:mb-20">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#72787b]">
                                02 / Galeria
                            </span>

                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#72787b]">
                                {String(project.gallery.length).padStart(2, "0")} imagens
                            </span>
                        </div>

                        <div className="space-y-5 lg:space-y-8">

                            {/* PRIMEIRA IMAGEM */}
                            {project.gallery[0] && (
                                <div className="relative aspect-[4/5] overflow-hidden bg-[#d9d8d3] lg:aspect-[16/9]">
                                    <Image
                                        src={project.gallery[0]}
                                        alt={`${project.title} — imagem 1`}
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* DUAS IMAGENS */}
                            <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
                                {project.gallery.slice(1, 3).map(
                                    (image, index) => (
                                        <div
                                            key={image}
                                            className="relative aspect-[4/5] overflow-hidden bg-[#d9d8d3]"
                                        >
                                            <Image
                                                src={image}
                                                alt={`${project.title} — imagem ${index + 2
                                                    }`}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    )
                                )}
                            </div>

                            {/* ÚLTIMA IMAGEM */}
                            {project.gallery[3] && (
                                <div className="relative aspect-[4/5] overflow-hidden bg-[#d9d8d3] lg:aspect-[16/9]">
                                    <Image
                                        src={project.gallery[3]}
                                        alt={`${project.title} — imagem 4`}
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                    />
                                </div>
                            )}

                        </div>
                    </div>
                </section>

                {/* PRÓXIMO PROJETO */}
                <section className="bg-[#8fa6b1] text-[#25292b]">
                    <Link
                        href={`/projetos/${nextProject.slug}`}
                        className="group block"
                    >
                        <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28 xl:px-16">

                            <div className="flex items-center justify-between border-t border-[#25292b]/25 pt-5">
                                <span className="text-[10px] uppercase tracking-[0.2em]">
                                    Próximo projeto
                                </span>

                                <span className="text-xl font-light transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </div>

                            <h2 className="mt-16 max-w-[1100px] text-[42px] font-light uppercase leading-[0.95] tracking-[-0.045em] lg:mt-24 lg:text-[82px] xl:text-[100px]">
                                {nextProject.title}
                            </h2>

                            <div className="mt-8 flex gap-5 text-[10px] uppercase tracking-[0.16em]">
                                <span>{nextProject.location}</span>
                                <span>{nextProject.year}</span>
                            </div>

                        </div>
                    </Link>
                </section>
            </main>

            <Footer />
        </>
    );
}