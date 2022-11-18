import React from "react";
import PaperCard from "../PaperCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chart from "./Chart";

const TradeInformation: React.FC = () => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={8}>
        <PaperCard childComp={<Chart />} />
      </Grid>

      <Grid item xs={8}>
        <PaperCard childComp={<Box>Тут статки</Box>} />
      </Grid>
    </Grid>
  );
};

export default TradeInformation;
