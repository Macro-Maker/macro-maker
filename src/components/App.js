import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
    
    <div className="logobox">
        <div className="logo">
            <img className="logoimg" src="logo.png" />
        </div>
      </div>
      {/* <div className="app">
        <div className="getstarted">
            Get started by clicking the button below!
        </div>
        <nav className="navigator">
          <Link to="Login" className="login-nav">
          <img src="icons8-checkmark-69 .png"/>
          </Link>
        </nav>
      </div> */}

      <div></div>
      <Outlet />
    </>
  );
};

export default App;
