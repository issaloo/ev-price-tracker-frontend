import { ModelGraphDetail } from "./modelGraphDetail";
export type ModelGraph = {
  brandName: string;
  modelName: string;
  modelUrl: string;
  curPrice: number;
  maxPriceYTD: number;
  minPriceYTD: number;
  avgPriceYTD: number;
  maxPrice: number;
  minPrice: number;
  changeYTD: number;
  graphData: ModelGraphDetail[];
};
