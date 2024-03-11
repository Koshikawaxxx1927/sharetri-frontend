"use client";

import { LinkImageCard } from "@/components/elements";
import { SpotType } from "@/types";
import { Box } from "@mui/material";

interface SpotProps {
  spot: SpotType;
  spotname: string;
}

const Spot = ({ spot, spotname }: SpotProps) => {
  return (
    <Box>
      <LinkImageCard
        id={spot.ID}
        createdat={spot.CreatedAt.split("T")[0]}
        title={spot.name}
        start={spot.starttime.split("T")[1].split(".")[0]}
        end={spot.endtime.split("T")[1].split(".")[0]}
        memo={spot.memo}
        src={spot.imagepath}
        spot={spotname}
        href={`spot/${spot.ID}`}
      />
    </Box>
  );
};

export default Spot;
