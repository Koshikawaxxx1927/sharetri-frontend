import React from "react";
import { Container, Box } from "@mui/material";
import { SpotTabs, SpotList } from "@/features";

const page = () => {
  return (
    <Container maxWidth="sm">
      <div>
        <SpotTabs />
        {/* <SpotList /> */}
      </div>
    </Container>
  );
};

export default page;
