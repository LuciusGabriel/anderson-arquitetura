export type Project = {
  id: number;
  slug: string;

  title: string;
  location: string;
  year: number;

  category: string;
  area: string;
  status: string;

  description: string;

  image: string;
  gallery: string[];
};