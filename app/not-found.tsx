import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Typography } from "@mui/material";

export const metadata = {
  title: "EV Price Tracker | Not Found",
  description:
    "Oops! The page you're looking for on evpricetracker.com could not be found. Explore other sections or return to the homepage. ",
  icons: {
    icon: "/favicon.png",
  },
};

function NotFound() {
  return (
    <div className="mt-20 items-center flex flex-col justify-center">
      <Typography variant="h1">404</Typography>
      <Typography variant="h4" className="text-gray-400">
        Page Not Found
      </Typography>
      <div className="mt-5">
        <Button
          variant="contained"
          href="/"
          size="small"
          startIcon={<ArrowBackIcon />}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
export default NotFound;
