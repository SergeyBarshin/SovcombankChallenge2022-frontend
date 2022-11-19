import React from 'react'
import { Box, List, ListItemButton, ListItemIcon, Chip } from '@mui/material'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import CurrencyYuanOutlinedIcon from '@mui/icons-material/CurrencyYuanOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import CurrencyPoundOutlinedIcon from '@mui/icons-material/CurrencyPoundOutlined';
import { useNavigate } from "react-router-dom";


const TraidPairsList = () => {
    const navigate = useNavigate();


    return (
        <Box>
            <List sx={{ padding: 0 }}>
                <ListItem disablePadding >
                    <ListItemButton href='/trade/btc-usd'>
                        <ListItemIcon>
                            <AttachMoneyOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="BTC/USD" />
                        <Chip label="+0.1%" variant="outlined" color={'success'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton href='/trade/eth-usd'>
                        <ListItemIcon>
                            <EuroOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="ETH/USD  " />
                        <Chip label="-0.4%" variant="outlined" color={'error'} />

                    </ListItemButton>
                </ListItem>

                {/* <ListItem disablePadding>
                    <ListItemButton onDoubleClick={() => {
                        navigate("../gbr-rub");
                    }}>
                        <ListItemIcon>
                            <CurrencyPoundOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="GBR/RUB" />
                        <Chip label="+0.2%" variant="outlined" color={'success'} />

                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onDoubleClick={() => {
                        navigate("../cny-rub");
                    }}>
                        <ListItemIcon>
                            <CurrencyYuanOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="CNY/RUB" />
                        <Chip label="-1%" variant="outlined" color={'error'} />

                    </ListItemButton>
                </ListItem>*/}
            </List>
        </Box >
    )
}

export default TraidPairsList