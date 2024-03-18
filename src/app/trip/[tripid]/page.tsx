import React from "react";
import { Container } from "@mui/material";
import { SpotTabs } from "@/features";
import { SpotProvider } from "@/context";

const page = () => {
  return (
    <Container maxWidth="sm">
      <div>
        <SpotProvider>
          <SpotTabs />
        </SpotProvider>
      </div>
    </Container>
  );
};

export default page;
