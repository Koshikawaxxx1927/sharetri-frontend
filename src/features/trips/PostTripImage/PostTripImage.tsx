"use client";

import { auth } from "@/auth";
import { DisplayImage } from "@/components";
import SnackInfo from "@/components/elements/SnackInfo";
import { useTrips, useUpdateTrips } from "@/context";
import { TripType } from "@/types";
import { postTripImage } from "@/utils/api";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface PostTripImageProps {
  trip: TripType;
  src: string;
  children: React.ReactNode;
}

const PostTripImage = ({ trip, src = "", children }: PostTripImageProps) => {
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
  const [successOpen, setSuccessOpen] = React.useState(false);

  const handleSuccess = () => {
    setSuccessOpen(true);
  };
  const closeSuccess = () => {
    setSuccessOpen(false);
  };

  const [errorOpen, setErrorOpen] = React.useState(false);

  const handleError = () => {
    setErrorOpen(true);
  };
  const closeError = () => {
    setErrorOpen(false);
  };
  const submit = async () => {
    if (file !== undefined && userid !== undefined) {
      try {
        const updatedTrip = await postTripImage(file, tripid, userid);
        const trip = trips.filter((trip) => trip.ID === tripid)[0];
        const arg = trips.indexOf(trip);
        trips[arg] = updatedTrip;
        setTrips([...trips]);
        handleSuccess();
      } catch (err) {
        handleError();
      }
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
          <SnackInfo
            successOpen={successOpen}
            closeSuccess={closeSuccess}
            errorOpen={errorOpen}
            closeError={closeError}
          />
        </>
      )}
    </>
  );
};

export default PostTripImage;
