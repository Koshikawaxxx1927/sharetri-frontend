"use client";

import { useRef, SetStateAction } from "react";
import Timeline from "@mui/lab/Timeline";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { TimelineElement } from "@/components/elements";
import { SpotType } from "@/types";
import { useIntersectionObserver } from "@/hooks";
import { Box } from "@mui/material";

interface SpotTimelineProps {
  spots: SpotType[];
  spotsPerPage: number;
  batch: number;
  setBatch: (value: SetStateAction<number>) => void;
}

export default function SpotTimeline({
  spots,
  spotsPerPage,
  batch,
  setBatch,
}: SpotTimelineProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const updateBatch = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        setBatch((batch) => batch + spotsPerPage);
      }
    });
  };

  // カスタムフックを呼ぶ
  useIntersectionObserver([ref], updateBatch);

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
          <TimelineElement
            key={spot.ID}
            starttime={spot.starttime.split("T")[1].split(".")[0]}
            endtime={spot.endtime.split("T")[1].split(".")[0]}
            name={spot.name}
            memo={spot.memo}
          >
            <FastfoodIcon />
          </TimelineElement>
        );
      })}
      {spots.length === batch + spotsPerPage && <Box ref={ref}></Box>}
    </Timeline>
  );
}
