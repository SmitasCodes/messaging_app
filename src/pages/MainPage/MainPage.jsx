import React from "react";
import { authServices } from "../../services/auth";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const MainPage = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  const signOutHandler = () => {
    authServices.signOutService();
  };

  return (
    <div>
      MainPage
      {loggedIn ? (
        <a onClick={signOutHandler}>LogOut</a>
      ) : (
        <div>
          <Link to="/login">Login </Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
};

export default MainPage;
