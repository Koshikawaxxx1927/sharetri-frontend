"use client";

import { auth } from "@/auth";
import { DisplayImage } from "@/components";
import SnackInfo from "@/components/elements/SnackInfo";
import { useSpots, useUpdateSpots } from "@/context";
import { ColorType, SpotType, TripType } from "@/types";
import { getTrip, postSpotImage } from "@/utils/api";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface PostSpotImageProps {
  spot: SpotType;
  src: string;
  children: React.ReactNode;
}

const PostSpotImage = ({ spot, src, children }: PostSpotImageProps) => {
  const spots = useSpots();
  const setdSpots = useUpdateSpots();
  const spotid = spot.ID;
  const [trip, setTrip] = useState<TripType>();
  const fetchTrip = async () => {
    const _trip = await getTrip(spot.tripid);
    setTrip(_trip);
  };
  useEffect(() => {
    fetchTrip();
  }, []);
  const [snack, setSnack] = useState<ColorType>({ color: "" });

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
  const submit = async () => {
    if (file !== undefined && userid !== undefined) {
      try {
        const updatedSpot = await postSpotImage(file, spotid, userid);
        const spot = spots.filter((spot) => spot.ID === spotid)[0];
        const arg = spots.indexOf(spot);
        spots[arg] = updatedSpot;
        setdSpots([...spots]);
        setSnack({ color: "success" });
      } catch (err) {
        setSnack({ color: "error" });
      }
    }
  };
  return (
    <>
      <Box>
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
            <SnackInfo snack={snack} setSnack={setSnack} />
          </>
        )}
      </Box>
    </>
  );
};

export default PostSpotImage;
