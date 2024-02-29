import React from "react";
import TripList from "@/features/trips/TripList/TripList";
import { useRouter } from "next/router";

const page = () => {
  // const router = useRouter();
  // const page = router.query;
  // console.log(page);
  return <TripList />;
};

export default page;
