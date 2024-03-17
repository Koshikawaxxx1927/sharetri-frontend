import { TextField, Typography } from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface NumberFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
}

const NumberForm = ({ label, name, register, errors }: NumberFormProps) => {
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <TextField
        label={label}
        type="number"
        {...register(name, { required: `${label}を入力してください` })}
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default NumberForm;
