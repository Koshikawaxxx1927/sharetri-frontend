import { TabPanel } from "@/components/elements";
import React from "react";
import { SpotTimeline } from "@/features";
import { SpotType } from "@/types";

interface SpotFlowTabProps {
  value: number;
  spots: SpotType[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const SpotFlowTab = ({ value, spots, handleChange }: SpotFlowTabProps) => {
  return (
    <TabPanel value={value} index={1}>
      <SpotTimeline spots={spots} onChange={handleChange} />
    </TabPanel>
  );
};

export default SpotFlowTab;
