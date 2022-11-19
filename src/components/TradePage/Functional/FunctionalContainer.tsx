import React from "react";
import PaperCard from "../PaperCard";
import FunctionalGrid from "./FunctionalGrid";
import { Box } from "@mui/material";

interface prop {
  pair: string;
  price: number;
}

const FunctionalContainer: React.FC<prop> = (props: prop) => {
  const { pair, price } = props;
  return (
    <Box sx={{ height: "100%" }}>
      <PaperCard childComp={<FunctionalGrid pair={pair!} price={price!} />} />
    </Box>
  );
};

export default FunctionalContainer;
