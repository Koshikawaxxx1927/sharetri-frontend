import { Box } from "@mui/material";
import React from "react";
import FilterIcon from "@mui/icons-material/Filter";
import Image from "next/image";

interface FilterImageProps {
  src: string;
  filterHeight: string;
  filterWidth: string;
  imageHeight: string;
  imageWidth: string;
}

const FilterImage = ({
  src,
  filterHeight,
  filterWidth,
  imageHeight,
  imageWidth,
}: FilterImageProps) => {
  return (
    <>
      {src === "" ? (
        <FilterIcon
          sx={{
            height: filterHeight,
            width: filterWidth,
            display: "block",
            margin: "0 auto",
          }}
        />
      ) : (
        <Box
          sx={{
            width: imageWidth,
            height: imageHeight,
            marign: "0 auto 20px",
            position: "relative",
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
    </>
  );
};

export default FilterImage;
