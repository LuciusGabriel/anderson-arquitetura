"use client";

import { useState } from "react";

import { services } from "@/data/services";

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  function toggleService(id: number) {
    setActiveService((current) => (current === id ? null : id));
  }

  return (
    <section
  id="servicos"
  className="bg-[#25292b] py-24 text-[#f2f0eb] lg:py-36"
>
  <div className="mx-auto max-w-[1440px] px-5 lg:px-10 xl:px-16">
      {/* Cabeçalho */}
      <div className="mb-20 flex items-start justify-between lg:mb-28">
        <div>
          <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/50">
            04
          </span>

          <h2 className="text-[26px] font-light uppercase leading-none tracking-[-0.03em] lg:text-[42px]">
            Serviços
          </h2>
        </div>

        <span className="pt-1 text-[10px] uppercase tracking-[0.18em] text-white/50">
          Atuação
        </span>
      </div>

      {/* Lista */}
      <div className="border-t border-white/20">
        {services.map((service) => {
          const isOpen = activeService === service.id;

          return (
            <div
              key={service.id}
              className="border-b border-white/20"
            >
              <button
                type="button"
                onClick={() => toggleService(service.id)}
                aria-expanded={isOpen}
                aria-controls={`service-${service.id}`}
                className="flex w-full items-center gap-5 py-6 text-left lg:py-9"
              >
                <span className="w-6 shrink-0 text-[9px] tracking-[0.15em] text-white/40">
                  {String(service.id).padStart(2, "0")}
                </span>

                <span className="flex-1 text-[15px] font-light uppercase tracking-[0.04em] lg:text-[24px]">
                  {service.title}
                </span>

                <span
                  aria-hidden="true"
                  className={`text-xl font-light transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                id={`service-${service.id}`}
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[320px] pb-7 pl-11 pr-6 text-[13px] font-light leading-[1.7] text-white/65">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}