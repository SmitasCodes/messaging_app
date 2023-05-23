import React, { useEffect, useState } from "react";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { authServices } from "./services/auth";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./protectedRoutes";

const App = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  authServices.authStateStatus();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
