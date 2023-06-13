import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AuthTamplate({ children, type, onClickHandler }) {
  return (
    <section className="app-container input-login_container">
      <div className="input-login input-container">
        <h1>{type === "login" ? "Login" : "Register"}</h1>
        {children}
        <button onClick={() => onClickHandler()}>
          {type === "login" ? "Login" : "Register"}
        </button>
        <div className="redirect">
          {" "}
          <p>
            {type === "login" ? "Dont have an account" : "Have an account"} ?{" "}
            {type === "login" ? (
              <Link to={"/register"} className="linkDirect">
                Register
              </Link>
            ) : (
              <Link to={"/login"} className="linkDirect">
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

AuthTamplate.propTypes = {
  children: PropTypes.array,
  type: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default AuthTamplate;
