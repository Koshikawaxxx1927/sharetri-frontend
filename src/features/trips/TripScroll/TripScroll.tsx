"use client";

import { Grid } from "@mui/material";
import { useState } from "react";
import { Trip } from "@/features";
import { PrefectureType, TripType } from "@/types";
import { getTripList } from "@/utils/api";
import { InfiniteScroll, OverflowScroll } from "@/components/elements";

interface TripScrollProps {
  prefectures: PrefectureType[];
}

const TripScroll = ({ prefectures }: TripScrollProps) => {
  const tripsPerPage = 12;

  const [trips, setTrips] = useState<TripType[]>([]);

  const tripsLoader = async (batch: number) => {
    const _trips = await getTripList(batch, tripsPerPage);
    setTrips((trips) => [...trips, ..._trips]);
  };

  return (
    <OverflowScroll height="85vh">
      <Grid container spacing={2}>
        {trips.map((trip) => (
          <Grid item xs={12} sm={6} key={trip.ID}>
            <Trip
              trip={trip}
              prefecture={prefectures[Number(trip.prefectureid) - 1]}
            />
          </Grid>
        ))}
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
