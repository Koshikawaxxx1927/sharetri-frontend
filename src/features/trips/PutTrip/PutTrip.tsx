"use client";

import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import {
  DateForm,
  MultiTextForm,
  OverflowScroll,
  PulldownForm,
  TextForm,
} from "@/components";
import { useForm } from "react-hook-form";
import { PrefectureType, TripType } from "@/types";
import { putTrip } from "@/utils/api";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTrips, useUpdateTrips } from "@/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/auth";
import { useClose } from "@/components/elements/ModalButton";
import SnackInfo from "@/components/elements/SnackInfo";

interface PutTripProps {
  prefectures: PrefectureType[];
  trip: TripType;
}

const closeButtonStyle = {
  height: 0,
  textAlign: "right",
};

const PutTrip = ({ prefectures, trip }: PutTripProps) => {
  const handleClose = useClose();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TripType>();

  const trips = useTrips();
  const setTrips = useUpdateTrips();
  const [user] = useAuthState(auth);
  const userid = user?.uid;
  const submit = async (data: TripType) => {
    if (userid !== undefined) {
      try {
        const updatedTrip = await putTrip(
          userid,
          trip.ID,
          data.title,
          data.startdate,
          data.enddate,
          data.prefectureid,
          data.memo,
          Boolean(data.ispublic),
          trip.favorite
        );
        const arg = trips.indexOf(trip);
        trips[arg] = updatedTrip;
        setTrips([...trips]);
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
            旅行を更新
          </Typography>

          <form onSubmit={handleSubmit(submit)}>
            <Stack spacing={1}>
              <TextForm
                label="タイトル"
                name="title"
                register={register}
                errors={errors.title?.message}
                value={trip.title}
              />
              <DateForm
                label="開始日"
                name="startdate"
                register={register}
                errors={errors.startdate?.message}
                value={trip.startdate}
              />
              <DateForm
                label="終了日"
                name="enddate"
                register={register}
                errors={errors.enddate?.message}
                value={trip.enddate}
              />
              <PulldownForm
                label="旅行先"
                name="prefectureid"
                register={register}
                errors={errors.prefectureid?.message}
                value={trip.prefectureid}
              >
                {prefectures.map((prefecture) => (
                  <MenuItem key={prefecture.ID} value={prefecture.ID}>
                    {prefecture.name}
                  </MenuItem>
                ))}
              </PulldownForm>
              <MultiTextForm
                label="メモ"
                name="memo"
                register={register}
                errors={errors.memo?.message}
                value={trip.memo}
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

export default PutTrip;
