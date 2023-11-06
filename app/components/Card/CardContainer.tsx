import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Divider,
  CardActions,
  Button,
} from "@mui/material";
// import { useRouter } from "next/router";

const CardContainer = ({ itemDetails }: any) => {
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push(`/${itemDetails.modelName}`);
  //   // router..useRouter nect or react
  //   //  router.push('/')
  //   //  brand name and mod namr
  // };

  // useParamas react...query vars
  //  hook

  return (
    <Card
      className="mx-2 my-2 h-96 sm:h-72 sm:w-64"
      key={itemDetails.modelName}
      // onClick={handleClick}
      raised
    >
      <CardActionArea
        href={`/graph/${itemDetails.modelName
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
        className="items-center flex h-56 sm:h-32 w-full overflow-hidden"
      >
        <CardMedia
          component="img"
          image={itemDetails.imageSrc}
          className="object-contain"
          alt={itemDetails.modelName}
        />
      </CardActionArea>
      <CardContent className="ml-2 pb-1 pt-2">
        <Divider className="mb-2" />
        <Typography
          variant="h6"
          className={`font-medium ${
            itemDetails.modelName.indexOf(" ") >= 0 ? "capitalize" : "uppercase"
          }`}
        >
          {itemDetails.modelName}
        </Typography>
        <Typography variant="h5" className="text-blue-800 font-bold">
          ${itemDetails.currentPrice.toLocaleString("en")}
        </Typography>
      </CardContent>
      <CardContent className="flex flex-row pb-3 pt-1">
        <div className="mr-4 ml-2">
          <Typography variant="caption">Previous</Typography>
          <Typography variant="body1" className="text-slate-500">
            {itemDetails.previousPrice === "none"
              ? "None"
              : `$${itemDetails.previousPrice.toLocaleString("en")}`}
          </Typography>
        </div>
        {itemDetails.previousPrice !== "none" && (
          <div>
            <Typography variant="caption">
              {itemDetails.currentPrice < itemDetails.previousPrice
                ? "Discount"
                : "Increase"}
            </Typography>
            <Typography
              variant="body1"
              className={
                itemDetails.currentPrice < itemDetails.previousPrice
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {(
                parseFloat(
                  (
                    Math.abs(
                      itemDetails.currentPrice - itemDetails.previousPrice,
                    ) / itemDetails.previousPrice
                  ).toFixed(4),
                ) * 100
              ).toFixed(2)}
              %
            </Typography>
          </div>
        )}
        {itemDetails.modelUrl.includes("tesla") && (
          <CardActions>
            <Button
              size="small"
              href="https://www.tesla.com/referral/issac66626"
            >
              Referral!
            </Button>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

export default CardContainer;
