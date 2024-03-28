import { CardContent, Typography } from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";

interface CardContentsProps {
  id: string;
  start: string;
  end: string;
  spot: string;
}

const CardContents = ({ id, start, end, spot }: CardContentsProps) => {
  return (
    <>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {start} ~ {end}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {id}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: "7px" }}
        >
          <PlaceIcon color="primary" /> {spot}
        </Typography>
      </CardContent>
    </>
  );
};

export default CardContents;
