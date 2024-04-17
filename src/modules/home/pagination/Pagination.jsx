import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import './Pagination.css'

const BasicPagination = ({ data }) => {
  return (
    <div className="pagination-container">
      <Stack spacing={data}>
        <Pagination count={4} color="primary" />
      </Stack>
    </div>
  );
};
export default BasicPagination;
