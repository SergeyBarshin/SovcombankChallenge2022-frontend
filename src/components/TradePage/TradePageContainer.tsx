import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import FunctionalContainer from "./Functional/FunctionalContainer";
import TradeInformation from "./Chart/TradeInformation";

const TradePageContainer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ paddingY: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <TradeInformation />
        </Grid>

        <Grid item xs={4}>
          <FunctionalContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TradePageContainer;
