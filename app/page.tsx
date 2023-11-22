import RefreshIcon from "@mui/icons-material/Refresh";
import { Divider, Grid, Typography } from "@mui/material";

import CardContainer from "./components/Card/CardContainer";
import { getEvPrice } from "./hooks/getEvPrice";
import { EvPrice } from "./types/evPrice";
import { EvPriceDetail } from "./types/evPriceDetail";

export const metadata = {
  title: "EV Price Tracker | Stay Informed About Electric Vehicle Costs",
  description:
    "Get daily updates on electric vehicle starting prices from known brands such as Tesla, Rivian, and Lucid. Compare costs, find the best deals, and make informed choices with our real-time EV price tracker. Stay ahead in the electric vehicle market with accurate pricing data.",
  icons: {
    icon: "/favicon.png",
  },
};

async function Home() {
  const evPriceJson = await getEvPrice();
  const datetime =
    new Date().getMonth() +
    1 +
    "/" +
    new Date().getDate() +
    "/" +
    new Date().getFullYear().toString();

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-end mt-2">
        <Typography
          color="slategray"
          variant="caption"
          className="pr-10"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <RefreshIcon fontSize="small" className="mr-1" />
          Updated {datetime}
        </Typography>
      </div>
      {evPriceJson.map((ev: EvPrice) => {
        return (
          <div className="sm:mb-4 mb-8 sm:mx-36 mx-4" key={ev.brandName}>
            <h4 className="ml-4 text-4xl font-bold capitalize">
              {ev.brandName}
            </h4>
            <Divider variant="middle" className="mt-2 mb-4" />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              rowSpacing={1}
            >
              {ev.itemDetails.map((item: EvPriceDetail) => {
                return (
                  <CardContainer
                    itemDetails={item}
                    brandName={ev.brandName}
                    key={item.modelName}
                  />
                );
              })}
            </Grid>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
