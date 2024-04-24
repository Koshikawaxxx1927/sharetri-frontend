"use client";

import { TextField, Typography } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import { UseFormRegister } from "react-hook-form";

interface MultiTextFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
  value?: string;
}

const MultiTextForm = ({
  label,
  name,
  register,
  errors,
  value = "",
}: MultiTextFormProps) => {
  const [text, setText] = useState(value);
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <TextField
        multiline
        {...register(name, { required: `${label}を入力してください` })}
        value={text}
        onChange={changeHandler}
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default MultiTextForm;
