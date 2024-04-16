"use client";

import { auth } from "@/auth";
import { DisplayImage } from "@/components/elements";
import { useClose } from "@/components/elements/ModalButton";
import { useSpots, useTrips, useUpdateSpots } from "@/context";
import { SpotType, TripType } from "@/types";
import { getTrip, postSpotImage } from "@/utils/api";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface PostSpotImageProps {
  spot: SpotType;
  src: string;
  children: React.ReactNode;
}

const PostSpotImage = ({ spot, src, children }: PostSpotImageProps) => {
  const handleClose = useClose();
  const spots = useSpots();
  const setdSpots = useUpdateSpots();
  const spotid = spot.ID;
  const trips = useTrips();
  const [trip, setTrip] = useState<TripType>();
  const fetchTrip = async () => {
    const _trip = await getTrip(spot.tripid);
    setTrip(_trip);
  };
  useEffect(() => {
    fetchTrip();
  }, []);

  const [user] = useAuthState(auth);
  const userid = user?.uid;
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
      const updatedSpot = await postSpotImage(file, spotid, userid);
      const spot = spots.filter((spot) => spot.ID === spotid)[0];
      const arg = spots.indexOf(spot);
      spots[arg] = updatedSpot;
      setdSpots([...spots]);
      handleAlert();
    }
  };
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <DisplayImage src={src} />
        {user?.uid === trip?.uid && (
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
      </Box>
    </>
  );
};

export default PostSpotImage;
