import { Typography } from "@mui/material";

const CardQA = ({ qaObject }: { qaObject: any }) => {
  return (
    <div className="mb-2">
      <Typography
        variant="h6"
        className="font-bold text-black dark:text-slate-300"
      >
        {qaObject.question}
      </Typography>
      <Typography variant="body1" className="text-black dark:text-slate-400">
        {qaObject.answer}
      </Typography>
    </div>
  );
};

export default CardQA;
