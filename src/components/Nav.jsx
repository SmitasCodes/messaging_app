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
    <div className="bg-sky-400 h-12 flex justify-end flex-wrap px-2 py-1">
      <div>
        {loggedIn ? (
          <div className="flex">
            <Link
              to="/"
              onClick={openModal}
              className="h-10 flex items-center justify-center px-2 mr-1 rounded-md bg-sky-200 border-2 border-sky-600 hover:bg-sky-600 transition max-md:text-sm"
            >
              Add Channel
            </Link>
            <a
              onClick={signOutHandler}
              className="h-10 flex items-center justify-center px-2  mr-1 rounded-md bg-sky-200 border-2 border-sky-600 cursor-pointer hover:bg-sky-600 transition max-md:text-sm"
            >
              Sign Out
            </a>
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
          <div className="flex">
            <Link
              to="/login"
              color="textPrimary"
              className="h-10 flex items-center justify-center px-2 mr-1 rounded-md bg-sky-200 border-2 border-sky-600 hover:bg-sky-600 transition max-md:text-sm"
            >
              Login
            </Link>
            <Link
              to="/signup"
              color="textPrimary"
              className="h-10 flex items-center justify-center px-2 mr-1 rounded-md bg-sky-200 border-2 border-sky-600 hover:bg-sky-600 transition max-md:text-sm"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
