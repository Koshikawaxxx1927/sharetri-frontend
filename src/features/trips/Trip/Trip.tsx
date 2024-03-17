"use client";

import { PrefectureType, TripType } from "@/types";
import { Box, Grid, Typography } from "@mui/material";
import {
  CardContents,
  ImageCard,
  LinkButton,
  ModalButton,
} from "@/components/elements";

interface TripProps {
  trip: TripType;
  prefecture: PrefectureType;
}

const Trip = ({ trip, prefecture }: TripProps) => {
  return (
    <Box>
      <ImageCard
        title={trip.title}
        createdat={trip.CreatedAt.split("T")[0]}
        src={trip.imagepath}
        memo={trip.memo}
        spot={prefecture.name}
      >
        <CardContents
          id={trip.ID}
          start={trip.startdate.split("T")[0]}
          end={trip.enddate.split("T")[0]}
          spot={prefecture.name}
        />
        <Grid
          container
          justifyContent="space-around"
          spacing={1}
          sx={{ marginBottom: "5px" }}
        >
          <Grid item xs={3}>
            <ModalButton
              variant="outlined"
              color="error"
              text="削除"
              size="small"
            >
              <Typography>削除しますか</Typography>
            </ModalButton>
          </Grid>
          <Grid item xs={3}>
            <ModalButton
              text="編集"
              variant="outlined"
              size="small"
              color="success"
              sx={{ width: "100%" }}
            >
              <Box>編集します</Box>
            </ModalButton>
          </Grid>
          <Grid item xs={3}>
            <LinkButton
              text="詳細"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
              href="#"
            />
          </Grid>
        </Grid>
      </ImageCard>
    </Box>
  );
};

export default Trip;
