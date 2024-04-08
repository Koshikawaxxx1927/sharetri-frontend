"use client";

import Timeline from "@mui/lab/Timeline";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { DayBorder, TimelineElement } from "@/components/elements";
import { SpotType } from "@/types";
import { Box } from "@mui/material";
import { useSpots } from "@/context";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

interface SpotTimelineProps {
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function SpotTimeline({ onChange }: SpotTimelineProps) {
  const spots = useSpots();
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {spots.map((spot) => {
        return (
          <Box key={spot.ID}>
            {spot.starttime.split("T")[0]}
            <TimelineElement
              starttime={`${spot.starttime.split("T")[1]}`}
              endtime={`${spot.endtime.split("T")[1]}`}
              name={spot.name}
              memo={spot.memo}
            >
              <></>
              {/* Spotのカテゴリーを入れるかも */}
            </TimelineElement>
          </Box>
        );
      })}
    </Timeline>
  );
}
