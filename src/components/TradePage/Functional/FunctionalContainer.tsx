import React from "react";
import PaperCard from "../PaperCard";
import FunctionalGrid from "./FunctionalGrid";
import { Box } from "@mui/material";
const FunctionalContainer: React.FC = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <PaperCard childComp={<FunctionalGrid />} />
    </Box>
  );
};

export default FunctionalContainer;
