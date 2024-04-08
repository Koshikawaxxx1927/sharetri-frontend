"use client";

import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ExampleImage from "@/../public/images/150x150.png";
import Slide1 from "@/../public/images/slide1.jpg";
import Slide2 from "@/../public/images/slide2.jpg";
import Slide3 from "@/../public/images/slide3.jpg";
import Image from "next/image";
import { LinkButton } from "@/components/elements";

const ArrowColor = "blue";
const ArrowColor_bg = "white";
const Icon = "lightskyblue";
const ActiveIcon = "midnightblue";

export default function Carousel_example() {
  return (
    <Box>
      <Carousel
        height={"50vh"}
        NextIcon={<ArrowForwardIosSharpIcon />} //矢印アイコンを別のアイコンに変更
        PrevIcon={<ArrowBackIosSharpIcon />} //矢印アイコンを別のアイコンに変更
        autoPlay={true} //自動でCarouselを動かすかどうか(true or false)
        // stopAutoPlayOnHover = {true} Carouselの上にマウスを置いている間、自動スクロールを継続するかどうか
        interval={4000} // 自動でCarouselを動かす時間の間隔(ミリ秒単位)
        animation="slide" // (fade or slide) Carouselのアニメーションの種類を変更
        duration={1000} //アニメーションの長さを定義
        //swipe = {true} スワイプで動かせるかどうか
        //indicators = {true} インジケーター(下の丸いアイコン)が必要かどうか
        navButtonsAlwaysVisible={true} //常に矢印アイコンを表示するかどうか
        //navButtonsAlwaysInvisible = {true} //常に矢印アイコンを非表示にするかどうか
        //cycleNavigation = {true} //最後のスライドから「次へ」の矢印アイコンを押した時に最初にスライドに動かせるようにするかどうか
        // fullHeightHover={true} //次/前のボタンがItem要素の高さ全体をカバーし、ホバー時にボタンを表示するかどうか
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
        <Box>
          <Image src={Slide1} fill objectFit="contain" alt="スライドショー" />
        </Box>
        <Box>
          <Image src={Slide2} fill objectFit="contain" alt="スライドショー" />
        </Box>
        <Box>
          <Image src={Slide3} fill objectFit="contain" alt="スライドショー" />
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
