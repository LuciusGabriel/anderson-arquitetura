import Image from "next/image";
import Link from "next/link";

export function Studio() {
  return (
    <section
      id="escritorio"
      className="bg-[var(--background)] py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10 xl:px-16">

        {/* Cabeçalho da seção */}
        <div className="mb-14 flex items-start justify-between lg:mb-24">
          <div>
            <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              03
            </span>

            <h2 className="text-[26px] font-light uppercase leading-none tracking-[-0.03em] lg:text-[42px]">
              O escritório
            </h2>
          </div>

          <span className="pt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Sobre
          </span>
        </div>

        {/* Fotografia + conteúdo */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">

          {/* Fotografia */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--border)]">
              <Image
                src="/images/studio/anderson.jpg"
                alt="Anderson Júnio — arquiteto e urbanista"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="mt-10 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:flex lg:flex-col lg:justify-between">

            {/* Título */}
            <h3 className="mb-12 max-w-[330px] text-[32px] font-light leading-[1.08] tracking-[-0.035em] lg:max-w-[520px] lg:text-[52px]">
              Arquitetura começa pela compreensão do espaço.
            </h3>

            {/* Texto inferior */}
            <div>
              <div className="mb-8 h-px w-10 bg-[var(--foreground)]" />

              <p className="max-w-[440px] text-[16px] font-light leading-[1.65] lg:text-[18px]">
                Anderson Júnio Arquitetura e Urbanismo desenvolve projetos que
                conectam estética, funcionalidade e identidade, respeitando as
                particularidades de cada espaço e de quem o habita.
              </p>

              <Link
                href="/escritorio"
                className="mt-10 flex items-center justify-between border-b border-[var(--border)] pb-4 text-[10px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
              >
                Conheça o escritório

                <span
                  aria-hidden="true"
                  className="text-lg font-light"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}