import { Snackbar, Alert } from "@mui/material";
import React from "react";

interface SnackInfoProps {
  successOpen: boolean;
  closeSuccess: () => void;
  errorOpen: boolean;
  closeError: () => void;
}

const SnackInfo = ({
  successOpen,
  closeSuccess,
  errorOpen,
  closeError,
}: SnackInfoProps) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={successOpen}
        autoHideDuration={6000}
        onClose={closeSuccess}
      >
        <Alert onClose={closeSuccess} severity="success">
          旅行を
          <br />
          更新しました!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={errorOpen}
        autoHideDuration={6000}
        onClose={closeError}
      >
        <Alert onClose={closeError} severity="error">
          エラーが
          <br />
          発生しました
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackInfo;
