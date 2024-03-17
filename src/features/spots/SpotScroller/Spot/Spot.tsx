"use client";

import { CardContents, ImageCard } from "@/components/elements";
import { SpotType } from "@/types";
import { Box } from "@mui/material";

interface SpotProps {
  spot: SpotType;
  spotname: string;
}

const Spot = ({ spot, spotname }: SpotProps) => {
  return (
    <Box>
      <ImageCard
        title={spot.name}
        createdat={spot.CreatedAt.split("T")[0]}
        memo={spot.memo}
        src={spot.imagepath}
        spot={spotname}
      >
        <CardContents
          id={spot.ID}
          start={spot.starttime.split("T")[1].slice(0, 5)}
          end={spot.endtime.split("T")[1].slice(0, 5)}
          spot={spot.name}
        />
      </ImageCard>
    </Box>
  );
};

export default Spot;
