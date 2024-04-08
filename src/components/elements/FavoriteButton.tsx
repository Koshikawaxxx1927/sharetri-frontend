"use client";

import { IconButton, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/auth";

interface FavoriteButtonProps {
  initialIsFavorite: boolean;
  favoriteNumber: number;
  favoriteOnClick: (isFavorite: boolean) => void;
}

const FavoriteButton = ({
  initialIsFavorite,
  favoriteNumber,
  favoriteOnClick,
}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    setIsFavorite(initialIsFavorite);
  }, [initialIsFavorite]);

  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (user) {
      favoriteOnClick(!isFavorite);
      setIsFavorite((isFavorite) => !isFavorite);
    }
  };
  return (
    <>
      {/* {initialIsFavorite ? "true" : "false"} */}
      <IconButton aria-label="add to favorites" onClick={clickHandler}>
        {isFavorite ? (
          <FavoriteIcon sx={{ color: pink[500] }} />
        ) : (
          <FavoriteIcon />
        )}
      </IconButton>
      <Typography variant="body2" color="text.secondary">
        {favoriteNumber}
      </Typography>
    </>
  );
};

export default FavoriteButton;
