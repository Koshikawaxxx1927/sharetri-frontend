"use client";

import { PrefectureType, TripType } from "@/types";
import { Box, Grid } from "@mui/material";
import {
  CardContents,
  CardDropDown,
  ImageCard,
  LinkButton,
  ModalButton,
} from "@/components/elements";
import PutTrip from "../PutTrip/PutTrip";
import DeleteTrip from "../DeleteTrip/DeleteTrip";
import {
  deleteFavoriteById,
  getFavoriteByUidTripId,
  getFavoritesByTripID,
  getFavoritesByUid,
  getTripImage,
  postFavorite,
} from "@/utils/api";
import { useEffect, useState } from "react";
import PostTripImage from "../PostTripImage/PostTripImage";
import ShareIcon from "@mui/icons-material/Share";
import { FavoriteButton } from "@/components/elements";
import { IconButton } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { auth } from "@/auth";

interface TripProps {
  trip: TripType;
  prefecture: PrefectureType;
  prefectures: PrefectureType[];
}

const Trip = ({ trip, prefecture, prefectures }: TripProps) => {
  const [src, setSrc] = useState("");
  const [user] = useAuthState(auth);
  const userid = user?.uid;
  const [favoriteNumberByTripId, setFavoriteNumberByTripId] =
    useState<number>(0);
  const [initialIsFavorite, setInitialIsFavorite] = useState(false);

  const imageFetch = async (id: string) => {
    const _src = await getTripImage(id);
    setSrc(_src);
  };
  useEffect(() => {
    if (trip.imagepath !== "") {
      imageFetch(trip.ID);
    }
  }, [trip.imagepath]);

  const fetchFavoriteNumberByTripId = async (tripid: string) => {
    try {
      const favoritesById = await getFavoritesByTripID(tripid);
      setFavoriteNumberByTripId(favoritesById.length);
    } catch (err) {
      // Not Found
    }
    if (user && userid !== undefined) {
      try {
        const favoriteByUidTripId = await getFavoriteByUidTripId(
          userid,
          tripid
        );
        setInitialIsFavorite(favoriteByUidTripId !== undefined);
      } catch (err) {
        // Not Found
      }
    }
  };

  useEffect(() => {
    fetchFavoriteNumberByTripId(trip.ID);
  }, []);
  const favoriteClickHandler = async (isFavorite: boolean) => {
    if (userid === undefined) return;
    if (isFavorite) {
      //
      const postedFavorite = await postFavorite(userid, trip.ID);
      setFavoriteNumberByTripId((prev) => prev + 1);
    } else {
      // const favorites = await getFavoritesByUid(userid);
      const favorite = await getFavoriteByUidTripId(userid, trip.ID);
      const deletedFavorite = await deleteFavoriteById(userid, favorite.ID);
      setFavoriteNumberByTripId((prev) => prev - 1);
    }
  };
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
          <Grid item xs={3}>
            {userid === trip?.uid && (
              <ModalButton
                variant="outlined"
                color="error"
                text="削除"
                size="small"
              >
                <DeleteTrip trip={trip} />
              </ModalButton>
            )}
          </Grid>
          <Grid item xs={3}>
            {userid === trip?.uid && (
              <ModalButton
                text="更新"
                variant="outlined"
                size="small"
                color="success"
                sx={{ width: "100%" }}
              >
                <PutTrip prefectures={prefectures} trip={trip} />
              </ModalButton>
            )}
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
      <CardDropDown text={trip.memo}>
        <FavoriteButton
          initialIsFavorite={initialIsFavorite}
          favoriteNumber={favoriteNumberByTripId}
          favoriteOnClick={favoriteClickHandler}
        />
        <IconButton aria-label="share">
          <Link
            href={`https://twitter.com/intent/tweet?text=${trip.memo}&hashtags=Sharetri&url=http://localhost:3000/trip/${trip.ID}`}
            target="_blank"
          >
            <ShareIcon color="primary" />
          </Link>
        </IconButton>
      </CardDropDown>
    </Box>
  );
};

export default Trip;
