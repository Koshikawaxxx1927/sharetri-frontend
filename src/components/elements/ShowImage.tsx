import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import FilterIcon from "@mui/icons-material/Filter";
import { ModalButton } from ".";
import { PostTripImage } from "@/features";

interface ShowImageProps {
  src: string;
  children: React.ReactElement;
}

const ShowImage = ({ src, children }: ShowImageProps) => {
  return (
    <Box
      sx={[
        {
          cursor: "pointer",
          position: "relative",
          maxWidth: 345,
          height: "100px",
        },
        { "&:hover": { opacity: "0.8" } },
      ]}
    >
      <ModalButton
        text=""
        sx={{
          width: "100%",
          height: "100px",
          zIndex: "3",
        }}
      >
        {children}
      </ModalButton>
      <Box
        sx={{
          height: "100px",
          width: "100px",
          top: "0",
          left: "50%",
          transform: "translate(-50%, 0)",
          position: "absolute",
        }}
      >
        {src === "" ? (
          <FilterIcon
            sx={{
              height: "100px",
              width: "100px",
              display: "block",
              zIndex: "1",
            }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100px",
              zIndex: "1",
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
    </Box>
  );
};

export default ShowImage;
