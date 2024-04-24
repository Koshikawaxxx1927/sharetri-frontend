import { Box } from "@mui/material";
import React from "react";
import { FilterImage } from "@/components";

interface DisplayImageProps {
  src: string;
}

const DisplayImage = ({ src }: DisplayImageProps) => {
  return (
    <Box
      sx={{ textAlign: "center", position: "relative", marginBottom: "30px" }}
    >
      <FilterImage
        src={src}
        filterHeight="100px"
        filterWidth="100px"
        imageHeight="300px"
        imageWidth="100%"
      />
    </Box>
  );
};

export default DisplayImage;
