export type Vehicle = {
  name: string;
  mainImage: string;
  category: string;
  keySpecs: string[];
  startingPrice: number;
  detailShots: string[];
  performanceSpecs?: object;
  dimensions?: object;
};
