import { Box } from "@mui/material";
import React from "react";

interface DayBorderProps {
  currentDay: string;
  newDay: string;
}

const DayBorder = ({ currentDay, newDay }: DayBorderProps) => {
  // const _currentDay = new Date(currentDay);
  // const _newDay = new Date(newDay);

  return <div>{currentDay < newDay && <Box>{newDay}</Box>}</div>;
};

export default DayBorder;
