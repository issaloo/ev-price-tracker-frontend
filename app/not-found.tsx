import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Typography } from "@mui/material";

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
