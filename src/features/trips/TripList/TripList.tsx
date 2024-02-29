import React from "react";
import { getTripList, getPrefectureList } from "@/utils/api/index";
import TripPagination from "../TripPagination/TripPagination";

const TripList = async () => {
  const tripsPerPage = 12;
  const trips = await getTripList();
  const prefectures = await getPrefectureList();
  return (
    <>
      <TripPagination trips={trips} prefectures={prefectures} />
    </>
  );
};

export default TripList;
