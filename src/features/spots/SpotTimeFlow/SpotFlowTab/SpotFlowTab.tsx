import { TabPanel } from "@/components/elements";
import { Box } from "@mui/material";
import React, { SetStateAction } from "react";
import { SpotTimeline } from "@/features";
import { SpotType } from "@/types";

interface SpotFlowTabProps {
  value: number;
  spots: SpotType[];
  spotsPerPage: number;
  batch: number;
  setBatch: (value: SetStateAction<number>) => void;
}

const SpotFlowTab = ({
  value,
  spots,
  spotsPerPage,
  batch,
  setBatch,
}: SpotFlowTabProps) => {
  return (
    <Box>
      <TabPanel value={value} index={1}>
        <SpotTimeline
          spots={spots}
          spotsPerPage={spotsPerPage}
          batch={batch}
          setBatch={setBatch}
        />
      </TabPanel>
    </Box>
  );
};

export default SpotFlowTab;
