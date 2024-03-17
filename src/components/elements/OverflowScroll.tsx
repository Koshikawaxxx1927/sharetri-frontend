import { Box } from "@mui/material";
import React from "react";

interface OverflowScrollProps {
  height: string;
  children: React.ReactNode;
}

const OverflowScroll = ({ height, children }: OverflowScrollProps) => {
  return <Box sx={{ height: height, overflowY: "scroll" }}>{children}</Box>;
};

export default OverflowScroll;
