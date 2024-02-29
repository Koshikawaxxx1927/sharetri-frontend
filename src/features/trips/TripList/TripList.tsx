import React from "react";
import axios from "axios";
import { getTripList, getPrefectureList } from "@/utils/api/index";
import Trip from "@/features/trips/Trip/Trip";
import Pagination from "@/components/elements/Pagination";

const TripList = async () => {
  const trips = await getTripList();
  const prefectures = await getPrefectureList();
  return (
    <div className="w-4/5 mx-auto">
      <ul className="list-none w-full md:flex flex-wrap md:justify-between">
        {trips.map((trip) => (
          <Trip
            key={trip.ID}
            trip={trip}
            prefecture={prefectures[Number(trip.prefectureid) - 1]}
          />
        ))}
      </ul>
      <Pagination />
    </div>
  );
};

export default TripList;
