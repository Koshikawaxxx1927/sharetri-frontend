"use client";

import {
  ButtonElement,
  LinkButton,
  PasswordForm,
  TextForm,
} from "@/components/elements";
import { UserRegistrationType } from "@/types";
import { Grid, Paper, Typography, TextField, Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/auth";
import { useRouter } from "next/navigation";
import { postUser } from "@/utils/api/user";

const Signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistrationType>();
  const submit = async (data: UserRegistrationType) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;
    const idToken = await user.getIdToken();
    localStorage.setItem("jwt", idToken.toString());
    postUser(user.uid, data.name);
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
            Sign up
          </Typography>
          <TextForm
            label="Name*"
            name="name"
            register={register}
            errors={errors.name?.message}
            sx={{ width: "100%", border: "none" }}
          />
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
              type="submit"
              text="登録"
              sx={{ width: "100%" }}
              variant="outlined"
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
