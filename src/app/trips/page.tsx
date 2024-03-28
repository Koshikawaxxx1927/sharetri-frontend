import React from "react";
import { TripList } from "@/features";
import { Container } from "@mui/material";

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
