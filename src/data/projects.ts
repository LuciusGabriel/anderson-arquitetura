import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "residencia-al",

    title: "Residência AL",
    location: "Anápolis, GO",
    year: 2026,

    category: "Arquitetura Residencial",
    area: "320 m²",
    status: "Projeto",

    description:
      "Uma residência concebida a partir da relação entre arquitetura, paisagem e experiência cotidiana. O projeto busca integrar os ambientes internos e externos por meio de uma composição equilibrada entre volumes, materiais e luz natural.",

    image: "/images/projects/residencia-al/cover.jpg",

    gallery: [
      "/images/projects/residencia-al/01.jpg",
      "/images/projects/residencia-al/02.jpg",
      "/images/projects/residencia-al/03.jpg",
      "/images/projects/residencia-al/04.jpg",
    ],
  },

  {
    id: 2,
    slug: "casa-horizonte",

    title: "Casa Horizonte",
    location: "Goiânia, GO",
    year: 2026,

    category: "Arquitetura Residencial",
    area: "410 m²",
    status: "Projeto",

    description:
      "A Casa Horizonte explora perspectivas amplas, integração com a paisagem e continuidade entre os espaços sociais. A arquitetura parte de linhas horizontais e planos definidos para construir uma residência contemporânea e acolhedora.",

    image: "/images/projects/casa-horizonte/cover.jpg",

    gallery: [
      "/images/projects/casa-horizonte/01.jpg",
      "/images/projects/casa-horizonte/02.jpg",
      "/images/projects/casa-horizonte/03.jpg",
      "/images/projects/casa-horizonte/04.jpg",
    ],
  },

  {
    id: 3,
    slug: "residencia-mn",

    title: "Residência MN",
    location: "Anápolis, GO",
    year: 2025,

    category: "Arquitetura Residencial",
    area: "285 m²",
    status: "Concluído",

    description:
      "O projeto da Residência MN organiza os espaços a partir de uma composição simples e precisa, valorizando iluminação natural, integração e materialidade. Cada ambiente foi pensado como parte de uma experiência arquitetônica contínua.",

    image: "/images/projects/residencia-mn/cover.jpg",

    gallery: [
      "/images/projects/residencia-mn/01.jpg",
      "/images/projects/residencia-mn/02.jpg",
      "/images/projects/residencia-mn/03.jpg",
      "/images/projects/residencia-mn/04.jpg",
    ],
  },
];