import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FunctionalContainer from "./Functional/FunctionalContainer";
import TradeInformation from "./Chart/TradeInformation";
import History from "./History/History";
import Slide from "@mui/material/Slide";
import TradePairs from "./TradePairs";
interface prop {
  pair: string;
}

const names: any = {
  "BTC/USD": "bitcoin",
  "ETH/USD": "ethereum",
};

const TradePageContainer: React.FC<prop> = (props: prop) => {
  const { pair } = props;
  const [data, setData] = useState([{ time: "2022-11-13", value: 16661.47 }]);
  const [price, setPrice] = useState(0);

  const getHistoricalPrice = async () => {
    let currency1API = names[pair];

    //console.log(currency1API);

    let string =
      "https://api.coingecko.com/api/v3/coins/" +
      currency1API +
      "/market_chart?vs_currency=usd&days=1000";
    const response = await fetch(string);
    const content = await response.json();
    let historicalData = [];

    for (let i of content.prices) {
      const tm = JSON.stringify(new Date(i[0])).slice(1, 11);
      historicalData.push({ time: tm, value: i[1] });
    }

    //console.log(historicalData);
    setData(historicalData);
  };

  const getPrice = async () => {
    let currency1API = names[pair];
    let string = "https://api.coingecko.com/api/v3/coins/" + currency1API;
    const response = await fetch(string);
    const content = await response.json();
    // console.log(content.market_data.current_price.usd);

    setPrice(content.market_data.current_price.usd);
  };

  useEffect(() => {
    getHistoricalPrice();
    setPrice(0);
  }, [pair]);

  setInterval(function () {
    getPrice();
  }, 5000);

  useEffect(() => {
    getHistoricalPrice();
  }, []);

  return (
    <Box>
      <Grid container spacing={4}>
        <Slide in={true} direction="up" timeout={250}>
          <Grid item xs={8}>
            <TradeInformation data={data!} />
          </Grid>
        </Slide>

        <Slide in={true} direction="up" timeout={250}>
          <Grid item xs={4}>
            <FunctionalContainer pair={pair!} price={price!} />
          </Grid>
        </Slide>

        <Slide in={true} direction="up" timeout={250}>
          <Grid item xs={8}>
            <History />
          </Grid>
        </Slide>

        <Slide in={true} direction="up" timeout={250}>
          <Grid item xs={4}>
            <TradePairs />
          </Grid>
        </Slide>
      </Grid>
    </Box>
  );
};

export default TradePageContainer;

//developer https://github.com/SergeyBarshin
