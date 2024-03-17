import { TextField, Typography } from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface DateTimeFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
}

const DateTimeForm = ({ label, name, register, errors }: DateTimeFormProps) => {
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <TextField
        type="datetime-local"
        {...register(name, { required: `${label}を入力してください` })}
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default DateTimeForm;
