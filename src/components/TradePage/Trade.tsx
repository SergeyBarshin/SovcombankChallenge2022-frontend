import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import TradePageContainer from "./TradePageContainer";
const Trade = () => {
  const pairs = ["BTC/USD", "ETH/USD", "GBR/RUB", "CNY/RUB"];

  return (
    <Box>
      <Routes>
        <Route
          path="btc-usd"
          element={<TradePageContainer pair={pairs[0]!} />}
        />
        <Route
          path="eth-usd"
          element={<TradePageContainer pair={pairs[1]!} />}
        />
        <Route
          path="gbr-rub"
          element={<TradePageContainer pair={pairs[2]!} />}
        />
        <Route
          path="cny-rub"
          element={<TradePageContainer pair={pairs[3]!} />}
        />
      </Routes>
    </Box>
  );
};

export default Trade;
