// import Image from "next/image"
import CardContainer from "./components/Card/CardContainer";

// TODO: remove mock data
type EvProps = {
  brandName: string;
  itemDetails: {
    modelName: string;
    imageSrc: string;
    currentPrice: number;
    previousPrice: number;
  }[];
};
const evPriceJson = [
  {
    brandName: "tesla",
    itemDetails: [
      {
        modelName: "model 3",
        imageSrc:
          "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Order-Desktop-Mobile-Global.jpg",
        currentPrice: 49900,
        previousPrice: 54000,
      },
      {
        modelName: "model y",
        imageSrc:
          "https://digitalassets.tesla.com/tesla-contents/image/upload/h_600,w_1934,c_fit,f_auto,q_auto:best/Model-Y-Order-Hero-Desktop-Mobile-Global",
        currentPrice: 62000,
        previousPrice: 70000,
      },
      {
        modelName: "model x",
        imageSrc:
          "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Order-Desktop-Mobile-Global.jpg",
        currentPrice: 49900,
        previousPrice: 54000,
      },
      {
        modelName: "model s",
        imageSrc:
          "https://digitalassets.tesla.com/tesla-contents/image/upload/h_600,w_1934,c_fit,f_auto,q_auto:best/Model-Y-Order-Hero-Desktop-Mobile-Global",
        currentPrice: 62000,
        previousPrice: 70000,
      },
    ],
  },
  {
    brandName: "rivian",
    itemDetails: [
      {
        modelName: "r1s",
        imageSrc:
          "https://images.rivian.com/2md5qhoeajym/4ZZbvolNmJ3PcOjJA5Ok5S/d62eb6809d420b334bdf402b1f0cf247/R1S-6_mpb0pk.png?fm=webP",
        currentPrice: 79900,
        previousPrice: 85000,
      },
      {
        modelName: "r1t",
        imageSrc:
          "https://images.rivian.com/2md5qhoeajym/4sr7z8ebIqI5jSAEZO3SrB/1dcf98537e9b0ee8c58ef29a54977ed4/R1T-1.png?w=1440&fm=webp",
        currentPrice: 67354,
        previousPrice: 60412,
      },
    ],
  },
] as EvProps[];

export default function Home() {
  return (
    <div className="">
      {evPriceJson.map((ev) => {
        return (
          <div className="my-10 mx-10" key={ev.brandName}>
            <div className="">
              <div className="">
                <h4 className="text-4xl font-bold capitalize">
                  {ev.brandName}
                </h4>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col">
              {ev.itemDetails.map((item) => {
                return (
                  <CardContainer itemDetails={item} key={item.modelName} />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
// Make min-width better and consistent
// Hamburger menu not working anymore
// Add updated at
