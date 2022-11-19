import React from "react";
import PaperCard from "../PaperCard";
import Box from "@mui/material/Box";
import Chart from "./Chart";

const TradeInformation: React.FC = () => {
  return (
    <Box>
      <PaperCard childComp={<Chart />} />
    </Box>
  );
};

export default TradeInformation;
