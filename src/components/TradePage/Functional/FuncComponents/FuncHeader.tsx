import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

interface prop {
  pair: string;
  price: number;
}

const FuncHeader: React.FC<prop> = (props: prop) => {
  const { pair, price } = props;

  return (
    <Box>
      <Typography variant="h6">{`${pair.split("/")[0]}: ${price} ${
        pair.split("/")[1]
      }`}</Typography>
      <Divider />
    </Box>
  );
};

export default FuncHeader;
