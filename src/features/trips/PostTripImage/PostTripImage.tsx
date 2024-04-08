"use client";

import { auth } from "@/auth";
import { DisplayImage } from "@/components/elements";
import { useTrips, useUpdateTrips } from "@/context";
import { TripType } from "@/types";
import { postTripImage } from "@/utils/api";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface PostTripImageProps {
  trip: TripType;
  src: string;
  children: React.ReactNode;
  handleClose?: () => void;
}

const PostTripImage = ({
  trip,
  src = "",
  children,
  handleClose = () => {},
}: PostTripImageProps) => {
  const trips = useTrips();
  const tripid = trip.ID;
  const [user] = useAuthState(auth);
  const userid = user?.uid;
  const setTrips = useUpdateTrips();
  const [file, setFile] = useState<File>();
  const changeUploadFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    setFile(file);
  };
  const [open, setOpen] = React.useState(false);

  const handleAlert = () => {
    setOpen(true);
  };
  const closeAlert = (event: React.SyntheticEvent | Event, reason?: string) => {
    setOpen(false);
  };
  const submit = async () => {
    if (file !== undefined && userid !== undefined) {
      const updatedTrip = await postTripImage(file, tripid, userid);
      const trip = trips.filter((trip) => trip.ID === tripid)[0];
      const arg = trips.indexOf(trip);
      trips[arg] = updatedTrip;
      setTrips([...trips]);
      handleAlert();
    }
  };

  return (
    <>
      <DisplayImage src={src} />
      {trip.uid === userid && (
        <>
          <label htmlFor={`upload-button`}>
            <input
              accept="image/*"
              multiple
              type="file"
              onChange={changeUploadFile}
            />
            <Button
              variant="contained"
              component="span"
              onClick={submit}
              sx={{ margin: "10px auto" }}
            >
              {children}
            </Button>
          </label>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={6000}
            onClose={closeAlert}
          >
            <Alert onClose={closeAlert} severity="success">
              画像を
              <br />
              更新しました!
            </Alert>
          </Snackbar>
        </>
      )}
    </>
  );
};

export default PostTripImage;
