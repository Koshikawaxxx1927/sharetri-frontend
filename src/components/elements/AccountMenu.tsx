"use client";

import React, { useEffect, useState } from "react";
import {
  Divider,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { ButtonElement, UserIcon } from "@/components/elements";
import { auth } from "@/auth";
import { getUser } from "@/utils/api";
import { useAuthState } from "react-firebase-hooks/auth";
import { signin, signout } from "@/utils/auth";
import { UserType } from "@/types";

const AccountMenu = () => {
  const [user] = useAuthState(auth);
  const [dbuser, setDbuser] = useState<UserType>();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchDbuser = async () => {
    //
    if (user !== undefined && user) {
      try {
        const _dbuser = await getUser(user.uid);
        setDbuser(_dbuser);
      } catch (err) {
        // Not Found
      }
    }
  };

  useEffect(() => {
    fetchDbuser();
  }, [user]);
  //
  //
  return (
    <>
      <IconButton onClick={handleClick} color="inherit" aria-label="account">
        <UserIcon
          src={user?.photoURL}
          fontsize={40}
          sx={{ backgroundColor: "#dbdbdb", borderRadius: "50%" }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          textAlign: "center",
        }}
      >
        <UserIcon src={user?.photoURL} fontsize={60} />
        <Divider sx={{ marginTop: "20px" }} />
        <Typography variant="body2" color="text.secondary">
          {dbuser?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user?.email}
        </Typography>
        <Divider />
        <MenuItem
          sx={{
            width: 300,
            padding: 0,
          }}
        >
          {user ? (
            <ButtonElement
              text="サインアウト"
              sx={{ color: "black", display: "block", width: "100%" }}
              onClick={signout}
            />
          ) : (
            <>
              <MenuList
                sx={[
                  {
                    padding: "0",
                    "&:hover": { backgroundColor: "white" },
                  },
                ]}
              >
                <MenuItem sx={{ padding: "0" }}>
                  <ButtonElement
                    text="サインイン"
                    onClick={signin}
                    sx={{
                      color: "black",
                      display: "block",
                      width: "300px",
                    }}
                  />
                </MenuItem>
              </MenuList>
            </>
          )}
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
