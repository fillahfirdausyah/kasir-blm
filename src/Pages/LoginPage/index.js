import React, { useState } from "react";
import api from "../../Helpers/api-endpoint";
import "./style.css";

import LoginIcon from "../../Assets/icon/login.svg";

function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: username,
      password,
    };

    api.post("/api/auth/login", userData).then((res) => console.log(res.data));
  };

  return (
    <div className="loginPage">
      {/* <div className="container"> */}
      <div className="loginLeft">
        <img src={LoginIcon} alt="" />
      </div>
      <div className="loginRight">
        <div className="loginFormWrapper">
          <h1>Login</h1>
          <form onSubmit={loginHandler}>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button type="sumbit" className="btn btn-login w-100 mt-5">
              Login
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Loginpage;
