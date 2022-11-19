import React from "react";
import Grid from "@mui/material/Grid";
import PaperCard from "../TradePage/PaperCard";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Avatar,
  Stack,
  Typography,
  Slide,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import PixOutlinedIcon from "@mui/icons-material/PixOutlined";

const Profile = () => {
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <PaperCard
            childComp={
              <Box>
                {" "}
                <List sx={{ padding: 0 }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <AttachMoneyOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="USD" />
                      1000
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <CurrencyBitcoinIcon />
                      </ListItemIcon>
                      <ListItemText primary="BTC/USD  " />1
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PixOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="ETH/USD  " />4
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            }
          />
        </Grid>
        <Grid item xs={8}>
          <PaperCard
            childComp={
              <Box>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Avatar alt="Remy Sharp" sx={{ width: 150, height: 150 }} />
                  <Typography variant="h2">email.adress@gmail.com</Typography>
                </Stack>
              </Box>
            }
          />
        </Grid>{" "}
      </Grid>
    </Slide>
  );
};

export default Profile;
