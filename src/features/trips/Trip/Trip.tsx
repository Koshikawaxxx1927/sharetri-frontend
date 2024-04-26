"use client";

import { PrefectureType, TripType } from "@/types";
import { Box, Grid } from "@mui/material";
import {
  CardContents,
  CardDropDown,
  ImageCard,
  LinkButton,
  ModalButton,
} from "@/components";
import DeleteTrip from "../DeleteTrip/DeleteTrip";
import { getTripImage } from "@/utils/api";
import { useEffect, useState } from "react";
import PostTripImage from "../PostTripImage/PostTripImage";
import ShareIcon from "@mui/icons-material/Share";
import { FavoriteButton } from "@/components";
import { IconButton } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { auth } from "@/auth";
import ModalPutTrip from "../ModalPutTrip/ModalPutTrip";

interface TripProps {
  trip: TripType;
  prefecture: PrefectureType;
  prefectures: PrefectureType[];
}

const Trip = ({ trip, prefecture, prefectures }: TripProps) => {
  const [src, setSrc] = useState("");
  const [user] = useAuthState(auth);
  const userid = user?.uid;

  const imageFetch = async (id: string) => {
    const _src = await getTripImage(id);
    setSrc(_src);
  };
  useEffect(() => {
    if (trip.imagepath !== "") {
      imageFetch(trip.ID);
    }
  }, [trip.imagepath]);

  return (
    <Box>
      <ImageCard
        uid={trip.uid}
        title={trip.title}
        createdat={trip.CreatedAt.split("T")[0]}
        src={src}
        memo={trip.memo}
        spot={prefecture.name}
        PostComponent={
          <PostTripImage src={src} trip={trip}>
            アップロード
          </PostTripImage>
        }
      >
        <CardContents
          id={`Trip ID: ${trip.ID}`}
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
          <Grid item xs={3} sx={{ textAlign: "center" }}>
            {userid === trip?.uid && (
              <ModalButton
                variant="outlined"
                color="error"
                text="削除"
                size="small"
                sx={{ width: "10px" }}
              >
                <DeleteTrip trip={trip} />
              </ModalButton>
            )}
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "center" }}>
            {userid === trip?.uid && (
              <ModalPutTrip prefectures={prefectures} trip={trip} />
            )}
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "center" }}>
            <LinkButton
              text="詳細"
              variant="outlined"
              size="small"
              sx={{ width: "10px" }}
              href={`trip/${trip.ID}`}
            />
          </Grid>
        </Grid>

        <CardDropDown text={trip.memo}>
          <FavoriteButton tripid={trip.ID} />
          <IconButton aria-label="share">
            <Link
              href={`https://twitter.com/intent/tweet?text=${trip.memo}&hashtags=Sharetri&url=http://localhost:3000/trip/${trip.ID}`}
              target="_blank"
            >
              <ShareIcon color="primary" />
            </Link>
          </IconButton>
        </CardDropDown>
      </ImageCard>
    </Box>
  );
};

export default Trip;
