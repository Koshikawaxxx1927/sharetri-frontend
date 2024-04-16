"use client";

import { Button, Grid, Typography } from "@mui/material";

import React from "react";
import { useSpots, useUpdateSpots } from "@/context";
import { deleteSpot } from "@/utils/api/spot";
import { SpotType } from "@/types";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/auth";
import { useClose } from "@/components/elements/ModalButton";

interface DeleteSpotProps {
  spot: SpotType;
}

const closeButtonStyle = {
  height: 0,
  textAlign: "right",
};

const DeleteSpot = ({ spot }: DeleteSpotProps) => {
  const handleClose = useClose();
  const spots = useSpots();
  const setSpots = useUpdateSpots();
  const [user] = useAuthState(auth);
  const userid = user?.uid;

  const confirmDelete = async (spot: SpotType) => {
    if (user) {
      await deleteSpot(user.uid, spot);
      const arg = spots.indexOf(spot);
      spots.splice(arg, 1);
      setSpots([...spots]);
      handleAlert();
      handleClose();
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleAlert = () => {
    setOpen(true);
  };

  return (
    <>
      <Typography>削除しますか</Typography>
      <Grid container sx={{ marginTop: "3px" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <Button onClick={() => confirmDelete(spot)} color="error">
            削除する
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button onClick={handleClose} color="primary">
            削除しない
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default DeleteSpot;
