"use client";

import { ModalButton } from "@/components";
import SnackInfo from "@/components/elements/SnackInfo";
import React, { useState } from "react";
import { ColorType, PrefectureType, TripType } from "@/types";
import { PutTrip } from "@/features";

interface ModalPutTripProps {
  prefectures: PrefectureType[];
  trip: TripType;
}

const ModalPutTrip = ({ prefectures, trip }: ModalPutTripProps) => {
  const [snack, setSnack] = useState<ColorType>({ color: "" });
  return (
    <>
      <ModalButton
        text="更新"
        variant="outlined"
        size="small"
        color="success"
        sx={{ width: "10px" }}
      >
        <PutTrip prefectures={prefectures} trip={trip} setSnack={setSnack} />
      </ModalButton>
      <SnackInfo snack={snack} setSnack={setSnack} />
    </>
  );
};

export default ModalPutTrip;
