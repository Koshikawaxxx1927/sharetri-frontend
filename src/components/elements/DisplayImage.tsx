import { Box } from "@mui/material";
import React from "react";
import FilterIcon from "@mui/icons-material/Filter";
import Image from "next/image";

interface DisplayImageProps {
  src: string;
}

const DisplayImage = ({ src }: DisplayImageProps) => {
  return (
    <Box
      sx={{ textAlign: "center", position: "relative", marginBottom: "30px" }}
    >
      {src === "" ? (
        <FilterIcon
          sx={{
            height: "100px",
            width: "100px",
            display: "block",
            margin: "0 auto",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "300px",
            marign: "0 auto 20px",
          }}
        >
          <Image
            src={src}
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
            alt="旅行画像"
          />
        </Box>
      )}
    </Box>
  );
};

export default DisplayImage;
