import { TextField, Typography } from "@mui/material";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface MultiTextFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
}

const MultiTextForm = ({
  label,
  name,
  register,
  errors,
}: MultiTextFormProps) => {
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <TextField
        label={label}
        multiline
        {...register(name, { required: `${label}を入力してください` })}
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default MultiTextForm;
