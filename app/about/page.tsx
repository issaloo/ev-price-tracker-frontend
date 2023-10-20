import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

export default function Home() {
  return (
    <div className="w-screen flex flex-row justify-center h-screen items-start">
      <Card className="mt-10 sm:w-4/6 md:w-3/6 w-5/6">
        <CardHeader className="uppercase font-extrabold text-3xl flex gap-3">
          About Me
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Hey there! I am DC, a passionate enthusiast with a love for electric
            vehicles (EVs), web scraping, and web development. Beyond these
            three key interests, I thrive on learning, design, and
            problem-solving, and I am always eager to explore new challenges and
            opportunities. Thanks for visiting my website!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
