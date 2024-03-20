"use client";

import { PrefectureType, TripType } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import {
  CardContents,
  ImageCard,
  LinkButton,
  ModalButton,
} from "@/components/elements";
import PutTrip from "../PutTrip/PutTrip";
import DeleteTrip from "../DeleteTrip/DeleteTrip";
import { getTripImage } from "@/utils/api";
import { useEffect, useState } from "react";
import PostTripImage from "../PostTripImage/PostTripImage";

interface TripProps {
  trip: TripType;
  prefecture: PrefectureType;
  prefectures: PrefectureType[];
}

const Trip = ({ trip, prefecture, prefectures }: TripProps) => {
  const [src, setSrc] = useState("");
  const favoriteClickHandler = (isFavorite: boolean) => {
    console.log(isFavorite);
  };
  const userFavorite = true;
  const imageFetch = async (id: string) => {
    const _src = await getTripImage(id);
    setSrc(_src);
  };
  useEffect(() => {
    if (trip.imagepath !== "") {
      imageFetch(trip.ID.toString());
    }
  }, [trip.imagepath]);
  return (
    <Box>
      <ImageCard
        // id={trip.ID.toString()}
        title={trip.title}
        createdat={trip.CreatedAt.split("T")[0]}
        src={src}
        memo={trip.memo}
        spot={prefecture.name}
        favorite={userFavorite}
        favoriteOnClick={favoriteClickHandler}
        PostComponent={
          <PostTripImage tripid={trip.ID.toString()}>
            アップロード
          </PostTripImage>
        }
      >
        <CardContents
          id={trip.ID}
          start={trip.startdate}
          end={trip.enddate}
          spot={prefecture.name}
        />
        {/* <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <Box>お気に入り数：</Box>
          </Grid>
        </Grid> */}
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
