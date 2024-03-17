import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import Link from "next/link";
import React from "react";
import { ButtonElement } from "@/components/elements";

interface LinkButtonProps {
  text: string;
  textVariant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | undefined;
  sx?: SxProps<Theme> | undefined;
  size?: "small" | "medium" | "large" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  href: string;
}

const LinkButton = ({
  text,
  textVariant,
  size,
  sx,
  variant,
  color,
  href,
}: LinkButtonProps) => {
  return (
    <>
      <Link href={href}>
        <ButtonElement
          text={text}
          textVariant={textVariant}
          color={color}
          size={size}
          variant={variant}
          sx={sx}
        />
      </Link>
    </>
  );
};

export default LinkButton;
