import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  return !loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
