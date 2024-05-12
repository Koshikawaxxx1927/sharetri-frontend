"use client";

import { TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface NumberFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
  value?: number;
}

const NumberForm = ({
  label,
  name,
  register,
  errors,
  value = undefined,
}: NumberFormProps) => {
  const [number, setNumber] = useState(value);
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNumber(Number(e.target.value));
  };
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <TextField
        label={label}
        type="number"
        {...register(name, { required: `${label}を入力してください` })}
        value={number}
        onChange={changeHandler}
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default NumberForm;
