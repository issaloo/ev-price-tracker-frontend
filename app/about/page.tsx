import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/Linkedin";
import { IconButton, Typography } from "@mui/material";

import CardPage from "../components/Card/CardPage";

export const metadata = {
  title: "EV Price Tracker | About",
  description: "Discover the creator of evpricetracker.com.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function About() {
  return (
    <CardPage>
      <Typography variant="h5" className="mb-2 text-black dark:text-slate-200">
        About Me
      </Typography>
      <Typography
        variant="body1"
        className="mb-4 text-black dark:text-slate-400"
      >
        I&rsquo;m IL, a mechanical engineer turned programmer.
        <br />
        <br />
        I&rsquo;m a second-generation American, with roots in Malaysia and
        Taiwan, and I grew up in the suburbs of New Jersey.
        <br />
        <br />
        My professional journey has led me to experiences in Data Engineering,
        ML Engineering, and Data Science. However, my true passion lies in
        continuously expanding my knowledge of software engineering concepts and
        using that expertise to create innovative solutions. I&rsquo;m driven by
        the curiousity to learn and the excitement of building new things.
      </Typography>
      <IconButton
        aria-label="linkedin"
        href="https://www.linkedin.com/in/issac-loo-120b0163/"
        className="dark:hover:bg-slate-400"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        aria-label="github"
        href="https://github.com/issaloo"
        className="dark:hover:bg-slate-400"
      >
        <GitHubIcon />
      </IconButton>
    </CardPage>
  );
}
