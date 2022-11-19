import React from "react";
import PaperCard from "../PaperCard";
import Box from "@mui/material/Box";
import Chart from "./Chart";
interface prop {
  data: {};
}
const TradeInformation: React.FC<prop> = (props: prop) => {
  const { data } = props;

  return (
    <Box>
      <PaperCard childComp={<Chart data={data!} />} />
    </Box>
  );
};

export default TradeInformation;
