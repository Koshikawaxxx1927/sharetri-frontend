import { TabPanel } from "@/components/elements";
import React from "react";
import { SpotTimeline } from "@/features";
import { SpotType } from "@/types";

interface SpotFlowTabProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const SpotFlowTab = ({ value, handleChange }: SpotFlowTabProps) => {
  return (
    <TabPanel value={value} index={1}>
      <SpotTimeline onChange={handleChange} />
    </TabPanel>
  );
};

export default SpotFlowTab;
