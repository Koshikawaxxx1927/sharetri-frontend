import React from "react";
import { TripList } from "@/features";
import { Container } from "@mui/material";
import { TripProvider } from "@/context";

const page = () => {
  return (
    <Container maxWidth="sm">
      <div>
        <TripProvider>
          <TripList />
        </TripProvider>
      </div>
    </Container>
  );
};

export default page;
