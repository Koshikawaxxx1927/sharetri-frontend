"use client";

import {
  CardContents,
  CardDropDown,
  ImageCard,
  ModalButton,
} from "@/components/elements";
import { SpotType, TripType } from "@/types";
import { Box, Grid } from "@mui/material";
import DeleteSpot from "../DeleteSpot/DeleteSpot";
// import { useTrips, useUpdateTrips } from "@/context";
import PutSpot from "../PutSpot/PutSpot";
import PostSpotImage from "../../PostSpotImage/PostSpotImage";
import { useEffect, useLayoutEffect, useState } from "react";
import { getSpotImage } from "@/utils/api/spot";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { getTrip } from "@/utils/api";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/auth";

interface SpotProps {
  spot: SpotType;
  spotname: string;
}

const Spot = ({ spot, spotname }: SpotProps) => {
  const [src, setSrc] = useState("");
  const [user] = useAuthState(auth);
  const [trip, setTrip] = useState<TripType>();
  const userid = user?.uid;
  // const trips = useTrips();
  // const setTrips = useUpdateTrips();
  // .log("trips", trips);
  const fetchTrip = async () => {
    // if (user !== undefined && user) {
    const _trip = await getTrip(spot.tripid);
    setTrip(_trip);
    // }
  };
  useLayoutEffect(() => {
    fetchTrip();
  }, []);
  const imageFetch = async (id: string) => {
    const _src = await getSpotImage(id);
    setSrc(_src);
  };
  useEffect(() => {
    if (spot.imagepath !== "") {
      imageFetch(spot.ID);
    }
  }, [spot.imagepath]);
  return (
    <Box>
      <>
        {trip !== undefined && (
          <ImageCard
            uid={trip.uid}
            title={spot.name}
            createdat={spot.CreatedAt.split("T")[0]}
            memo={spot.memo}
            src={src}
            spot={spotname}
            PostComponent={
              <PostSpotImage src={src} spot={spot}>
                アップロード
              </PostSpotImage>
            }
          >
            <CardContents
              id={`Spot ID: ${spot.ID}`}
              start={spot.starttime.split("T")[1]}
              end={spot.endtime.split("T")[1]}
              spot={spot.name}
            />
            {userid === trip.uid && (
              <Grid
                container
                justifyContent="space-around"
                spacing={2}
                sx={{ marginBottom: "5px" }}
              >
                <Grid item xs={4}>
                  <ModalButton
                    variant="outlined"
                    color="error"
                    text="削除"
                    size="small"
                  >
                    <DeleteSpot spot={spot} />
                  </ModalButton>
                </Grid>
                <Grid item xs={4}>
                  <ModalButton
                    text="更新"
                    variant="outlined"
                    size="small"
                    color="success"
                    sx={{ width: "100%" }}
                  >
                    <PutSpot spot={spot} />
                  </ModalButton>
                </Grid>
              </Grid>
            )}
          </ImageCard>
        )}
        <CardDropDown text={spot.memo}>
          <IconButton aria-label="share">
            <Link
              href={`https://twitter.com/intent/tweet?text=${spot.memo}&hashtags=Sharetri&url=http://localhost:3000/trip/${spot.tripid}`}
              target="_blank"
            >
              <ShareIcon color="primary" />
            </Link>
          </IconButton>
        </CardDropDown>
      </>
    </Box>
  );
};

export default Spot;
