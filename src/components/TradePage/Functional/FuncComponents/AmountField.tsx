import React from "react";
import TextField from "@mui/material/TextField";

const AmountField: React.FC = () => {
  return (
    <div>
      <TextField
        label="Amount"
        fullWidth
        variant="outlined"
        helperText="Available Balance: 1000 USD"
      />
    </div>
  );
};

export default AmountField;
