"use client";

import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Image from "next/image";
import { LinkButton } from "@/components";
import { Rampart_One } from "next/font/google";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

const RampartOneFont = Rampart_One({
  weight: "400",
  subsets: ["latin"],
});

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
          //矢印ボタン
          style: {
            color: ArrowColor, //矢印の色
            backgroundColor: ArrowColor_bg, //矢印の背景の色
            borderRadius: 0, //0にすると四角になる．
          },
        }}
      >
        <Box position="relative" sx={{ height: "60vh" }}>
          <Image
            src="/images/slide1.JPG"
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
            src="/images/slide2.JPG"
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
            src="/images/slide3.JPG"
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
      <Box sx={{ textAlign: "center", marginTop: "30px" }}>
        <LinkButton
          text="旅の共有を始める!"
          href="/trips"
          size="large"
          textVariant="h4"
        />
      </Box>
      <Typography
        variant="h4"
        align="center"
        component="div"
        color="black"
        sx={{ flexGrow: 1, margin: "40px 0 20px" }}
      >
        <span className={RampartOneFont.className}>Sharetri</span>
      </Typography>
      <Container maxWidth="md" sx={{ marginY: "20px" }}>
        <Typography>
          「旅慣れした人のおすすめスポットを知りたい!」という思いから作られた旅行先共有サービスです。
          画像を使用してスポットを共有することが。旅行先の魅力を効果的に伝えられます。
        </Typography>
      </Container>
    </Box>
  );
}
