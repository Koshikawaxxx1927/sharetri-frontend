import { ColorType } from "@/types";
import { Snackbar, Alert } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect } from "react";

interface SnackInfoProps {
  // successOpen: boolean;
  // closeSuccess: () => void;
  // errorOpen: boolean;
  // closeError: () => void;
  snack: ColorType;
  setSnack: Dispatch<SetStateAction<ColorType>>;
}

const SnackInfo = ({
  snack,
  setSnack,
}: // successOpen,
// closeSuccess,
// errorOpen,
// closeError,
SnackInfoProps) => {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const handleSuccess = () => {
    setSuccessOpen(true);
  };
  const closeSuccess = () => {
    setSuccessOpen(false);
  };

  const [errorOpen, setErrorOpen] = React.useState(false);

  const handleError = () => {
    setErrorOpen(true);
  };
  const closeError = () => {
    setErrorOpen(false);
  };
  useEffect(() => {
    switch (snack.color) {
      case "success":
        handleSuccess();
        setSnack({ color: "" });
        break;
      case "error":
        handleError();
        setSnack({ color: "" });
        break;
      // 必要に応じて他のケースも追加することができます
      default:
        // デフォルトの処理
        break;
    }
  }, [snack]);
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
