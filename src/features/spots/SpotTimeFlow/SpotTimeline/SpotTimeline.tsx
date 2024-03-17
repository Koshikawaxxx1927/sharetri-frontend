"use client";

import Timeline from "@mui/lab/Timeline";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { DayBorder, TimelineElement } from "@/components/elements";
import { SpotType } from "@/types";
import { Box } from "@mui/material";

interface SpotTimelineProps {
  spots: SpotType[];
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function SpotTimeline({ spots, onChange }: SpotTimelineProps) {
  let currentDate = spots[0].starttime.split("T")[0];
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {currentDate}
      {spots.map((spot) => {
        return (
          <Box key={spot.ID}>
            <DayBorder
              currentDay={currentDate}
              newDay={spot.starttime.split("T")[0]}
            />
            <TimelineElement
              id={spot.ID.toString()}
              starttime={`${spot.starttime.split("T")[1].slice(0, 5)}`}
              endtime={`${spot.endtime.split("T")[1].slice(0, 5)}`}
              name={spot.name}
              memo={spot.memo}
              onChange={onChange}
            >
              <FastfoodIcon />
            </TimelineElement>
          </Box>
        );
      })}
    </Timeline>
  );
}
