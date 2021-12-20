import React from "react";
import "./style.css";

import LoginIcon from "../../Assets/icon/login.svg";

function index() {
  return (
    <div className="loginPage">
      {/* <div className="container"> */}
      <div className="loginLeft">
        <img src={LoginIcon} alt="" />
      </div>
      <div className="loginRight">
        <div className="loginFormWrapper">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
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

export default index;
