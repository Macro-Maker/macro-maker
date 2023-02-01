import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="app">
      <div className="logobox">
        <div className="logo">
            <img className="logoimg" src="Section 1.png" />
        </div>
      </div>
        <nav className="navigator">
          <Link to="/" className="home-nav">
            <img src="icons8-home-69.png"/>
          </Link>
          <Link to="Login" className="login-nav">
          <img src="icons8-checkmark-69.png"/>
          </Link>
          <Link to="Register" className="register-nav">
          <img src="register.svg"/>
          </Link>
        </nav>
      </div>

      <div></div>
      <Outlet />
    </>
  );
};

export default App;
