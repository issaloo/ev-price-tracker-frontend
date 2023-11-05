import { Typography, CardContent, Card, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/Linkedin";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-center items-start">
        <Card className="mt-9 md:w-3/5 sm:w-4/5 mx-6">
          <CardContent>
            <Typography variant="h5">About Me</Typography>
            <Typography variant="body1">
              I&rsquo;m IL, a mechanical engineer turned programmer. I&rsquo;m a
              second-generation American, with roots in Malaysia and Taiwan, and
              I grew up in the suburbs of New Jersey. My professional journey
              has led me to experiences in Data Engineering, ML Engineering, and
              Data Science. However, my true passion lies in continuously
              expanding my knowledge of software engineering concepts and using
              that expertise to create innovative solutions. I&rsquo;m driven by
              the curiousity to learn and the excitement of building new things.
            </Typography>
            <IconButton
              aria-label="linkedin"
              href="https://www.linkedin.com/in/issac-loo-120b0163/"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="github" href="https://github.com/issaloo">
              <GitHubIcon />
            </IconButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
