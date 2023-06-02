import React from "react";
import { useSelector } from "react-redux";
import { authServices } from "../services/auth";
import { Link, Navigate } from "react-router-dom";

const Nav = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  const signOutHandler = () => {
    authServices.signOutService();
  };

  return (
    <div>
      <div>
        {loggedIn ? (
          <div>
            <a onClick={signOutHandler}>LogOut</a>
            <Link to="/newchannel">
              Add channel
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login" color="textPrimary">
              Login
            </Link>
            <Link to="/signup" color="textPrimary">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
