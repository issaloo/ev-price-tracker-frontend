import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";

const CardContainer = ({ itemDetails }: any) => {
  return (
    <Card className="mx-4 my-4 sm:w-64" key={itemDetails.modelName} raised>
      <CardActionArea>
        <div className="h-64 sm:h-32 items-center flex">
          <CardMedia
            component="img"
            image={itemDetails.imageSrc}
            className="object-cover"
            alt={itemDetails.modelName}
          />
        </div>
        <CardContent className="ml-2 pb-1 pt-3">
          <Divider className="mb-2" />
          <Typography
            variant="h6"
            className={`font-medium ${
              itemDetails.modelName.indexOf(" ") >= 0
                ? "capitalize"
                : "uppercase"
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
              ${itemDetails.previousPrice.toLocaleString("en")}
            </Typography>
          </div>
          <div>
            <Typography variant="caption">
              {`${
                itemDetails.currentPrice < itemDetails.previousPrice
                  ? "Discount"
                  : "Increase"
              }`}
            </Typography>
            <Typography
              variant="body1"
              className={`${
                itemDetails.currentPrice < itemDetails.previousPrice
                  ? "text-green-500"
                  : "text-red-500"
              }`}
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardContainer;
