import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function Home() {
  return (
    <div className="w-screen flex flex-row justify-center h-screen items-start">
      <Card className="mt-9 md:w-3/5 sm:w-4/5 mx-6">
        <CardContent>
          <Typography variant="h5">About Me</Typography>
          <Typography variant="body1">
            Hey there! I am DC, a passionate enthusiast with a love for electric
            vehicles (EVs), web scraping, and web development. Beyond these
            three key interests, I thrive on learning, design, and
            problem-solving, and I am always eager to explore new challenges and
            opportunities. Thanks for visiting my website!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
