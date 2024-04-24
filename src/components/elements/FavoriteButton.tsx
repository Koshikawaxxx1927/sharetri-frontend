"use client";

import { IconButton, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/auth";
import {
  deleteFavoriteById,
  existFavoriteByUidTripId,
  getFavoriteByUidTripId,
  getFavoritesByTripID,
  postFavorite,
} from "@/utils/api";

interface FavoriteButtonProps {
  tripid: string;
}

const FavoriteButton = ({ tripid }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favoriteNumberByTripId, setFavoriteNumberByTripId] =
    useState<number>(0);
  const [user] = useAuthState(auth);
  const userid = user?.uid;

  useEffect(() => {
    fetchFavoriteNumberByTripId(tripid);
  }, []);

  const fetchFavoriteNumberByTripId = async (tripid: string) => {
    const favoritesByTripId = await getFavoritesByTripID(tripid);
    if (favoritesByTripId.length === 0) return;
    setFavoriteNumberByTripId(favoritesByTripId.length);
    if (!user || userid === undefined) return;
    const isExistFavoriteByUidTripId = await existFavoriteByUidTripId(
      userid,
      tripid
    );
    if (!existFavoriteByUidTripId) return;
    setIsFavorite(isExistFavoriteByUidTripId);
  };

  const clickHandler = async () => {
    if (!user || userid === undefined) return;
    if (!isFavorite) {
      const postedFavorite = await postFavorite(userid, tripid);
      if (postedFavorite === undefined) return;
      setFavoriteNumberByTripId((prev) => prev + 1);
    } else {
      const favorite = await getFavoriteByUidTripId(userid, tripid);
      if (favorite === undefined) return;
      const deletedFavorite = await deleteFavoriteById(userid, favorite.ID);
      setFavoriteNumberByTripId((prev) => prev - 1);
    }
    setIsFavorite((isFavorite) => !isFavorite);
  };
  return (
    <>
      <IconButton aria-label="add to favorites" onClick={clickHandler}>
        {isFavorite ? (
          <FavoriteIcon sx={{ color: pink[500] }} />
        ) : (
          <FavoriteIcon />
        )}
      </IconButton>
      <Typography variant="body2" color="text.secondary">
        {favoriteNumberByTripId}
      </Typography>
    </>
  );
};

export default FavoriteButton;
