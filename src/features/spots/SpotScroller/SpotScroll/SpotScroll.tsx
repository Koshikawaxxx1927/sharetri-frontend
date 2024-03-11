"use client";

import { Box, Grid } from "@mui/material";
import React, { SetStateAction, useRef } from "react";
import { Spot } from "@/features";
import { SpotType } from "@/types";
import { useIntersectionObserver } from "@/hooks";

interface SpotScrollProps {
  spots: SpotType[];
  spotsPerPage: number;
  batch: number;
  setBatch: (value: SetStateAction<number>) => void;
}

const SpotScroll = ({
  spots,
  spotsPerPage,
  batch,
  setBatch,
}: SpotScrollProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const updateBatch = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        setBatch((batch) => batch + spotsPerPage);
      }
    });
  };
  // カスタムフックを呼ぶ
  useIntersectionObserver([ref], updateBatch);
  return (
    <Box>
      <Grid container spacing={2}>
        {spots.map((spot) => (
          <Grid item xs={12} sm={6} key={spot.ID}>
            <Spot spot={spot} spotname={"大子町"} />
          </Grid>
        ))}
      </Grid>
      {spots.length === batch + spotsPerPage && <Box ref={ref}></Box>}
    </Box>
  );
};

export default SpotScroll;
