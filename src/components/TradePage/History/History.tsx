import React from "react";
import PaperCard from "../PaperCard";
import HistoryGrid from "./HistoryGrid";
const History = () => {
  return <PaperCard childComp={<HistoryGrid />} />;
};

export default History;
