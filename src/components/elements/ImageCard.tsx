"use client";

import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import { CardDropDown, ShowImage, CardHeader } from "@/components/elements";
import React from "react";

interface CardTextProps {
  title: string;
  createdat: string;
  src: string;
  memo: string;
  spot: string;
  favorite: boolean;
  favoriteOnClick: (isFavorite: boolean) => void;
  children: React.ReactNode;
  PostComponent: React.ReactElement;
}

export default function ImageCard({
  title,
  createdat,
  src,
  memo,
  favorite,
  favoriteOnClick,
  children,
  PostComponent,
}: CardTextProps) {
  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
      <Box
        sx={{
          borderRadius: "10px",
        }}
      >
        <CardHeader title={title} createdat={createdat} />
        <ShowImage src={src} children={PostComponent} />
        {children}
      </Box>
      <CardDropDown
        favorite={favorite}
        favoriteOnClick={favoriteOnClick}
        text={memo}
      />
    </Card>
  );
}
