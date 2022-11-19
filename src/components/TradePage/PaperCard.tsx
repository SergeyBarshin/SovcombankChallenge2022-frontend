import React from "react";
import Paper from "@mui/material/Paper";

interface PaperCardProps {
  childComp?: React.ReactNode;
}

const PaperCard: React.FC<PaperCardProps> = (props) => {
  const { childComp } = props;

  return (
    <Paper sx={{ padding: 3, height: "100%", boxShadow: 4, borderRadius: 2 }}>
      {childComp}
    </Paper>
  );
};
export default PaperCard;
