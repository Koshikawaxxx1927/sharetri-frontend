import AccordionText from "@/components/elements/AccordionText";
import { Prefecture, Trip } from "@/types";
import Image from "next/image";
import { Box, backdropClasses } from "@mui/material";
import { ImageCard } from "@/components/elements";

interface TripProps {
  trip: Trip;
  prefecture: Prefecture;
}
interface PrefectureProps {}

const Trip = ({ trip, prefecture }: TripProps) => {
  return (
    <Box
      sx={[
        { borderRadius: "10px", cursor: "pointer" },
        { "&:hover": { opacity: "0.8" } },
      ]}
    >
      {trip.ID}
      <ImageCard
        title={trip.title}
        startdate={trip.startdate.split("T")[0]}
        enddate={trip.enddate.split("T")[0]}
        memo={trip.memo}
      />
    </Box>
  );
};

export default Trip;
