"use client";

import { Grid } from "@mui/material";
import { Trip } from "@/features";
import { PrefectureType } from "@/types";
import { getTripList } from "@/utils/api";
import { InfiniteScroll, OverflowScroll } from "@/components/elements";
import { useTrips, useUpdateTrips } from "@/context";
import { useEffect, useLayoutEffect } from "react";

interface TripScrollProps {
  prefectures: PrefectureType[];
}

const TripScroll = ({ prefectures }: TripScrollProps) => {
  const tripsPerPage = 12;
  const trips = useTrips();
  const setTrips = useUpdateTrips();

  useLayoutEffect(() => {
    setTrips([]);
  }, []);

  const tripsLoader = async (batch: number) => {
    const _trips = await getTripList(batch, tripsPerPage);
    const tripsArray = [...trips, ..._trips];
    const tripsIDs = trips.map((trip) => trip.ID);
    const filteredTrips = tripsArray.filter(
      (trip) => !tripsIDs.includes(trip.ID)
    );
    setTrips([...trips, ...filteredTrips]);
  };
  return (
    <OverflowScroll height="75vh">
      <Grid container spacing={2}>
        {trips.map((trip) => {
          return (
            <Grid item xs={12} sm={6} key={trip.ID}>
              <Trip
                trip={trip}
                prefecture={prefectures[Number(trip.prefectureid) - 1]}
                prefectures={prefectures}
              />
            </Grid>
          );
        })}
      </Grid>
      <InfiniteScroll
        array={trips}
        arrayPerPage={tripsPerPage}
        loader={tripsLoader}
      />
    </OverflowScroll>
  );
};

export default TripScroll;
