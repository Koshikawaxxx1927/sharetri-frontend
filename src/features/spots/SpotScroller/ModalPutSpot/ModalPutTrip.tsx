"use client";

import { ModalButton } from "@/components";
import SnackInfo from "@/components/elements/SnackInfo";
import React, { Dispatch, SetStateAction, useState } from "react";
// import PutSpot from "../PutSpot/PutSpot";
import { ColorType, PrefectureType, SpotType } from "@/types";
import { PutSpot } from "@/features";

interface ModalPutSpotProps {
  spot: SpotType;
}

const ModalPutSpot = ({ spot }: ModalPutSpotProps) => {
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
        <PutSpot spot={spot} setSnack={setSnack} />
      </ModalButton>
      <SnackInfo snack={snack} setSnack={setSnack} />
    </>
  );
};

export default ModalPutSpot;
