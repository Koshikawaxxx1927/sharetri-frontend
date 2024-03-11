"use client";

import { useState, useEffect } from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import FilterIcon from "@mui/icons-material/Filter";

import Image from "next/image";
import { Box } from "@mui/material";
import { getTripImage } from "@/utils/api";
import Link from "next/link";
import {
  CardDropDown,
  ShowImage,
  CardContents,
  CardHeader,
} from "@/components/elements";

interface CardTextProps {
  id: number;
  createdat: string;
  title: string;
  start: string;
  end: string;
  src: string;
  memo: string;
  spot: string;
  href: string;
}

export default function ImageCard({
  id,
  createdat,
  title,
  start,
  end,
  src,
  memo,
  spot,
  href,
}: CardTextProps) {
  const [url, setUrl] = useState("");
  const urlUpdate = async () => {
    const url = src === "" ? "" : await getTripImage(id);
    setUrl(url);
  };

  useEffect(() => {
    urlUpdate();
  }, []);

  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
      <Link href={href}>
        <Box
          sx={[
            {
              borderRadius: "10px",
              cursor: "pointer",
            },
            { "&:hover": { opacity: "0.8" } },
          ]}
        >
          <CardHeader title={title} createdat={createdat} />
          <ShowImage src={url} />
          <CardContents id={id} start={start} end={end} spot={spot} />
        </Box>
      </Link>
      <CardDropDown text={memo} />
    </Card>
  );
}
