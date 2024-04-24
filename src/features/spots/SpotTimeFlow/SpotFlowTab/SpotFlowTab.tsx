import { TabPanel } from "@/components";
import React from "react";
import { SpotTimeline } from "@/features";
// import { SpotType } from "@/types";

interface SpotFlowTabProps {
  value: number;
  // handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const SpotFlowTab = ({ value }: SpotFlowTabProps) => {
  return (
    <TabPanel value={value} index={1}>
      <SpotTimeline />
    </TabPanel>
  );
};

export default SpotFlowTab;
