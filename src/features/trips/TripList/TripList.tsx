// "use client";
import { getPrefectureList } from "@/utils/api";
import { PostTrip } from "@/features";
import { Box, Grid } from "@mui/material";
import { ModalButton } from "@/components";
import { useState } from "react";
import SnackInfo from "@/components/elements/SnackInfo";
import { ColorType } from "@/types";
import ModalTripPost from "../ModalPostTrip/ModalPostTrip";
import ModalPostTrip from "../ModalPostTrip/ModalPostTrip";

interface TripListProps {
  children: React.ReactNode;
}

const TripList = async ({ children }: TripListProps) => {
  const prefectures = await getPrefectureList();

  return (
    <Box>
      {children}
      <Box sx={{ margin: "20px" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item xs={12}>
            <ModalPostTrip prefectures={prefectures} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TripList;
