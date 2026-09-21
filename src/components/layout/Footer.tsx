import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#25292b] pb-8 pt-16 text-[#f2f0eb] lg:pb-10 lg:pt-24">
  <div className="mx-auto max-w-[1440px] px-5 lg:px-10 xl:px-16">
      {/* Marca */}
      <div className="mb-20">
        <Image
          src="/brand/symbol.svg"
          alt="Anderson Júnio Arquitetura e Urbanismo"
          width={60}
          height={44}
          className="h-auto w-[60px] brightness-0 invert"
        />

        <p className="mt-5 max-w-[180px] text-[10px] uppercase leading-[1.6] tracking-[0.18em] text-white/55">
          Anderson Júnio
          <br />
          Arquitetura e Urbanismo
        </p>
      </div>

      {/* Navegação */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4 lg:gap-x-10">
        <div>
          <p className="mb-5 text-[9px] uppercase tracking-[0.2em] text-white/35">
            Navegação
          </p>

          <nav className="flex flex-col items-start gap-3">
            <Link
              href="/projetos"
              className="text-[12px] uppercase tracking-[0.1em]"
            >
              Projetos
            </Link>

            <Link
              href="/escritorio"
              className="text-[12px] uppercase tracking-[0.1em]"
            >
              Escritório
            </Link>

            <Link
              href="/#servicos"
              className="text-[12px] uppercase tracking-[0.1em]"
            >
              Serviços
            </Link>

            <Link
              href="/contato"
              className="text-[12px] uppercase tracking-[0.1em]"
            >
              Contato
            </Link>
          </nav>
        </div>

        {/* Contato */}
        <div>
          <p className="mb-5 text-[9px] uppercase tracking-[0.2em] text-white/35">
            Contato
          </p>

          <div className="flex flex-col items-start gap-3">
            <a
              href="mailto:contato@andersonjunio.com.br"
              className="text-[11px] leading-[1.5]"
            >
              contato@
              <br />
              andersonjunio.com.br
            </a>

            <a
              href="#"
              className="text-[11px] uppercase tracking-[0.1em]"
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="mt-20 border-t border-white/15 pt-6">
        <div className="flex items-end justify-between gap-6">
          <p className="text-[9px] uppercase leading-[1.6] tracking-[0.15em] text-white/35">
            © {currentYear}
            <br />
            Anderson Júnio
          </p>

          <a
            href="#inicio"
            className="text-[9px] uppercase tracking-[0.15em] text-white/50"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
}