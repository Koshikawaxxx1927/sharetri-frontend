"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { MenuButton, AccountMenu } from "@/components";
import Link from "next/link";
import { Rampart_One } from "next/font/google";

const RampartOneFont = Rampart_One({
  weight: "400",
  subsets: ["latin"],
});

interface HeaderProps {
  sx?: SxProps<Theme> | undefined;
}

export default function Header({ sx }: HeaderProps) {
  return (
    <Box sx={{ flexGrow: 1, ...sx }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuButton />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <span className={RampartOneFont.className}>Sharetri</span>
            </Link>
          </Typography>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
