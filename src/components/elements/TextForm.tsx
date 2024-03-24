"use client";

import { SxProps, TextField, Theme, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface TextFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
  value?: string;
  sx?: SxProps<Theme> | undefined;
}

const TextForm = ({
  label,
  name,
  register,
  errors,
  value = "",
  sx,
}: TextFormProps) => {
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
        label={label}
        {...register(name, { required: `${label}を入力してください` })}
        value={text}
        onChange={changeHandler}
        sx={sx}
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default TextForm;
