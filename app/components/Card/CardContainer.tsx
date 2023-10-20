import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const CardContainer = ({ itemDetails }: any) => {
  return (
    <Card className="mx-4 my-4 min-w-min" key={itemDetails.modelName}>
      <CardHeader
        className={`"md:text-xl sm:text-lg ${
          itemDetails.modelName.indexOf(" ") >= 0 ? "capitalize" : "uppercase"
        }`}
        title={itemDetails.modelName}
      />
      <div className="flex justify-center itemDetailss-center">
        <CardMedia
          component="img"
          image={itemDetails.imageSrc}
          height="200"
          width="200"
          alt=""
        />
      </div>
      <CardContent className="flex flex-col justify-center itemDetailss-center">
        <div className="text-md text-blue-800 font-bold">
          ${itemDetails.currentPrice.toLocaleString("en")}
        </div>
        <div className="text-xs">
          Previous:{" "}
          <span className="text-slate-500">
            ${itemDetails.previousPrice.toLocaleString("en")}
          </span>
        </div>
        <div className="text-xs">
          {`${
            itemDetails.currentPrice < itemDetails.previousPrice
              ? "Discount: "
              : "Increase: "
          }`}
          <span
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
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardContainer;
