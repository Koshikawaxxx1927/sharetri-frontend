"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import type { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SpotListTab, SpotFlowTab, PostSpot } from "@/features";
import { getSpotList } from "@/utils/api";
import { usePathname } from "next/navigation";
import {
  InfiniteScroll,
  ModalButton,
  OverflowScroll,
} from "@/components/elements";
import { Grid } from "@mui/material";
import { useSpots, useUpdateSpots } from "@/context";

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
  const spots = useSpots();
  const setSpots = useUpdateSpots();
  const pathname = usePathname();
  const tripid = Number(pathname.split("/").pop());

  React.useLayoutEffect(() => {
    setSpots([]);
    return () => {
      setSpots([]);
    };
  }, []);

  const spotsLoader = async (batch: number) => {
    const _spots = await getSpotList(tripid, batch, spotsPerPage);
    const spotsArray = [...spots, ..._spots];
    const spotsIDs = spots.map((spot) => spot.ID);
    const filteredSpots = spotsArray.filter(
      (spot) => !spotsIDs.includes(spot.ID)
    );
    setSpots((spots) => [...spots, ...filteredSpots]);
  };
  return (
    <Box sx={{ bgcolor: "background.paper", width: 1 }}>
      <AppBar position="sticky">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="List" {...a11yProps(0)} />
          <Tab label="Time flow" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <OverflowScroll height="75vh">
        <Swiper
          simulateTouch={false}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
        >
          <SwiperSlide>
            <SpotListTab value={value} />
          </SwiperSlide>
          <SwiperSlide>
            <SpotFlowTab value={value} handleChange={handleChange} />
          </SwiperSlide>
          <InfiniteScroll
            array={spots}
            arrayPerPage={spotsPerPage}
            loader={spotsLoader}
          />
        </Swiper>
      </OverflowScroll>

      <Box sx={{ margin: "20px" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item xs={12}>
            <ModalButton text={"スポットを追加"}>
              <PostSpot tripid={tripid} />
            </ModalButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SpotTabs;
