"use client";

import { ModalButton } from "@/components";
import SnackInfo from "@/components/elements/SnackInfo";
import React, { useState } from "react";
import PostTrip from "../PostTrip/PostTrip";
import { ColorType, PrefectureType } from "@/types";

interface ModalPostTripProps {
  prefectures: PrefectureType[];
}

const ModalPostTrip = ({ prefectures }: ModalPostTripProps) => {
  const [snack, setSnack] = useState<ColorType>({ color: "" });
  return (
    <>
      <ModalButton text={"旅行を追加"}>
        <PostTrip prefectures={prefectures} setSnack={setSnack} />
      </ModalButton>
      <SnackInfo snack={snack} setSnack={setSnack} />
    </>
  );
};

export default ModalPostTrip;
