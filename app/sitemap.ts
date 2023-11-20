import { getEvPrice } from "./hooks/getEvPrice";
import { EvPrice } from "./types/evPrice";
import { EvPriceDetail } from "./types/evPriceDetail";

export default async function sitemap() {
  const URL = "https://www.evpricetracker.com";
  const evPriceJson = await getEvPrice();
  const curDate = new Date().toISOString();

  // get dynamic graph routes
  const graphs = evPriceJson.map((ev: EvPrice) => {
    const brand = ev.brandName;
    return ev.itemDetails.map((item: EvPriceDetail) => {
      return {
        url: `${URL}/graph/${brand}-${item.modelName.replace(/\s+/g, "-")}`,
        lastModified: curDate,
        priority: 0.8,
      };
    });
  });
  const graphsFlat = graphs.flat(1);

  // get static routes
  const routes = ["", "about", "faq"].map((route) => ({
    url: `${URL}/${route}`,
    lastModified: curDate,
    priority: route === "" ? 1 : 0.5,
  }));

  return [...routes, ...graphsFlat];
}
