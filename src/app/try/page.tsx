import { Box, CircularProgress } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CircularProgress
        size={120}
        sx={{
          margin: "auto",
          display: "inline-block",
        }}
      />
    </Box>
  );
};

export default page;
