import { TabPanel } from "@/components";
import React from "react";
import { SpotTimeline } from "@/features";

interface SpotFlowTabProps {
  value: number;
}

const SpotFlowTab = ({ value }: SpotFlowTabProps) => {
  return (
    <TabPanel value={value} index={1}>
      <SpotTimeline />
    </TabPanel>
  );
};

export default SpotFlowTab;
