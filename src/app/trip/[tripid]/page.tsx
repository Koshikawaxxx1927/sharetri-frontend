import React from "react";
import { Container } from "@mui/material";
import { SpotTabs } from "@/features";

const page = () => {
  return (
    <Container maxWidth="sm">
      <div>
        <SpotTabs />
      </div>
    </Container>
  );
};

export default page;
