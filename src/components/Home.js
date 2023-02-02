import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
                <div className="getstarted">
            Get started by clicking the button below!
        </div>
        <div className="bouncingarrow">
            <img src="bouncing arrow.gif"/>
        </div>
        <nav className="navigator">
          <Link to="Login" className="login-nav">
          <img src="icons8-checkmark-69 .png"/>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Home;
