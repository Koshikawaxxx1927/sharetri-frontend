import { Box } from "@mui/material";
import React from "react";

interface DayBorderProps {
  currentDay: string;
  newDay: string;
}

const DayBorder = ({ currentDay, newDay }: DayBorderProps) => {
  return <div>{currentDay < newDay && <Box>{newDay}</Box>}</div>;
};

export default DayBorder;
