import React, { Dispatch, SetStateAction } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface prop {
  dealType: string;
  setDealType: Dispatch<SetStateAction<string | null>>;
}

const DealButton: React.FC<prop> = (props: prop) => {
  const { dealType, setDealType } = props;
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setDealType(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={dealType}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      fullWidth
      size="small"
    >
      <ToggleButton value="buy" color="success">
        Buy
      </ToggleButton>
      <ToggleButton value="sell" color="error">
        Sell
      </ToggleButton>
      {/* <ButtonGroup fullWidth disableElevation>
       
        <Button variant="contained" color="success">
          Buy
        </Button>
        <Button variant="outlined" color="error">
          Sell
        </Button>
  </ButtonGroup>*/}
    </ToggleButtonGroup>
  );
};

export default DealButton;
