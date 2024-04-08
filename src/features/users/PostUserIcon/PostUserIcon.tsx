"use client";

// import React, { useState } from "react";
// import { Alert, Box, Button, Snackbar } from "@mui/material";
// import { postUserIcon } from "@/utils/api";
// import { useAuthContext } from "@/context";

// interface PostUserIconProps {
//   children: React.ReactNode;
//   handleClose?: () => void;
// }

// const PostUserIcon = ({ children, handleClose }: PostUserIconProps) => {
//   // const loginUser = useLoginUser();
//   // const setLoginUser = useUpdateLoginUser();

//   const [file, setFile] = useState<File>();
//   const changeUploadFile = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const files = event.currentTarget.files;
//     if (!files || files?.length === 0) return;
//     const file = files[0];
//     setFile(file);
//   };

//   const [open, setOpen] = React.useState(false);

//   const handleAlert = () => {
//     setOpen(true);
//   };
//   const closeAlert = (event: React.SyntheticEvent | Event, reason?: string) => {
//     setOpen(false);
//   };
//   const submit = async () => {
//     const updatedLoginUser = await postUserIcon(file, loginUser?.uid);
//     // const spot = spots.filter((spot) => spot.id === spotid)[0];
//     // const arg = spots.indexOf(spot);
//     // spots[arg] = updatedSpot;
//     // setdSpots([...spots]);
//     setLoginUser(updatedLoginUser);
//     handleAlert();
//   };
//   return (
//     <>
//       <Box sx={{ textAlign: "center" }}>
//         {/* <DisplayImage src={src} />
//         {userid === trip?.uid && ( */}
//         <>
//           <label htmlFor={`upload-button`}>
//             <input
//               accept="image/*"
//               multiple
//               type="file"
//               onChange={changeUploadFile}
//             />
//             <Button
//               variant="contained"
//               component="span"
//               onClick={submit}
//               sx={{ margin: "10px auto" }}
//             >
//               {children}
//             </Button>
//           </label>
//           <Snackbar
//             anchorOrigin={{ vertical: "top", horizontal: "center" }}
//             open={open}
//             autoHideDuration={6000}
//             onClose={closeAlert}
//           >
//             <Alert onClose={closeAlert} severity="success">
//               アイコンを
//               <br />
//               更新しました!
//             </Alert>
//           </Snackbar>
//         </>
//         {/* )} */}
//       </Box>
//     </>
//   );
// };

// export default PostUserIcon;
