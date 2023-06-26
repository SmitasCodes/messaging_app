import React, { useState } from "react";
import { useSelector } from "react-redux";
import { authServices } from "../services/auth";
import { Link } from "react-router-dom";
import NewChannelModal from "./Channels/NewChannelModal";
import ReactModal from "react-modal";
import Channelslist from "./Channels/Channelslist/Channelslist";

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
    <div className="w-1/4 max-w-channels bg-sky-300 h-screen min-w-channels float-left max-md:w-20 max-sm:w-16 relative">
      <div>
        {loggedIn ? (
          <div>
            <ul className="px-2">
              <li className="h-10 flex items-center justify-center px-2 mr-1 rounded-md bg-sky-200 border-2 border-sky-600 hover:bg-sky-600 transition my-1  cursor-pointer">
                <Link to="/" onClick={openModal}>
                  Add Channel
                </Link>
              </li>

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
            </ul>
            <Channelslist />
            <ul className="px-2 self-end absolute w-full bottom-1">
              <li className="h-10 flex items-center justify-center px-2 mr-1 rounded-md bg-sky-200 border-2 border-sky-600 hover:bg-sky-600 transition my-1  cursor-pointer">
                <a onClick={signOutHandler}>Sign Out</a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul className="px-2">
              <li className="h-10 flex items-center justify-center px-2 rounded-md bg-sky-200 border-2 border-sky-600 hover:bg-sky-600 transition my-1 cursor-pointer">
                <Link to="/login">Login</Link>
              </li>
              <li className="h-10 flex items-center justify-center px-2 rounded-md bg-sky-200 border-2 border-sky-600 hover:bg-sky-600 transition my-1 cursor-pointer">
                <Link to="/signup">Sign up</Link>
              </li>
            </ul>
            <Channelslist />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
