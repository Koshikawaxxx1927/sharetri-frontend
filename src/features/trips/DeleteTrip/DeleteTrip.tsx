"use client";

import { Button, Grid, Typography } from "@mui/material";
import { TripType } from "@/types";
import React from "react";
import { useTrips, useUpdateTrips } from "@/context";
import { deleteTrip } from "@/utils/api/trip";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/auth";
import { useClose } from "@/components/elements/ModalButton";

interface DeleteTripProps {
  trip: TripType;
}

const DeleteTrip = ({ trip }: DeleteTripProps) => {
  const handleClose = useClose();
  const trips = useTrips();
  const setTrips = useUpdateTrips();
  const [user] = useAuthState(auth);
  const userid = user?.uid;
  const confirmDelete = async (trip: TripType) => {
    if (userid !== undefined) {
      await deleteTrip(userid, trip.ID);
      const arg = trips.indexOf(trip);
      trips.splice(arg, 1);
      setTrips([...trips]);
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
          <Button onClick={() => confirmDelete(trip)} color="error">
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

export default DeleteTrip;
