import React from "react";
import { TripList } from "@/features";
import { Container, Box } from "@mui/material";

const page = () => {
  return (
    <Container maxWidth="sm">
      <div>
        <TripList />
      </div>
    </Container>
  );
};

export default page;
