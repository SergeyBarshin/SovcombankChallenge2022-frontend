import { Button } from "@mui/material";
import React from "react";

interface OfferButtonProps {
  dealType: string;
}

const OfferButton: React.FC<OfferButtonProps> = (props: OfferButtonProps) => {
  const { dealType } = props;

  return (
    <Button
      variant="contained"
      size="large"
      color={dealType === "buy" ? "success" : "error"}
    >
      {dealType}
    </Button>
  );
};

export default OfferButton;
