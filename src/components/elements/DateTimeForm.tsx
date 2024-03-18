"use client";

import { TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface DateTimeFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
  value?: string;
}

const DateTimeForm = ({
  label,
  name,
  register,
  errors,
  value = "",
}: DateTimeFormProps) => {
  const [datetime, setDatetime] = useState(value);
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDatetime(e.target.value);
  };
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <TextField
        type="datetime-local"
        {...register(name, { required: `${label}を入力してください` })}
        value={datetime}
        onChange={changeHandler}
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default DateTimeForm;
