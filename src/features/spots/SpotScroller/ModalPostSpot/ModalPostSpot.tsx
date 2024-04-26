"use client";

import { ModalButton } from "@/components";
import SnackInfo from "@/components/elements/SnackInfo";
import React, { Dispatch, SetStateAction, useState } from "react";
import PostSpot from "../PostSpot/PostSpot";
import { ColorType, PrefectureType } from "@/types";

interface ModalPostSpotProps {
  tripid: number;
}

const ModalPostSpot = ({ tripid }: ModalPostSpotProps) => {
  const [snack, setSnack] = useState<ColorType>({ color: "" });
  return (
    <>
      <ModalButton text={"スポットを追加"}>
        <PostSpot tripid={tripid} setSnack={setSnack} />
      </ModalButton>
      <SnackInfo snack={snack} setSnack={setSnack} />
    </>
  );
};

export default ModalPostSpot;
