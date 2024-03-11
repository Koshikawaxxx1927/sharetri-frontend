"use client";

import { styled } from "@mui/material/styles";
import {
  IconButtonProps,
  IconButton,
  CardActions,
  Collapse,
  CardContent,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { memo, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface CardDropDownProps {
  text: string;
}

const CardDropDown = ({ text }: CardDropDownProps) => {
  const isFavorite = false;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <CardActions disableSpacing sx={{ backgroundColor: "#2aff2a" }}>
        <IconButton aria-label="add to favorites">
          {isFavorite ? (
            <FavoriteIcon sx={{ color: pink[500] }} />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color="primary" />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{text} </Typography>
        </CardContent>
      </Collapse>
    </>
  );
};

export default CardDropDown;
