import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function NotFound() {
  return (
    <div className="items-center flex flex-col h-screen justify-center">
      <Typography variant="h1">404</Typography>
      <Typography variant="h4" className="text-gray-400">
        Page Not Found
      </Typography>
      <Button variant="contained" href="/" size="small">
        <ArrowBackIcon fontSize="small" />
        Return Home
      </Button>
    </div>
  );
}
export default NotFound;
// update page here
