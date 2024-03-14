import { TabPanel } from "@/components/elements";
import React, { SetStateAction } from "react";
import SpotScroll from "../SpotScroll/SpotScroll";
import { Box } from "@mui/material";
import { SpotType } from "@/types";

interface SpotListTabProps {
  value: number;
  spots: SpotType[];
  spotsPerPage: number;
  batch: number;
  setBatch: (value: SetStateAction<number>) => void;
}

const SpotListTab = ({
  value,
  spots,
  spotsPerPage,
  batch,
  setBatch,
}: SpotListTabProps) => {
  return (
    <Box sx={{ height: "85vh", overflowY: "scroll" }}>
      <TabPanel value={value} index={0}>
        <SpotScroll
          spots={spots}
          spotsPerPage={spotsPerPage}
          batch={batch}
          setBatch={setBatch}
        />
      </TabPanel>
    </Box>
  );
};

export default SpotListTab;
