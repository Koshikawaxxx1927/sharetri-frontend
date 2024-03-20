"use client";

import {
  CardContents,
  ImageCard,
  LinkButton,
  ModalButton,
} from "@/components/elements";
import { SpotType } from "@/types";
import { Box, Grid } from "@mui/material";
import DeleteSpot from "../DeleteSpot/DeleteSpot";
import { useSpots } from "@/context";
import PutSpot from "../PutSpot/PutSpot";
import PostSpotImage from "../../PostSpotImage/PostSpotImage";
import { useEffect, useState } from "react";
import { getSpotImage } from "@/utils/api/spot";

interface SpotProps {
  spot: SpotType;
  spotname: string;
}

const Spot = ({ spot, spotname }: SpotProps) => {
  const [src, setSrc] = useState("");
  const favoriteClickHandler = (isFavorite: boolean) => {
    console.log(isFavorite);
  };
  const userFavorite = true;
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
        title={spot.name}
        createdat={spot.CreatedAt.split("T")[0]}
        memo={spot.memo}
        src={src}
        spot={spotname}
        favorite={userFavorite}
        favoriteOnClick={favoriteClickHandler}
        PostComponent={
          <PostSpotImage spotid={spot.ID.toString()}>
            アップロード
          </PostSpotImage>
        }
      >
        <CardContents
          id={spot.ID}
          start={spot.starttime.split("T")[1]}
          end={spot.endtime.split("T")[1]}
          spot={spot.name}
        />
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
      </ImageCard>
    </Box>
  );
};

export default Spot;
