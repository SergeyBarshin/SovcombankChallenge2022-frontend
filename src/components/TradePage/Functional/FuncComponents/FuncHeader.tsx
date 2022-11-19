import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const FuncHeader: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">RUB/USD</Typography>
      <Divider />
    </Box>
  );
};

export default FuncHeader;
