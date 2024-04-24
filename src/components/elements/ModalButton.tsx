"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { SxProps, Theme } from "@mui/material";
import { ButtonElement } from "@/components";
import { createContext } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "3px",
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
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
  children: React.ReactElement;
  variant?: "text" | "outlined" | "contained" | undefined;
}

const CloseHandlerUpdateContext = createContext(() => {});

export default function ModalButton({
  text,
  textVariant,
  size,
  sx,
  variant,
  color,
  children,
}: BasicModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonElement
        text={text}
        textVariant={textVariant}
        color={color}
        size={size}
        variant={variant}
        onClick={handleOpen}
        sx={sx}
      />
      <Modal open={open} onClose={handleClose}>
        <>
          <CloseHandlerUpdateContext.Provider value={handleClose}>
            <Box sx={style}>{children}</Box>
          </CloseHandlerUpdateContext.Provider>
        </>
      </Modal>
    </>
  );
}

export const useClose = () => React.useContext(CloseHandlerUpdateContext);
