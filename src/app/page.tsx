"use client";

import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import Slide1 from "@/../public/images/slide1.jpg";
// import Slide2 from "@/../public/images/slide2.jpg";
// import Slide3 from "@/../public/images/slide3.jpg";
import Image from "next/image";
import { LinkButton } from "@/components";

const ArrowColor = "blue";
const ArrowColor_bg = "white";
const Icon = "lightskyblue";
const ActiveIcon = "midnightblue";

export default function page() {
  return (
    <Box>
      <Carousel
        height={"50vh"}
        NextIcon={<ArrowForwardIosSharpIcon />}
        PrevIcon={<ArrowBackIosSharpIcon />}
        autoPlay={true}
        interval={4000}
        animation="slide"
        duration={1000}
        navButtonsAlwaysVisible={true}
        indicatorContainerProps={{
          style: {
            margin: "3px 0px 0px 0px",
          },
        }}
        indicatorIconButtonProps={{
          //アクティブでない下の丸いアイコンの設定
          style: {
            padding: "10px", //位置調整
            color: Icon,
            zIndex: 10,
          },
        }}
        activeIndicatorIconButtonProps={{
          //アクティブな下の丸いアイコンの設定
          style: {
            color: ActiveIcon,
          },
        }}
        navButtonsWrapperProps={{
          //矢印ボタン周りの設定
          style: {
            margin: "0px 2% 0px", //位置調整
          },
        }}
        navButtonsProps={{
          //矢印ボタンの設定
          style: {
            color: ArrowColor, //矢印の色
            backgroundColor: ArrowColor_bg, //矢印の背景の色
            borderRadius: 0, //0にすると四角になる．
          },
        }}
      >
        <Box position="relative" sx={{ height: "60vh" }}>
          <Image
            src="/images/slide1.jpg"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="スライドショー"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>
        <Box position="relative" sx={{ height: "60vh" }}>
          <Image
            src="/images/slide2.jpg"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="スライドショー"
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>
        <Box position="relative" sx={{ height: "60vh" }}>
          <Image
            src="/images/slide3.jpg"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="スライドショー"
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>
      </Carousel>
      <Box sx={{ textAlign: "center" }}>
        <LinkButton
          text="旅の共有を始める!"
          href="/trips"
          size="large"
          textVariant="h4"
        />
      </Box>
    </Box>
  );
}
