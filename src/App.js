import React, { useState, useEffect } from "react";

import "./App.css";
import logo from "./casino.png";
import Casino from "./Casino/casino";
import Login from "./Casino/login";
import LoginForm from "./Casino/loginForm";

function App() {

  
  // let balance =localStorage.getItem("balance")
  const [modal, setModal] = useState(true);
  const [balance, setBalance] = useState(localStorage.getItem("balance"));

  useEffect(() => {
  setBalance(localStorage.getItem("balance"));
  }, [localStorage.getItem("balance")])

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="App">
      {localStorage.getItem("userName") ? (
        <div>
          <header className={"page-header"}>
            <img src={logo} alt="looo" className="page-header-image" />
            <div>
              <p className="page-header-balance">your balance : ${balance}</p>
            </div>
            {/* <img src={logo} alt="pic" className="page-header-profile" /> */}
            <Login />
          </header>
          <content>
            <div>
              <Casino />
            </div>
          </content>
          <footer className={"footer"}>sjhakjshkahskh</footer>
        </div>
      ) : (
        <LoginForm show={modal} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
