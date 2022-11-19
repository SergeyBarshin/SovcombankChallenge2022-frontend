import React from "react";
import Paper from "@mui/material/Paper";

interface PaperCardProps {
  childComp?: React.ReactNode;
}

const PaperCard: React.FC<PaperCardProps> = (props) => {
  const { childComp } = props;

  return (
    <Paper elevation={2} sx={{ padding: 2 }}>
      {childComp}
    </Paper>
  );
};

export default PaperCard;
