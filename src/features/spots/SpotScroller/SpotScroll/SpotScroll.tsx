"use client";

import { Grid } from "@mui/material";
import React from "react";
import { Spot } from "@/features";
import { useSpots } from "@/context";

const SpotScroll = () => {
  const spots = useSpots();
  return (
    <>
      <Grid container spacing={2}>
        {spots.map((spot) => (
          <Grid item xs={12} sm={6} key={spot.ID} id={spot.ID.toString()}>
            <Spot spot={spot} spotname={"大子町"} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SpotScroll;
