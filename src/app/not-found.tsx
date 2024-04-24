import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";

const notFound = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={1} sx={{ marginTop: "150px" }}>
          <Grid item xs={12} sm={5}>
            <PetsIcon
              color="primary"
              sx={{ fontSize: "180px", margin: "0 auto", display: "block" }}
            />
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={6} sx={{ padding: "20px, 0" }}>
            <Box sx={{ marginTop: "30px", textAlign: "center" }}>
              <Typography variant="h6">
                指定されたページが
                <br />
                見つかりません
              </Typography>
              <Typography variant="h6">Not Found: 404</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default notFound;
