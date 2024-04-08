"use client";

import { Box, SxProps, Theme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { red } from "@mui/material/colors";

interface UserIconProps {
  src: string | undefined | null;
  fontsize: number;
  sx?: SxProps<Theme> | undefined;
}

const UserIcon = ({ src, fontsize, sx }: UserIconProps) => {
  return (
    <>
      <Box
        sx={{
          height: `${fontsize}px`,
          width: `${fontsize}px`,
          margin: "0 auto",
        }}
      >
        {src && src !== "" ? (
          <Box
            sx={{
              width: `${fontsize}px`,
              height: `${fontsize}px`,
            }}
          >
            <Image
              src={src}
              height={fontsize}
              width={fontsize}
              style={{
                objectFit: "contain",
                borderRadius: "50%",
              }}
              alt="ユーザアイコン"
            />
          </Box>
        ) : (
          <AccountCircleIcon
            sx={{ color: red[500], fontSize: fontsize, ...sx }}
          />
        )}
      </Box>
    </>
  );
};

export default UserIcon;
