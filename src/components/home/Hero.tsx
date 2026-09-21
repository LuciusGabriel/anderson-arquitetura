import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-neutral-900"
    >
      <Image
        src="/images/hero/hero.jpg"
        alt="Projeto arquitetônico Anderson Júnio"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 lg:bg-black/30" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-10 pt-24 text-white lg:px-10 lg:pb-14 xl:px-16 xl:pb-16">

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="mb-6 h-px w-8 bg-white/80 lg:w-12" />

            <h1 className="max-w-[340px] text-[44px] font-light leading-[0.98] tracking-[-0.04em] lg:max-w-[900px] lg:text-[72px] xl:text-[86px]">
              Arquitetura que transforma espaços em experiências.
            </h1>
          </div>

          <a
            href="#projetos"
            className="mt-10 inline-flex flex-col gap-2 text-[10px] font-medium uppercase tracking-[0.2em] lg:mb-1 lg:mr-16"
          >
            Explorar

            <span
              aria-hidden="true"
              className="text-xl font-light leading-none"
            >
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* Indicador */}
      <div className="absolute bottom-10 right-5 z-10 text-[10px] tracking-[0.2em] text-white/80 lg:bottom-14 lg:right-10 xl:right-16">
        01 / 03
      </div>
    </section>
  );
}