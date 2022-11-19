import React from "react";
import PaperCard from "./PaperCard";
import TraidPairsList from "./TraidPairsList";

const TradePairs = () => {
  return <PaperCard childComp={<TraidPairsList />} />;
};

export default TradePairs;
