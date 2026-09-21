export type Service = {
  id: number;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Arquitetura Residencial",
    description:
      "Projetos residenciais desenvolvidos desde a concepção inicial até o detalhamento, considerando estética, funcionalidade e as necessidades de cada cliente.",
  },
  {
    id: 2,
    title: "Arquitetura Comercial",
    description:
      "Espaços comerciais projetados para unir identidade, experiência e funcionalidade, traduzindo os valores de cada negócio em arquitetura.",
  },
  {
    id: 3,
    title: "Interiores",
    description:
      "Projetos de interiores que trabalham materiais, iluminação, mobiliário e composição espacial de forma integrada.",
  },
  {
    id: 4,
    title: "Urbanismo",
    description:
      "Estudos e projetos urbanos desenvolvidos a partir das relações entre espaço, circulação, uso e contexto.",
  },
  {
    id: 5,
    title: "Acompanhamento de Obra",
    description:
      "Acompanhamento técnico para contribuir com a correta interpretação e execução das soluções definidas em projeto.",
  },
];