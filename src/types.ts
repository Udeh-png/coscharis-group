export type Vehicle = {
  name: string;
  mainImage: string;
  category: string;
  keySpecs: string[];
  startingPrice: number;
  detailShots: string[];
  performanceSpecs?: object;
  dimensions: object;
  justArrived: boolean;
};

export type FeaturedNews = {
  title: string;
  excerpt: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};
