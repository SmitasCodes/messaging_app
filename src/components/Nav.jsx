import React, { useState } from "react";
import { useSelector } from "react-redux";
import { authServices } from "../services/auth";
import { Link } from "react-router-dom";
import NewChannelModal from "./Channels/NewChannelModal";
import ReactModal from "react-modal";

const Nav = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  const signOutHandler = () => {
    authServices.signOutService();
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div>
        {loggedIn ? (
          <div>
            <a onClick={signOutHandler}>LogOut</a>
            <Link to="/" onClick={openModal}>
              Add Channel
            </Link>
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Modal"
              className="bg-none sm:max-w-sm mx-auto"
              overlayClassName="fixed inset-0 bg-black bg-opacity-75 px-4 "
              ariaHideApp={false}
            >
              {<NewChannelModal />}
            </ReactModal>
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
