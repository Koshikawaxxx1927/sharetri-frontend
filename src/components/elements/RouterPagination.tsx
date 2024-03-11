"use client";
import React, { useState } from "react";
import { Prefecture, Trip } from "@/types";
import { Box, Pagination } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

interface RouterPaginationProps {
  length: number;
  lengthPerPage: number;
}

const RouterPagination = ({ length, lengthPerPage }: RouterPaginationProps) => {
  const router = useRouter();
  const path = usePathname();
  const initialPage = Number(path.split("/").pop());
  const [page, setPage] = useState(initialPage);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    router.push(`${value}`);
    setPage(value);
  };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        {Math.floor(length / lengthPerPage) + 1}
        <Pagination
          count={Math.floor(length / lengthPerPage) + 1}
          page={page}
          onChange={handleChange}
          sx={{ display: "inline-block", margin: "10px" }}
        />
      </Box>
    </>
  );
};

export default RouterPagination;
