import React, { Dispatch, SetStateAction } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link as RouterLink } from "react-router-dom";
import List from "./List";
import { IconButton, Box } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useNavigate } from "react-router-dom";

interface prop {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<prop> = (props: prop) => {
  const { dark, setDark } = props;
  const theme = useTheme();

  const changeTheme = (): void => {
    setDark(!dark);
  };
  const navigate = useNavigate();
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

        <Box sx={{ paddingX: 2 }}>
          <List />
        </Box>

        <Box sx={{ paddingRight: 3 }}>
          <IconButton
            aria-label="delete"
            sx={{ borderRadius: 2 }}
            onClick={changeTheme}
          >
            {dark === true ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Box>

        <ButtonGroup disableElevation>
          <Button
            href=""
            variant="outlined"
            onClick={() => {
              navigate("signIn");
            }}
          >
            Login
          </Button>
          <Button
            href=""
            variant="contained"
            onClick={() => {
              navigate("signUp");
            }}
          >
            Registration
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
