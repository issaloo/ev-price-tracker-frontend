import CardContainer from "./components/Card/CardContainer";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import RefreshIcon from "@mui/icons-material/Refresh";
import { getEvPrice } from "./hooks/getEvPrice";
import { EvPrice } from "./types/evPrice";
import { EvPriceDetail } from "./types/evPriceDetail";

export default async function Home() {
  const evPriceJson = await getEvPrice();
  const datetime =
    new Date().getMonth() +
    1 +
    "/" +
    new Date().getDate() +
    "/" +
    new Date().getFullYear().toString().substr(-2) +
    " 8:00 UTC";

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
          <div className="my-3 mx-10" key={ev.brandName}>
            <div className="">
              <div className="">
                <h4 className="ml-4 text-4xl font-bold capitalize">
                  {ev.brandName}
                </h4>
              </div>
            </div>
            <Divider variant="middle" className="my-3" />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              rowSpacing={1}
            >
              {ev.itemDetails.map((item: EvPriceDetail) => {
                return (
                  <CardContainer itemDetails={item} key={item.modelName} />
                );
              })}
            </Grid>
          </div>
        );
      })}
    </div>
  );
}
