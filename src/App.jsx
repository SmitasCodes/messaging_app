import React from "react";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { authServices } from "./services/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ProtectedRoutes from "./protectedRoutes";
import NewChannelModal from "./components/Channels/NewChannelModal";

const App = () => {
  authServices.authStateStatus();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/newchannel" element={<NewChannelModal />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
