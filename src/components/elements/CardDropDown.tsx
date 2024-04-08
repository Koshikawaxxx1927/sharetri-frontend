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
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  children: React.ReactNode;
}

const CardDropDown = ({ text, children }: CardDropDownProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <CardActions disableSpacing sx={{ backgroundColor: "#2aff2a" }}>
        {children}
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
