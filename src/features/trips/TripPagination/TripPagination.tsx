"use client";

import { Typography, Pagination, Grid } from "@mui/material";
import React, { useState } from "react";
import TripComponent from "../Trip/Trip";
import { Prefecture, Trip } from "@/types";

interface TripPaginationProps {
  trips: Trip[];
  prefectures: Prefecture[];
}

const TripPagination = ({ trips, prefectures }: TripPaginationProps) => {
  const lengthPerPage = 12;
  const [page, setPage] = useState(1);
  const [slicedTrips, setSlicedTrips] = useState(trips.slice(0, lengthPerPage));
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setSlicedTrips(
      trips.slice((value - 1) * lengthPerPage, value * lengthPerPage)
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        {slicedTrips.map((trip) => (
          <Grid item xs={6} key={trip.ID}>
            <TripComponent
              trip={trip}
              prefecture={prefectures[Number(trip.prefectureid) - 1]}
            />
          </Grid>
        ))}
      </Grid>
      <Typography>Page: {page}</Typography>
      <Pagination
        count={Math.floor(trips.length / lengthPerPage) + 1}
        page={page}
        onChange={handleChange}
      />
    </>
  );
};

export default TripPagination;
