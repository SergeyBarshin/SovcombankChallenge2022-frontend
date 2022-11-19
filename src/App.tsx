import React, { useState } from "react";
import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material/";
import Header from "./components/Header/Header";
import TradePageContainer from "./components/TradePage/TradePageContainer";
import { darkTheme } from "./theme/darkTheme";
import { lightTheme } from "./theme/lightTheme";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";

function App() {
  const [dark, setDark] = useState<boolean>(true);
  return (
    <Box>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Header dark={dark} setDark={setDark} />

          <Container disableGutters={true} maxWidth="lg" sx={{ paddingY: 4 }}>
            <Routes>
              <Route path="/" element={<h1>Landing</h1>} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="signIn" element={<SignIn />} />
              <Route path="trade" element={<TradePageContainer />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
