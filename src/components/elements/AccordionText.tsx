"use client";

import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";

interface AccordionTextProps {
  text: string;
}

const AccordionText = ({ text }: AccordionTextProps) => {
  const [isOpen, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!isOpen);
  };
  return (
    <Box sx={{ padding: "4px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>メモ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{text}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionText;
