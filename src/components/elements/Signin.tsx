"use client";

import {
  ButtonElement,
  LinkButton,
  PasswordForm,
  TextForm,
} from "@/components/elements";
import { UserRegistrationType } from "@/types";
import { Grid, Paper, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/auth";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistrationType>();
  const submit = async (data: UserRegistrationType) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    localStorage.setItem("jwt", idToken.toString());
    router.push("/");
  };

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
            Sign in
          </Typography>
          <TextForm
            label="Email*"
            name="email"
            register={register}
            errors={errors.email?.message}
            sx={{ width: "100%", border: "none" }}
          />
          <PasswordForm
            label="Password*"
            name="password"
            register={register}
            errors={errors.password?.message}
            sx={{ width: "100%", border: "none" }}
          />
          <Box mt={4}>
            <ButtonElement
              text="ログイン"
              sx={{ width: "100%" }}
              variant="outlined"
              type="submit"
            />
            <Typography variant="caption">
              <LinkButton
                text="アカウントを持っていませんか？"
                href="/signup"
              />
            </Typography>
          </Box>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signin;
