"use client";

import { ButtonElement, LinkButton, TextForm } from "@/components/elements";
import { UserRegistrationType } from "@/types";
import { Grid, Paper, Typography, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistrationType>();
  const submit = async (data: UserRegistrationType) => {};

  return (
    <Grid>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: "70vh",
          width: "50vh",
          m: " 20px auto",
        }}
      >
        <form onSubmit={handleSubmit(submit)}>
          <Typography variant={"h5"} sx={{ m: "30px" }}>
            Sign up
          </Typography>
          <TextForm
            label="Email*"
            name="email"
            register={register}
            errors={errors.email?.message}
            sx={{ width: "100%", border: "none" }}
          />
          <TextForm
            label="Password*"
            name="password"
            register={register}
            errors={errors.password?.message}
            sx={{ width: "100%", border: "none" }}
          />
          <Box mt={4}>
            <ButtonElement
              text="登録"
              sx={{ width: "100%" }}
              variant="contained"
            />
            <Typography variant="caption">
              <LinkButton text="アカウントをお持ちですか？" href="/signin" />
            </Typography>
          </Box>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
