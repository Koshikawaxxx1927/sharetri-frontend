import { AppBar, Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { blue } from "@mui/material/colors";
import Link from "next/link";

const Footer = () => {
  const backgroundColor = blue[500];
  return (
    <Box sx={{ height: "100%" }}>
      <AppBar
        component="footer"
        position="static"
        sx={{
          backgroundColor: backgroundColor,
          // position: "fixed",
          // bottom: "0",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ margin: "5px 0 5px" }}>
              <Typography variant="caption">©2024 Sharetri</Typography>
            </Box>
            <Box sx={{ marginY: "10px" }}>
              <Typography
                sx={[
                  { marginX: "7px", display: "inline" },
                  { "&:hover": { opacity: "0.8" } },
                ]}
              >
                <Link href="/terms">利用規約</Link>
              </Typography>
              <Typography
                sx={[
                  { marginX: "7px", display: "inline" },
                  { "&:hover": { opacity: "0.8" } },
                ]}
              >
                <Link href="/privacy">プライバシーポリシー</Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Footer;
