import Header from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

interface CardHeaderProps {
  title: string;
  createdat: string;
}

const CardHeader = ({ title, createdat }: CardHeaderProps) => {
  return (
    <>
      <Header
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader={createdat}
      />
    </>
  );
};

export default CardHeader;
