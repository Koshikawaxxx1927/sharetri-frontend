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
import { useAuthContext } from "@/context";

interface TripProps {
  trip: TripType;
  prefecture: PrefectureType;
  prefectures: PrefectureType[];
}

const Trip = ({ trip, prefecture, prefectures }: TripProps) => {
  const [src, setSrc] = useState("");
  const { user } = useAuthContext();
  const userid = user?.uid.toString();
  const [favoriteNumberByTripId, setFavoriteNumberByTripId] =
    useState<number>(0);
  const [initialIsFavorite, setInitialIsFavorite] = useState(false);

  const imageFetch = async (id: string) => {
    const _src = await getTripImage(id);
    setSrc(_src);
  };
  useEffect(() => {
    if (trip.imagepath !== "") {
      imageFetch(trip.ID.toString());
    }
  }, [trip.imagepath]);

  const fetchFavoriteNumberByTripId = async (tripid: string) => {
    const favoritesById = await getFavoritesByTripID(tripid);
    setFavoriteNumberByTripId(favoritesById.length);
    if (user) {
      const favoritesByUid = await getFavoritesByUid(userid);
      const favoriteByUidTripId = favoritesByUid.filter(
        (fav) => fav.tripid === trip.ID.toString()
      );
      setInitialIsFavorite(favoriteByUidTripId.length !== 0);
    }
  };

  useEffect(() => {
    fetchFavoriteNumberByTripId(trip.ID.toString());
  }, []);
  const favoriteClickHandler = async (isFavorite: boolean) => {
    if (isFavorite) {
      const postedFavorite = await postFavorite(
        userid?.toString(),
        trip.ID.toString()
      );
      setFavoriteNumberByTripId((prev) => prev + 1);
    } else {
      const favorites = await getFavoritesByUid(userid);
      const favorite = favorites.filter(
        (fav) => fav.tripid === trip.ID.toString()
      )[0];
      const deletedFavorite = await deleteFavoriteById(favorite.ID.toString());
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
          <ShareIcon color="primary" />
        </IconButton>
      </CardDropDown>
    </Box>
  );
};

export default Trip;
