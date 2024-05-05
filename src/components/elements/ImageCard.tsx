"use client";

import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import { ShowImage, CardHeader } from "@/components";
import React from "react";

interface CardTextProps {
  uid: string;
  title: string;
  createdat: string;
  src: string;
  memo: string;
  spot: string;
  children: React.ReactNode;
  PostComponent: React.ReactElement;
}

export default function ImageCard({
  uid,
  title,
  createdat,
  src,
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
        <CardHeader uid={uid} title={title} createdat={createdat} />
        <ShowImage src={src} children={PostComponent} />
        {/* <ShowImage src={src}>
          <PostComponent />
        </ShowImage> */}
        {children}
      </Box>
    </Card>
  );
}
