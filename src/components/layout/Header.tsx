"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Projetos", href: "/projetos" },
  { label: "Escritório", href: "/#escritorio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-[60] w-full bg-[#25292b]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-16">
          <Link
            href="/"
            aria-label="Anderson Júnio - início"
            onClick={closeMenu}
            className="relative z-[70]"
          >
            <Image
              src="/brand/symbol.svg"
              alt="Anderson Júnio Arquitetura e Urbanismo"
              width={52}
              height={38}
              priority
              className={`h-auto w-[52px] transition-all duration-300 lg:w-[64px] ${
                isMenuOpen ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Botão mobile */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="relative z-[70] flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span
              className={`absolute block h-px bg-white transition-all duration-300 ${
                isMenuOpen
                  ? "w-6 rotate-45"
                  : "w-6 -translate-y-[4px]"
              }`}
            />

            <span
              className={`absolute block h-px bg-white transition-all duration-300 ${
                isMenuOpen
                  ? "w-6 -rotate-45"
                  : "w-4 translate-x-1 translate-y-[4px]"
              }`}
            />
          </button>

          {/* Menu desktop */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Menu mobile fullscreen */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-[#25292b] text-[#f2f0eb] transition-all duration-500 ease-out lg:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0"
        }`}
      >
        <div className="flex min-h-[100svh] flex-col px-5 pb-8 pt-28">
          {/* Identificação */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
              Navegação
            </span>

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
              Menu
            </span>
          </div>

          {/* Links */}
          <nav className="my-auto">
            <div className="border-t border-white/15">
              {navigation.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-white/15 py-6"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="w-5 text-[9px] tracking-[0.15em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[28px] font-light uppercase leading-none tracking-[-0.03em]">
                      {item.label}
                    </span>
                  </div>

                  <span className="text-xl font-light text-white/60">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Rodapé do menu */}
          <div className="flex items-end justify-between border-t border-white/15 pt-5">
            <p className="text-[9px] uppercase leading-[1.6] tracking-[0.16em] text-white/40">
              Anderson Júnio
              <br />
              Arquitetura e Urbanismo
            </p>

            <span className="text-[9px] uppercase tracking-[0.16em] text-white/40">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}