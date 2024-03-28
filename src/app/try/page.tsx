"use client";

import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuthContext } from "@/context";
import { ButtonElement, LinkButton } from "@/components/elements";

const AccountMenu: React.FC = () => {
  const { user } = useAuthContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {};

  return (
    <>
      <IconButton onClick={handleClick} color="inherit" aria-label="account">
        <AccountCircleIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {user ? (
          <MenuItem>
            <ButtonElement
              text="サインアウト"
              sx={{ color: "black", display: "block", width: "100%" }}
              onClick={handleLogout}
            />
          </MenuItem>
        ) : (
          <>
            <MenuItem>
              <LinkButton
                text="サインアップ"
                href="/signup"
                sx={{ color: "black", display: "block", width: "100%" }}
              />
            </MenuItem>
            <MenuItem>
              <LinkButton
                text="サインイン"
                href="/signin"
                sx={{ color: "black", display: "block", width: "100%" }}
              />
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
};

export default AccountMenu;
