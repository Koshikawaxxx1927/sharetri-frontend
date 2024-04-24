"use client";

import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

interface TimelineElementProps {
  starttime: string;
  endtime: string;
  name: string;
  memo: string;
  children: React.ReactNode;
}

const TimelineElement = ({
  starttime,
  endtime,
  name,
  memo,
  children,
}: TimelineElementProps) => {
  return (
    <TimelineItem sx={[{ "&:hover": { backgroundColor: "#eee" } }]}>
      <TimelineOppositeContent
        sx={{ m: "auto 0", textAlign: "center" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        <Typography component="div">{starttime}</Typography>
        <Typography component="div">|</Typography>
        <Typography component="div">{endtime}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>{children}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span">
          {name}
        </Typography>
        <Typography>{memo}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineElement;
