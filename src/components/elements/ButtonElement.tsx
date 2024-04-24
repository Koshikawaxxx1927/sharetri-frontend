import { SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

interface ButtonElementProps {
  type?: "submit" | "reset" | "button" | undefined;
  text?: string | undefined;
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
  onClick?: () => void | undefined | Promise<void>;
}

const ButtonElement = ({
  type,
  text,
  textVariant,
  size,
  sx,
  variant,
  color,
  onClick,
}: ButtonElementProps) => {
  return (
    <Button
      type={type}
      color={color}
      size={size}
      variant={variant}
      sx={sx}
      onClick={onClick}
    >
      <Typography variant={textVariant} component="h2">
        {text}
      </Typography>
    </Button>
  );
};

export default ButtonElement;
