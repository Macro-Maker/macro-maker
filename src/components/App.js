import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
    <div className="logobox">
        <div className="logo">
            <img src="Section 1.png" />
        </div>
      </div>
      <div className="app">
        <nav className="navigator">
          <Link to="/" className="home-nav">
            <img src="home.svg"/>
          </Link>
          <Link to="Login" className="login-nav">
          <img src="log-in.svg"/>
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
