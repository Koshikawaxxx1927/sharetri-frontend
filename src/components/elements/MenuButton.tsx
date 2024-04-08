"use client";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "@/features/DrawerMenu";

export default function MenuButton() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const clickHandler = () => {
    toggleDrawer(false);
  };

  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerMenu onClick={clickHandler} />
      </Drawer>
    </>
  );
}
