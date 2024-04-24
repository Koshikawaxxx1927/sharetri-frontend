"use client";

import { useForm } from "react-hook-form";
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import {
  DateTimeForm,
  MultiTextForm,
  NumberForm,
  OverflowScroll,
  TextForm,
} from "@/components";
import { SpotType } from "@/types";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { putSpot } from "@/utils/api";
import { useSpots, useUpdateSpots } from "@/context";
import { usePathname } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/auth";
import { useClose } from "@/components/elements/ModalButton";
import SnackInfo from "@/components/elements/SnackInfo";

interface PutSpotProps {
  spot: SpotType;
}

const closeButtonStyle = {
  height: 0,
  textAlign: "right",
};

const PutSpot = ({ spot }: PutSpotProps) => {
  const handleClose = useClose();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpotType>();
  const [user] = useAuthState(auth);
  const userid = user?.uid;
  const path = usePathname();
  const tripid = path.split("/").pop();

  const spots = useSpots();
  const setSpots = useUpdateSpots();

  const submit = async (data: SpotType) => {
    if (userid !== undefined && tripid !== undefined) {
      try {
        const updatedSpot = await putSpot(
          userid,
          tripid,
          spot.ID,
          data.name,
          data.starttime,
          data.endtime,
          data.cost,
          data.memo
        );
        const arg = spots.indexOf(spot);
        spots[arg] = updatedSpot;
        setSpots([...spots]);
        handleSuccess();
      } catch (err) {
        handleError();
      }
    }
  };

  const [successOpen, setSuccessOpen] = React.useState(false);
  const handleSuccess = () => {
    setSuccessOpen(true);
  };
  const closeSuccess = () => {
    setSuccessOpen(false);
  };

  const [errorOpen, setErrorOpen] = React.useState(false);

  const handleError = () => {
    setErrorOpen(true);
  };
  const closeError = () => {
    setErrorOpen(false);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <OverflowScroll height="75vh">
          <Box sx={closeButtonStyle}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="h5" align="center" sx={{ p: 3 }}>
            スポットを更新
          </Typography>

          <form onSubmit={handleSubmit(submit)}>
            <Stack spacing={1}>
              <TextForm
                label="スポットの名前"
                name="name"
                register={register}
                errors={errors.name?.message}
                value={spot.name}
              />
              <DateTimeForm
                label="開始時間"
                name="starttime"
                register={register}
                errors={errors.starttime?.message}
                value={spot.starttime}
              />
              <DateTimeForm
                label="終了時間"
                name="endtime"
                register={register}
                errors={errors.endtime?.message}
                value={spot.endtime}
              />
              <NumberForm
                label="費用"
                name="cost"
                register={register}
                errors={errors.cost?.message}
                value={spot.cost}
              />
              <MultiTextForm
                label="メモ"
                name="memo"
                register={register}
                errors={errors.memo?.message}
                value={spot.memo}
              />
              <Button type="submit" color="primary" variant="outlined">
                更新
              </Button>
            </Stack>
          </form>
        </OverflowScroll>
      </Container>
      <SnackInfo
        successOpen={successOpen}
        closeSuccess={closeSuccess}
        errorOpen={errorOpen}
        closeError={closeError}
      />
    </>
  );
};

export default PutSpot;
