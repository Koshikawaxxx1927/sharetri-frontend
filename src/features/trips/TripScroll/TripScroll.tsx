"use client";

import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Trip } from "@/features";
import { PrefectureType, TripType } from "@/types";
import { getTripList } from "@/utils/api";
import { useIntersectionObserver } from "@/hooks";

interface TripScrollProps {
  prefectures: PrefectureType[];
}

const TripScroll = ({ prefectures }: TripScrollProps) => {
  const tripsPerPage = 12;

  const [trips, setTrips] = useState<TripType[]>([]);
  const [batch, setBatch] = useState<number>(0);

  const ref = useRef<HTMLHeadingElement>(null);

  const showElements = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        setBatch((batch) => batch + tripsPerPage);
      }
    });
  };
  // カスタムフックを呼ぶ
  useIntersectionObserver([ref], showElements);
  const tripsLoader = async (batch: number) => {
    const _trips = await getTripList(batch, tripsPerPage);
    setTrips((trips) => [...trips, ..._trips]);
  };
  useEffect(() => {
    tripsLoader(batch);
  }, [batch]);
  return (
    <>
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
      {trips.length === batch + tripsPerPage && <div ref={ref}></div>}
    </>
  );
};

export default TripScroll;
