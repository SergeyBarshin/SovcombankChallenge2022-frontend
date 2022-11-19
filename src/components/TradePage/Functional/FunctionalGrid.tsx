import React from "react";
import AmounSlide from "./FuncComponents/AmounSlide";
import AmountField from "./FuncComponents/AmountField";
import Stack from "@mui/material/Stack";
import DealButton from "./FuncComponents/DealButton";
import OfferButton from "./FuncComponents/OfferButton";
import FuncHeader from "./FuncComponents/FuncHeader";

const FunctionalGrid: React.FC = () => {
  const [dealType, setDealType] = React.useState<string | null>("buy");

  return (
    <Stack spacing={3}>
      <FuncHeader />

      <DealButton dealType={dealType!} setDealType={setDealType} />
      <AmountField />
      <AmounSlide />
      <OfferButton dealType={dealType!} />
    </Stack>
  );
};

export default FunctionalGrid;
