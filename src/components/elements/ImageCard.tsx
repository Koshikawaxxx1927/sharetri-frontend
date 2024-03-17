"use client";

import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import { getTripImage } from "@/utils/api";
import {
  CardDropDown,
  ShowImage,
  CardContents,
  CardHeader,
} from "@/components/elements";

interface CardTextProps {
  title: string;
  createdat: string;
  src: string;
  memo: string;
  spot: string;
  children: React.ReactNode;
}

export default function ImageCard({
  title,
  createdat,
  src,
  memo,
  children,
}: CardTextProps) {
  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
      <Box
        sx={{
          borderRadius: "10px",
        }}
      >
        <CardHeader title={title} createdat={createdat} />
        <ShowImage src={src} />
        {children}
      </Box>
      <CardDropDown text={memo} />
    </Card>
  );
}
