import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface PulldownFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
  children: React.ReactNode;
}

const PulldownForm = ({
  label,
  name,
  register,
  errors,
  children,
}: PulldownFormProps) => {
  return (
    <>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select
          defaultValue={""}
          label={label}
          {...register(name, { required: `${label}を入力してください` })}
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
