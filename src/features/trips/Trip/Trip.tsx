"use client";

import { PrefectureType, TripType } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import {
  CardContents,
  ImageCard,
  LinkButton,
  ModalButton,
} from "@/components/elements";
import PutTrip from "../PutTrip.tsx/PutTrip";
import DeleteTrip from "../DeleteTrip/DeleteTrip";

interface TripProps {
  trip: TripType;
  prefecture: PrefectureType;
  prefectures: PrefectureType[];
}

const Trip = ({ trip, prefecture, prefectures }: TripProps) => {
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
          start={trip.startdate}
          end={trip.enddate}
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
              <DeleteTrip trip={trip} />
            </ModalButton>
          </Grid>
          <Grid item xs={3}>
            <ModalButton
              text="更新"
              variant="outlined"
              size="small"
              color="success"
              sx={{ width: "100%" }}
            >
              <PutTrip prefectures={prefectures} trip={trip} />
            </ModalButton>
          </Grid>
          <Grid item xs={3}>
            <LinkButton
              text="詳細"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
              href={`trip/${trip.ID}`}
            />
          </Grid>
        </Grid>
      </ImageCard>
    </Box>
  );
};

export default Trip;
