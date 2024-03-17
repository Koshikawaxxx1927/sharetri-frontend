import { TabPanel } from "@/components/elements";
import React from "react";
import SpotScroll from "../SpotScroll/SpotScroll";
import { SpotType } from "@/types";

interface SpotListTabProps {
  value: number;
  spots: SpotType[];
}

const SpotListTab = ({ value, spots }: SpotListTabProps) => {
  return (
    <TabPanel value={value} index={0}>
      <SpotScroll spots={spots} />
    </TabPanel>
  );
};

export default SpotListTab;
