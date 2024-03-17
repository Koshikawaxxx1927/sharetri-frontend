import React from "react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import Link from "next/link";

interface PrimaryLinkButtonProps {
  href: string;
  text: string;
}

const PrimaryLinkButton = ({ href, text }: PrimaryLinkButtonProps) => {
  return (
    <Button variant="outlined" color="primary" sx={{ width: "100%" }}>
      <Link href={href}>{text}</Link>
    </Button>
  );
};

export default PrimaryLinkButton;
