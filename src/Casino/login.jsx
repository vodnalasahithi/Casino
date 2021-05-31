import React, { useState } from "react";
import LoginForm from "./loginForm";
import "./login.css";
import { Avatar } from "@material-ui/core";

const Login = () => {
  const [modal, setModal] = useState(false);
  const user = localStorage.getItem("userName");
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="login-user">
      {(user === "Guest") | !user ? (
        <div className="button-container">
        <button
          className={"button"}
          type="submit"
          onClick={() => openModal()}
        >
          Login
        </button>
        </div>
      ) : null}
      {user && (
        <div className="guest-container">
          <Avatar src="/broken-image.jpg" />
          <p>{user}</p>
        </div>
      )}
      {modal && (
        <div>
          <LoginForm show={modal} onClose={closeModal} />
        </div>
      )}
    </div>
  );
};

export default Login;
