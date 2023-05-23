import React from "react";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { authServices } from "./services/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ProtectedRoutes from "./protectedRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

const App = () => {
  authServices.authStateStatus();

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#ce93d8",
      },
      background: {
        default: "#2f2f2f",
        paper: "#121212",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
