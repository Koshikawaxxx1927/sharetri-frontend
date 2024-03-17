import { TextField, Typography } from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface TextFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
}

const TextForm = ({ label, name, register, errors }: TextFormProps) => {
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <TextField
        label={label}
        {...register(name, { required: `${label}を入力してください` })}
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default TextForm;
