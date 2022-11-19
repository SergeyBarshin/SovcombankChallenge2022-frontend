import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FunctionalContainer from "./Functional/FunctionalContainer";
import TradeInformation from "./Chart/TradeInformation";
import PaperCard from "./PaperCard";
import History from "./History/History";
import Slide from "@mui/material/Slide";

const TradePageContainer: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Slide in={true} direction="up" timeout={250}>
          <Grid item xs={8}>
            <TradeInformation />
          </Grid>
        </Slide>

        <Slide in={true} direction="up" timeout={250}>
          <Grid item xs={4}>
            <FunctionalContainer />
          </Grid>
        </Slide>

        <Slide in={true} direction="up" timeout={250}>
          <Grid item xs={8}>
            <History />
          </Grid>
        </Slide>

        <Slide in={true} direction="up" timeout={250}>
          <Grid item xs={4}>
            <PaperCard childComp={<h3> Выбор пары </h3>} />
          </Grid>
        </Slide>
      </Grid>
    </Box>
  );
};

export default TradePageContainer;
