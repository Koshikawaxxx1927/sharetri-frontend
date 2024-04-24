import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const loading = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CircularProgress
        size={120}
        sx={{
          margin: "auto",
          display: "inline-block",
        }}
      />
    </Box>
  );
};

export default loading;
