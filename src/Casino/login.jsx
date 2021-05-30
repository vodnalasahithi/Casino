import React, { useState,  } from "react";
import LoginForm from "./loginForm";

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
    <div>
      {user && <p className="page-header-balance">{user}</p>}
      {(user === "Guest") | !user && (
        <button type="submit" onClick={() => openModal()}>
          Login
        </button>
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
