import { Typography } from "@mui/material";

import CardPage from "../components/Card/CardPage";

export const metadata = {
  title: "EV Price Tracker | Disclaimers",
  description:
    "Read our concise disclaimer page for important information regarding the use of evpricetracker.com. Understand terms, limitations, and responsibilities before proceeding. Clarify your experience with our straightforward disclaimer.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Disclaimer() {
  return (
    <CardPage>
      <Typography variant="h5" className="mb-2 text-black dark:text-slate-200">
        Disclaimer
      </Typography>
      <Typography
        variant="body1"
        className="mb-4 text-black dark:text-slate-400"
      >
        The information provided on this website regarding electric vehicle (EV)
        prices over time is for informational purposes only. While we strive to
        ensure the accuracy and timeliness of the data presented, we cannot
        guarantee that it is error-free or up-to-date. Prices are subject to
        change based on various factors, including market fluctuations,
        manufacturer adjustments, and other economic conditions.
        <br />
        <br />
        This website does not endorse or promote any specific electric vehicle
        brand or model. The displayed prices are sourced from publicly available
        data and may not reflect real-time market conditions. Users are
        encouraged to verify the information independently before making any
        financial decisions.
        <br />
        <br />
        The website owners and contributors are not liable for any direct or
        indirect damages arising from the use of the information provided on
        this platform. Users should exercise their discretion and seek
        professional advice if needed before relying on the displayed price
        trends.
        <br />
        <br />
        Additionally, please be aware that the historical trends presented on
        this website are based on past data, and future prices may vary. The
        website owners reserve the right to modify or discontinue the service
        without prior notice.
        <br />
        <br />
        By using this website, you agree to the terms of this disclaimer. If you
        do not agree with these terms, please refrain from using the website.
        This disclaimer may be updated periodically, and users are encouraged to
        review it regularly for any changes.
      </Typography>
    </CardPage>
  );
}
