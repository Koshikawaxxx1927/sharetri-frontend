import { TextField, Typography } from "@mui/material";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface DateFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
}

const DateForm = ({ label, name, register, errors }: DateFormProps) => {
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <TextField
        {...register(name, { required: `${label}を入力してください` })}
        type="date"
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default DateForm;
