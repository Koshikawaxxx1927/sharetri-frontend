import { TabPanel } from "@/components/elements";
import React from "react";
import SpotScroll from "../SpotScroll/SpotScroll";

interface SpotListTabProps {
  value: number;
}

const SpotListTab = ({ value }: SpotListTabProps) => {
  return (
    <TabPanel value={value} index={0}>
      <SpotScroll />
    </TabPanel>
  );
};

export default SpotListTab;
