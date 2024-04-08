"use client";

import { Grid } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Spot } from "@/features";
import { useSpots, useUpdateSpots } from "@/context";
import { SpotType } from "@/types";

const SpotScroll = () => {
  const spots = useSpots();
  const setSpots = useUpdateSpots();
  const starttimeSort = (a: SpotType, b: SpotType) => {
    return a.starttime > b.starttime ? 1 : -1;
  };
  useEffect(() => {
    spots.sort(starttimeSort);

    setSpots([...spots]);
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        {spots.map((spot) => (
          <Grid item xs={12} sm={6} key={spot.ID} id={spot.ID}>
            <Spot spot={spot} spotname={"大子町"} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SpotScroll;
