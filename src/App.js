import React, { useState, useEffect } from "react";

import "./App.css";
import logo from "./casino.png";
import Casino from "./Casino/casino";
import Login from "./Casino/login";
import LoginForm from "./Casino/loginForm";

function App() {
  const [modal, setModal] = useState(true);
  const [balance, setBalance] = useState(localStorage.getItem("balance"));

  useEffect(() => {
    setBalance(localStorage.getItem("balance"));
  }, [localStorage.getItem("balance")]);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="App">
      {localStorage.getItem("userName") ? (
        <div>
          <header className={"page-header"}>
            <img src={logo} alt="logo" className="page-header-image" />
            <div className="page-header-balance-container">
              <Login />
              <p className="page-header-balance">Your balance : ${balance}</p>
            </div>
          </header>
          <content>
            <div>
              <Casino />
            </div>
          </content>
          <footer className={"footer"}>© 2021 Copyright: XXXXXXX.com</footer>
        </div>
      ) : (
        <LoginForm show={modal} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
