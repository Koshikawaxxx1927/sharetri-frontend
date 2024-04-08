import React from "react";
import { TripList, TripScroll } from "@/features";
import { Container } from "@mui/material";
import { getPrefectureList } from "@/utils/api";

const page = async () => {
  const prefectures = await getPrefectureList();
  return (
    <Container maxWidth="sm">
      <div>
        <TripList>
          <TripScroll prefectures={prefectures} />
        </TripList>
      </div>
    </Container>
  );
};

export default page;
