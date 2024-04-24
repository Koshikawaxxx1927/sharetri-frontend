import { CardContent, Typography } from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";

interface CardContentsProps {
  id: string;
  start: string;
  end: string;
  spot?: string | undefined;
  cost?: string | undefined;
}

const CardContents = ({
  id,
  start,
  end,
  spot = undefined,
  cost = undefined,
}: CardContentsProps) => {
  return (
    <>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {start} ~ {end}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {id}
        </Typography>
        {spot !== undefined && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "7px" }}
          >
            <PlaceIcon color="primary" /> {spot}
          </Typography>
        )}
        {cost !== undefined && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "7px" }}
          >
            <CurrencyYenIcon color="primary" /> {cost} 円
          </Typography>
        )}
      </CardContent>
    </>
  );
};

export default CardContents;
