import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import List from "./List";

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      //color={theme.palette.background.default}
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.default,
        paddingX: 4,
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h5"
          color="text.primary"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          <RouterLink
            to="/"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            LOGO
          </RouterLink>
        </Typography>

        <Box sx={{ paddingX: 4 }}>
          <List />
        </Box>

        <ButtonGroup disableElevation>
          <Button href="auth" variant="outlined">
            Login
          </Button>
          <Button href="auth" variant="contained">
            Registration
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
