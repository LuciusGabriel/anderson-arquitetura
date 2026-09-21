import Link from "next/link";

export function ContactCTA() {
  return (
    <section
  id="contato"
  className="bg-[#8fa6b1] py-24 text-[#25292b] lg:py-20"
>
  <div className="mx-auto max-w-[1440px] px-5 lg:px-10 xl:px-16">
      <div className="flex min-h-[65svh] flex-col justify-between lg:min-h-[85vh]">
        {/* Cabeçalho */}
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            05
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em]">
            Contato
          </span>
        </div>

        {/* Chamada */}
        <div className="py-20">
          <div className="mb-8 h-px w-10 bg-[#25292b]" />

          <p className="mb-5 text-[10px] uppercase tracking-[0.2em] opacity-70">
            Vamos conversar?
          </p>

          <h2 className="max-w-[340px] text-[42px] font-light uppercase leading-[0.98] tracking-[-0.045em] lg:max-w-[1100px] lg:text-[86px] xl:text-[110px]">
  Tem um projeto em mente?
</h2>
        </div>

        {/* Ação */}
        <Link
          href="/contato"
          className="flex items-center justify-between border-t border-[#25292b]/30 pt-5 text-[11px] font-medium uppercase tracking-[0.18em]"
        >
          Iniciar um projeto

          <span className="text-2xl font-light">→</span>
        </Link>
      </div>
      </div>
    </section>
  );
}