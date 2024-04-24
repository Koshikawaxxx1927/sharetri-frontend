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
import { postSpot } from "@/utils/api";
import { useSpots, useUpdateSpots } from "@/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/auth";
import { useClose } from "@/components/elements/ModalButton";
import SnackInfo from "@/components/elements/SnackInfo";

interface PostSpotProps {
  tripid: number;
}

const closeButtonStyle = {
  height: 0,
  textAlign: "right",
};

const PostSpot = ({ tripid }: PostSpotProps) => {
  const handleClose = useClose();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpotType>();
  const [user] = useAuthState(auth);
  const spots = useSpots();
  const setSpots = useUpdateSpots();
  const starttimeSort = (a: SpotType, b: SpotType) => {
    return a.starttime > b.starttime ? 1 : -1;
  };

  const submit = async (data: SpotType) => {
    if (user !== undefined && user) {
      try {
        const spot = await postSpot(
          user.uid,
          tripid,
          data.name,
          data.starttime,
          data.endtime,
          data.cost,
          data.memo
        );
        handleSuccess();
        if (!spots.includes(spot)) {
          spots.push(spot);
          spots.sort(starttimeSort);
          setSpots([...spots]);
        }
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
        <OverflowScroll height="70vh">
          <Box sx={closeButtonStyle}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="h5" align="center" sx={{ p: 3 }}>
            旅行を追加
          </Typography>

          <form onSubmit={handleSubmit(submit)}>
            <Stack spacing={1}>
              <TextForm
                label="スポットの名前"
                name="name"
                register={register}
                errors={errors.name?.message}
              />
              <DateTimeForm
                label="開始時間"
                name="starttime"
                register={register}
                errors={errors.starttime?.message}
              />
              <DateTimeForm
                label="終了時間"
                name="endtime"
                register={register}
                errors={errors.endtime?.message}
              />
              <NumberForm
                label="費用"
                name="cost"
                register={register}
                errors={errors.cost?.message}
              />
              <MultiTextForm
                label="メモ"
                name="memo"
                register={register}
                errors={errors.memo?.message}
              />
              <Button type="submit" color="primary" variant="outlined">
                追加
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

export default PostSpot;
