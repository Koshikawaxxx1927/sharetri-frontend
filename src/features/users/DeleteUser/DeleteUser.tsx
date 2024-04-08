"use client";

// import { Typography, Grid } from "@mui/material";
// import React from "react";
// import { Button } from "@mui/material";
// // import { useLoginUser, useUpdateLoginUser } from "@/context";
// import { deleteLoginUser } from "@/utils/api/user";
// import { useRouter } from "next/navigation";
// import { deleteUser, getAuth } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "@/auth";

// interface DeleteUserProps {
//   handleClose?: () => void;
// }

// const DeleteUser = ({ handleClose = () => {} }: DeleteUserProps) => {
//   const router = useRouter();
//   const [user] = useAuthState(auth);
//   const deleteHandler = async () => {
//     if (user === undefined) {
//       return;
//     }
//     const deletedUser = await deleteLoginUser(user?.uid);
//     setLoginUser(undefined);
//     const auth = getAuth();
//     const currentUser = auth.currentUser;
//     if (currentUser) {
//       deleteUser(currentUser);
//       localStorage.removeItem("jwt");
//     }
//     router.push("/trips");
//   };
//   return (
//     <>
//       <Typography>削除しますか</Typography>
//       <Grid container sx={{ marginTop: "3px" }}>
//         <Grid item xs={2}></Grid>
//         <Grid item xs={5}>
//           <Button onClick={deleteHandler} color="error">
//             削除する
//           </Button>
//         </Grid>
//         <Grid item xs={5}>
//           <Button onClick={handleClose} color="primary">
//             削除しない
//           </Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default DeleteUser;
