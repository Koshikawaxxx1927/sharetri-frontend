"use client";

import Timeline from "@mui/lab/Timeline";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { TimelineElement } from "@/components";
import { Box } from "@mui/material";
import { useSpots } from "@/context";

interface SpotTimelineProps {
  // onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function SpotTimeline() {
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
