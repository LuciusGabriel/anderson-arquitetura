export function Manifesto() {
  return (
    <section className="bg-[var(--brand-blue)] text-[var(--brand-dark)]">
      <div className="mx-auto flex min-h-[75svh] max-w-[1440px] flex-col justify-between px-5 py-10 lg:min-h-screen lg:px-10 lg:py-14 xl:px-16">
        {/* Identificação da seção */}
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            02
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em]">
            Manifesto
          </span>
        </div>

        {/* Manifesto */}
        <div className="py-20 lg:py-32">
          <div className="mb-8 h-px w-10 bg-[var(--brand-dark)]" />

          <h2 className="max-w-[330px] text-[32px] font-light leading-[1.08] tracking-[-0.035em] lg:max-w-[950px] lg:text-[68px] lg:leading-[1.02] xl:text-[82px]">
            Projetamos espaços que equilibram função, identidade e permanência.
          </h2>
        </div>

        {/* Assinatura */}
        <div className="flex items-end justify-between border-t border-[var(--brand-dark)]/25 pt-5">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em]">
              Anderson Júnio
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] opacity-70">
              Arquitetura e Urbanismo
            </p>
          </div>

          <span className="text-lg font-light">↓</span>
        </div>
      </div>
    </section>
  );
}