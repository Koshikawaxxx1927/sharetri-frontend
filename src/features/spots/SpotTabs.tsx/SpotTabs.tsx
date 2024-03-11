"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import type { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SpotListTab, SpotFlowTab } from "@/features";
import { SpotType } from "@/types";
import { getSpotList } from "@/utils/api";
import { usePathname } from "next/navigation";

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function SpotTabs() {
  // タブの制御
  const [swiper, setSwiper] = React.useState<SwiperCore | null>(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    swiper?.slideTo(newValue);
  };
  const onSwiper = (currentSwiper: SwiperCore) => {
    const swiperInstance = currentSwiper;
    setSwiper(swiperInstance);
  };
  const onSlideChange = (currentSwiper: SwiperCore) => {
    setValue(currentSwiper.activeIndex);
  };

  // スポットのロード
  const spotsPerPage = 12;
  const [spots, setSpots] = React.useState<SpotType[]>([]);
  const [batch, setBatch] = React.useState<number>(0);
  const pathname = usePathname();
  const tripid = Number(pathname.split("/").pop());

  const spotsLoader = async (batch: number) => {
    const _spots = await getSpotList(tripid, batch, spotsPerPage);
    setSpots((spots) => [...spots, ..._spots]);
  };

  React.useEffect(() => {
    spotsLoader(batch);
  }, [batch]);

  return (
    <Box sx={{ bgcolor: "background.paper", width: 1 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Swiper
        simulateTouch={false}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
      >
        <SwiperSlide>
          <SpotListTab
            value={value}
            spots={spots}
            spotsPerPage={spotsPerPage}
            batch={batch}
            setBatch={setBatch}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SpotFlowTab
            value={value}
            spots={spots}
            spotsPerPage={spotsPerPage}
            batch={batch}
            setBatch={setBatch}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default SpotTabs;
