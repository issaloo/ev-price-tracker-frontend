"use client";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

const CardContainer = ({
  itemDetails,
  brandName,
}: {
  itemDetails: any;
  brandName: string;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`graph/${brandModelPattern}`);
  };

  const brandModelPattern = `${brandName.toLowerCase()}/${itemDetails.modelName
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  return (
    <Card
      className="mx-2 my-2 h-96 sm:h-72 sm:w-64 bg-white dark:bg-slate-700"
      key={itemDetails.modelName}
      onClick={handleClick}
      raised
    >
      <CardActionArea className="h-96 sm:h-72 sm:w-64">
        <div className="items-center flex h-56 sm:h-32 w-full overflow-hidden">
          <CardMedia
            component="img"
            image={itemDetails.imageSrc}
            className="object-fill"
            alt={itemDetails.modelName}
            sx={{ width: 576 }}
          />
        </div>
        <CardContent className="ml-2 pb-1 pt-2">
          <Divider className="mb-2" />
          <Typography
            variant="h6"
            className={`font-medium text-black dark:text-white ${
              itemDetails.modelName.indexOf(" ") >= 0
                ? "capitalize"
                : "uppercase"
            }`}
          >
            {itemDetails.modelName}
          </Typography>
          <div className="flex flex-row items-center">
            <Typography
              variant="h5"
              className="text-blue-800 dark:text-blue-400 font-bold mr-2"
            >
              ${itemDetails.currentPrice.toLocaleString("en")}
            </Typography>
            <Typography
              variant="caption"
              className="text-black dark:text-white"
            >
              (Base Price)
            </Typography>
          </div>
        </CardContent>
        <CardContent className="flex flex-row pb-3 pt-1">
          <div className="mr-4 ml-2">
            <Typography
              variant="caption"
              className="text-black dark:text-white"
            >
              Previous
            </Typography>
            <Typography
              variant="body1"
              className="text-slate-500 dark:text-blue-200"
            >
              {itemDetails.previousPrice === "none"
                ? "None"
                : `$${itemDetails.previousPrice.toLocaleString("en")}`}
            </Typography>
          </div>
          {itemDetails.previousPrice !== "none" && (
            <div className="mr-4">
              <Typography
                variant="caption"
                className="text-black dark:text-white"
              >
                {itemDetails.currentPrice < itemDetails.previousPrice
                  ? "Discount"
                  : "Increase"}
              </Typography>
              <Typography
                variant="body1"
                className={
                  itemDetails.currentPrice < itemDetails.previousPrice
                    ? "text-green-500 dark:text-green-200"
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
                variant="contained"
                className="capitalize"
                href="https://www.tesla.com/referral/issac66626"
              >
                Referral
              </Button>
            </CardActions>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardContainer;
