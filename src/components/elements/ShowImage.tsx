import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import FilterIcon from "@mui/icons-material/Filter";

interface ShowImageProps {
  src: string;
}

const ShowImage = ({ src }: ShowImageProps) => {
  return (
    <Box
      sx={[
        {
          cursor: "pointer",
        },
        { "&:hover": { opacity: "0.8" } },
      ]}
    >
      {src === "" ? (
        <FilterIcon
          sx={{
            height: "100px",
            width: "100px",
            margin: "0 auto",
            display: "block",
          }}
        />
      ) : (
        <Box sx={{ width: "100%", height: "100px", position: "relative" }}>
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

export default ShowImage;
