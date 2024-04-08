"use client";

import {
  TextForm,
  ModalButton,
  ButtonElement,
  UserIcon,
} from "@/components/elements";
import { UserType } from "@/types";
import { getUser, putUser } from "@/utils/api";
import { Grid, Paper, Typography, Box, Alert, Snackbar } from "@mui/material";
import React, { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
// import DeleteUser from "../DeleteUser/DeleteUser";
// import PostUserIcon from "../PostUserIcon/PostUserIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/auth";

const PutUser = () => {
  // const loginUser = useLoginUser();
  // const setLoginUser = useUpdateLoginUser();
  // const [open, setOpen] = React.useState(false);
  // const [user] = useAuthState(auth);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<UserType>();
  // const submit = async (data: UserType) => {
  //   const updatedUser = await putUser(
  //     user?.uid,
  //     loginUser?.favoriteTrips,
  //     data.name
  //   );
  //   setLoginUser(updatedUser);
  //   handleAlert();
  // };
  // const fetchUser = async () => {
  //   const _loginUser = await getUser(user?.uid);
  //   setLoginUser(_loginUser);
  // };
  // useLayoutEffect(() => {
  //   fetchUser();
  // }, [user]);
  // const handleAlert = () => {
  //   setOpen(true);
  // };
  // const closeAlert = (event: React.SyntheticEvent | Event, reason?: string) => {
  //   setOpen(false);
  // };
  // return (
  //   <Grid>
  //     <Paper
  //       elevation={3}
  //       sx={{
  //         p: 4,
  //         height: "70vh",
  //         width: "50vh",
  //         m: " 20px auto",
  //       }}
  //     >
  //       <Typography variant={"h5"} sx={{ m: "30px" }}>
  //         アカウント情報の変更
  //       </Typography>
  //       <Box
  //         sx={{
  //           height: "60px",
  //           width: "60px",
  //           margin: "0 auto",
  //           position: "relative",
  //         }}
  //       >
  //         <ModalButton
  //           sx={{
  //             height: "60px",
  //             width: "60px",
  //             borderRadius: "50%",
  //             zIndex: "1",
  //           }}
  //         >
  //           <PostUserIcon>アップロード</PostUserIcon>
  //         </ModalButton>
  //         <Box sx={{ position: "absolute", top: 0, left: 0 }}>
  //           <UserIcon
  //             user={loginUser}
  //             fontsize={60}
  //             // sx={{ position: "absolute", top: 0, left: 0 }}
  //           />
  //         </Box>
  //       </Box>
  //       <form onSubmit={handleSubmit(submit)}>
  //         <TextForm
  //           label="Name"
  //           name="name"
  //           register={register}
  //           errors={errors.name?.message}
  //           value={loginUser?.name}
  //           sx={{ width: "100%", border: "none" }}
  //         />
  //         <Box mt={4}>
  //           <ButtonElement
  //             text="変更する"
  //             sx={{ width: "100%" }}
  //             variant="outlined"
  //             type="submit"
  //           />
  //           <Typography variant="caption">
  //             <ModalButton color="error" text="アカウントを削除">
  //               <DeleteUser />
  //             </ModalButton>
  //           </Typography>
  //         </Box>
  //       </form>
  //     </Paper>
  //     <Snackbar
  //       anchorOrigin={{ vertical: "top", horizontal: "center" }}
  //       open={open}
  //       autoHideDuration={6000}
  //       onClose={closeAlert}
  //     >
  //       <Alert onClose={closeAlert} severity="success">
  //         アカウントを
  //         <br />
  //         更新しました!
  //       </Alert>
  //     </Snackbar>
  //   </Grid>
  // );
};

export default PutUser;
