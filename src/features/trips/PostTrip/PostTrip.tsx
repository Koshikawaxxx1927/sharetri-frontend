"use client";

import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
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
import { PrefectureType, TripType } from "@/types";
import { postTrip } from "@/utils/api";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTrips, useUpdateTrips } from "@/context";
import { auth } from "@/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useClose } from "@/components/elements/ModalButton";
import SnackInfo from "@/components/elements/SnackInfo";

interface PostTripProps {
  prefectures: PrefectureType[];
}

const closeButtonStyle = {
  height: 0,
  textAlign: "right",
};

const PostTrip = ({ prefectures }: PostTripProps) => {
  const handleClose = useClose();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TripType>();
  const [user] = useAuthState(auth);

  const trips = useTrips();
  const setTrips = useUpdateTrips();

  const submit = async (data: TripType) => {
    if (user) {
      try {
        const trip = await postTrip(
          user.uid,
          data.title,
          data.startdate,
          data.enddate,
          data.prefectureid,
          data.memo,
          Boolean(data.ispublic)
        );
        handleSuccess();

        if (!trips.includes(trip)) {
          trips.push(trip);
          setTrips([...trips]);
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
        <OverflowScroll height="75vh">
          <Box sx={closeButtonStyle}>
            <IconButton
              onClick={() => {
                handleClose();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="h5" align="center" sx={{ p: 3 }}>
            旅行を追加
          </Typography>

          <form onSubmit={handleSubmit(submit)}>
            <Stack spacing={1}>
              <TextForm
                label="タイトル"
                name="title"
                register={register}
                errors={errors.title?.message}
              />
              <DateForm
                label="開始日"
                name="startdate"
                register={register}
                errors={errors.startdate?.message}
              />
              <DateForm
                label="終了日"
                name="enddate"
                register={register}
                errors={errors.enddate?.message}
              />
              <PulldownForm
                label="旅行先"
                name="prefectureid"
                register={register}
                errors={errors.prefectureid?.message}
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

export default PostTrip;
