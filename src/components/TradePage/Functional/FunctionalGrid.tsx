import React from "react";
import AmounSlide from "./FuncComponents/AmounSlide";
import AmountField from "./FuncComponents/AmountField";
import Stack from "@mui/material/Stack";
import DealButton from "./FuncComponents/DealButton";
import OfferButton from "./FuncComponents/OfferButton";
import FuncHeader from "./FuncComponents/FuncHeader";

interface prop {
  pair: string;
  price: number;
}

const FunctionalGrid: React.FC<prop> = (props: prop) => {
  const { pair, price } = props;

  const [dealType, setDealType] = React.useState<string | null>("buy");

  return (
    <Stack spacing={3}>
      <FuncHeader pair={pair!} price={price!} />

      <DealButton dealType={dealType!} setDealType={setDealType} />
      <AmountField />
      <AmounSlide />
      <OfferButton dealType={dealType!} />
    </Stack>
  );
};

export default FunctionalGrid;
