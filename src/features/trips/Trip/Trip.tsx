"use client";

import { PrefectureType, TripType } from "@/types";
import { Box } from "@mui/material";
import { LinkImageCard } from "@/components/elements";

interface TripProps {
  trip: TripType;
  prefecture: PrefectureType;
}

const Trip = ({ trip, prefecture }: TripProps) => {
  return (
    <Box>
      <LinkImageCard
        id={trip.ID}
        createdat={trip.CreatedAt.split("T")[0]}
        title={trip.title}
        start={trip.startdate.split("T")[0]}
        end={trip.enddate.split("T")[0]}
        memo={trip.memo}
        src={trip.imagepath}
        spot={prefecture.name}
        href={`trip/${trip.ID}`}
      />
    </Box>
  );
};

export default Trip;
