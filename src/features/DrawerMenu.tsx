"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "@/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { signin, signout } from "@/utils/auth";

interface DrawerMenuProps {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const DrawerMenu = ({ onClick }: DrawerMenuProps) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <>
      <Divider />
      <Box sx={{ width: 250 }} role="presentation" onClick={onClick}>
        <List>
          <ListItem disablePadding>
            <Link href="/">
              <ListItemButton sx={{ width: "250px" }}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="ホームへ" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ width: "250px" }} onClick={signin}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="サインイン" />
            </ListItemButton>
          </ListItem>
        </List>
        {user && (
          <>
            <List>
              <ListItem disablePadding>
                <Link href="/">
                  <ListItemButton onClick={signout} sx={{ width: "250px" }}>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="サインアウト" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </>
        )}
        <Divider />
        <List>
          <ListItem disablePadding>
            <Link href="/trips">
              <ListItemButton sx={{ width: "250px" }}>
                <ListItemIcon>
                  <CardTravelIcon />
                </ListItemIcon>
                <ListItemText primary="旅行一覧" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default DrawerMenu;
