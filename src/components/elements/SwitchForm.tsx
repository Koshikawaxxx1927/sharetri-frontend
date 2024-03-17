import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface SwitchFormProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: string | undefined;
}

const SwitchForm = ({ label, name, register, errors }: SwitchFormProps) => {
  const [isPublic, setIsPublic] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPublic(event.target.checked);
    register(name);
  };
  return (
    <Box sx={{ display: "inline" }}>
      <FormControlLabel
        value={isPublic}
        control={<Switch checked={isPublic} onChange={handleChange} />}
        label={label}
        labelPlacement="start"
        {...register(name)}
      />
      <Typography sx={{ color: "red" }}>{errors}</Typography>
    </Box>
  );
};

export default SwitchForm;
