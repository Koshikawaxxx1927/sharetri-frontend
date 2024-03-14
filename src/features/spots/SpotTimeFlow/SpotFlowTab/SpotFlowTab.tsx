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
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const SpotFlowTab = ({
  value,
  spots,
  spotsPerPage,
  batch,
  setBatch,
  handleChange,
}: SpotFlowTabProps) => {
  return (
    <Box sx={{ height: "85vh", overflowY: "scroll" }}>
      <TabPanel value={value} index={1}>
        <SpotTimeline
          spots={spots}
          spotsPerPage={spotsPerPage}
          batch={batch}
          setBatch={setBatch}
          handleChange={handleChange}
        />
      </TabPanel>
    </Box>
  );
};

export default SpotFlowTab;
