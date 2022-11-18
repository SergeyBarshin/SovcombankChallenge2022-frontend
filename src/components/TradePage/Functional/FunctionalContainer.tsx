import React from "react";
import PaperCard from "../PaperCard";
import Box from "@mui/material/Box";

const FunctionalContainer = () => {
  return (
    <div>
      <PaperCard childComp={<Box>Тут функционал обменов</Box>} />
    </div>
  );
};

export default FunctionalContainer;
