import { Typography } from "@mui/material";

const CardQA = ({ qaObject }: { qaObject: any }) => {
  return (
    <div className="mb-2">
      <Typography variant="h6">{qaObject.question}</Typography>
      <Typography variant="body1">{qaObject.answer}</Typography>
    </div>
  );
};

export default CardQA;
