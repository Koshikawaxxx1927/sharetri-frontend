"use client";

import {
  CardContents,
  CardDropDown,
  ImageCard,
  LinkButton,
  ModalButton,
} from "@/components/elements";
import { SpotType } from "@/types";
import { Box, Grid } from "@mui/material";
import DeleteSpot from "../DeleteSpot/DeleteSpot";
import { useAuthContext, useSpots, useTrips } from "@/context";
import PutSpot from "../PutSpot/PutSpot";
import PostSpotImage from "../../PostSpotImage/PostSpotImage";
import { useEffect, useState } from "react";
import { getSpotImage } from "@/utils/api/spot";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";

interface SpotProps {
  spot: SpotType;
  spotname: string;
}

const Spot = ({ spot, spotname }: SpotProps) => {
  const [src, setSrc] = useState("");
  const { user } = useAuthContext();
  const userid = user?.uid.toString();
  const trips = useTrips();
  const trip = trips.filter((trip) => trip.ID.toString() === spot.tripid)[0];
  const imageFetch = async (id: string) => {
    const _src = await getSpotImage(id);
    setSrc(_src);
  };
  useEffect(() => {
    if (spot.imagepath !== "") {
      imageFetch(spot.ID.toString());
    }
  }, [spot.imagepath]);
  return (
    <Box>
      <ImageCard
        uid={trip?.uid}
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
        {userid === trip?.uid && (
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
      <CardDropDown text={spot.memo}>
        {/* <FavoriteButton /> */}
        <IconButton aria-label="share">
          <ShareIcon color="primary" />
        </IconButton>
      </CardDropDown>
    </Box>
  );
};

export default Spot;
