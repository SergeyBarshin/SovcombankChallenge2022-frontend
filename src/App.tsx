//import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material/";
import Header from "./components/Header/Header";
import TradePageContainer from "./components/TradePage/TradePageContainer";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />

          <Container disableGutters={true} maxWidth="lg">
            <Routes>
              <Route path="/" element={<h1>Landing</h1>} />
              <Route path="auth" element={<h1>Auth</h1>} />
              <Route path="trade" element={<TradePageContainer />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
