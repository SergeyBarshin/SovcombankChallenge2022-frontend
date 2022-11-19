import { Box } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const List: React.FC = () => {
  return (
    <Box>
      <RouterLink
        style={{ color: "inherit", textDecoration: "inherit" }}
        to="trade/btc-usd"
      >
        <Link
          variant="button"
          color="text.primary"
          underline="none"
          sx={{ my: 1, mx: 1.5 }}
        >
          Trade
        </Link>
      </RouterLink>
      <RouterLink
        style={{ color: "inherit", textDecoration: "inherit" }}
        to="/profile"
      >
        <Link
          variant="button"
          color="text.primary"
          underline="none"
          sx={{ my: 1, mx: 1.5 }}
        >
          Profile
        </Link>
      </RouterLink>
      <RouterLink style={{ color: "inherit", textDecoration: "inherit" }} to="">
        <Link
          variant="button"
          color="text.primary"
          underline="none"
          sx={{ my: 1, mx: 1.5 }}
        >
          About
        </Link>
      </RouterLink>
    </Box>
  );
};

export default List;
