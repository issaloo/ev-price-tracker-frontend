import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
} from "@nextui-org/react";

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
              <Divider className="mt-3 mb-5" />
            </div>
            <div className="flex sm:flex-row flex-col">
              {ev.itemDetails.map((item) => {
                return (
                  <Card
                    radius="lg"
                    className="mx-4 my-4 min-w-min"
                    key={item.modelName}
                  >
                    <CardHeader
                      className={`"md:text-xl sm:text-lg ${
                        item.modelName.indexOf(" ") >= 0
                          ? "capitalize"
                          : "uppercase"
                      }`}
                    >
                      {item.modelName}
                    </CardHeader>
                    <Divider className="" />
                    <CardBody className="flex justify-center items-center">
                      <Image
                        className="object-cover rounded-xl"
                        src={item.imageSrc}
                        // fill
                        width={200}
                        height={200}
                        alt=""
                      />
                    </CardBody>
                    <CardFooter className="flex flex-col justify-center items-center">
                      <div className="text-md text-blue-800 font-bold">
                        ${item.currentPrice.toLocaleString("en")}
                      </div>
                      <div className="text-xs">
                        Previous:{" "}
                        <span className="text-slate-500">
                          ${item.previousPrice.toLocaleString("en")}
                        </span>
                      </div>
                      <div className="text-xs">
                        {`${
                          item.currentPrice < item.previousPrice
                            ? "Discount: "
                            : "Increase: "
                        }`}
                        <span
                          className={`${
                            item.currentPrice < item.previousPrice
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {(
                            parseFloat(
                              (
                                Math.abs(
                                  item.currentPrice - item.previousPrice,
                                ) / item.previousPrice
                              ).toFixed(4),
                            ) * 100
                          ).toFixed(2)}
                          %
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
// TODO: break out functions
// Make min-width better and consistent
// Hamburger menu not working anymore
// Add updated at
