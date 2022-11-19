import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FunctionalContainer from "./Functional/FunctionalContainer";
import TradeInformation from "./Chart/TradeInformation";
import PaperCard from "./PaperCard";

const TradePageContainer: React.FC = () => {
  return (
    <Box sx={{ paddingY: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <TradeInformation />
        </Grid>

        <Grid item xs={4}>
          <FunctionalContainer />
        </Grid>

        <Grid item xs={8}>
          <PaperCard childComp={<h3> Тут инфа о истории </h3>} />
        </Grid>

        <Grid item xs={4}>
          <PaperCard childComp={<h3> Выбор пары </h3>} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TradePageContainer;
