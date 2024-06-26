"use client";

import Header from "@mui/material/CardHeader";
import { ModalButton, UserIcon } from "..";
import { Box, Typography } from "@mui/material";
import { UserType } from "@/types";
import { useEffect, useState } from "react";
import { getUser, getUserIcon } from "@/utils/api";

interface CardHeaderProps {
  uid: string;
  title: string;
  createdat: string;
}

const CardHeader = ({ uid, title, createdat }: CardHeaderProps) => {
  const [dbuser, setDbuser] = useState<UserType>();
  const [usericonSrc, setUsericonSrc] = useState("");
  const fetchUser = async () => {
    const _dbuser = await getUser(uid);
    if (_dbuser === undefined) return;
    setDbuser(_dbuser);
    if (_dbuser.iconpath !== "") {
      const _usericonSrc = await getUserIcon(uid);
      setUsericonSrc(_usericonSrc);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Header
        avatar={
          <Box sx={{ position: "relative" }}>
            <UserIcon src={usericonSrc} fontsize={40} />
            <ModalButton
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                bottom: "0",
                transformOrigin: "0 0",
                transform: "scaleX(0.66)",
                borderRadius: "50%",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <UserIcon src={usericonSrc} fontsize={60} />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "20px" }}
                >
                  {dbuser?.name}さん
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "20px" }}
                >
                  ユーザID: {dbuser?.uid}
                </Typography>
              </Box>
            </ModalButton>
          </Box>
        }
        title={title}
        subheader={createdat}
      />
    </>
  );
};

export default CardHeader;
