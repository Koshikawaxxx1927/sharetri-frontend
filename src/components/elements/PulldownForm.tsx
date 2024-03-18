"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface PulldownFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
  children: React.ReactNode;
  value?: string;
}

const PulldownForm = ({
  label,
  name,
  register,
  errors,
  children,
  value = "",
}: PulldownFormProps) => {
  const [selection, setSelection] = useState(value);
  const changeHandler = (e: SelectChangeEvent<string>) => {
    setSelection(e.target.value);
  };
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select
          defaultValue={""}
          label={label}
          {...register(name, { required: `${label}を入力してください` })}
          value={selection}
          onChange={changeHandler}
        >
          <MenuItem value={""}>
            <em>None</em>
          </MenuItem>
          {children}
        </Select>
      </FormControl>
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </>
  );
};

export default PulldownForm;
