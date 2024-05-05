import { Box } from "@mui/material";
import React, { JSXElementConstructor } from "react";
import { FilterImage, ModalButton } from "..";

interface ShowImageProps {
  src: string;
  // children?: React.ReactElement<any, string | JSXElementConstructor<any>>;
  children: React.ReactNode;
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
        <FilterImage
          src={src}
          filterHeight="100px"
          filterWidth="100px"
          imageHeight="100%"
          imageWidth="100px"
        />
      </Box>
    </Box>
  );
};

export default ShowImage;
