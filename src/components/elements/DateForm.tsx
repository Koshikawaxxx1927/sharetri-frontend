"use client";

import { TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface DateFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
  value?: string;
}

const DateForm = ({
  label,
  name,
  register,
  errors,
  value = "",
}: DateFormProps) => {
  const [date, setDate] = useState(value);
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDate(e.target.value);
  };
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <TextField
        {...register(name, { required: `${label}を入力してください` })}
        type="date"
        value={date}
        onChange={changeHandler}
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default DateForm;
