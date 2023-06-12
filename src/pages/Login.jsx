import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InputForm from "../fragments/InputForm";
import AuthTamplate from "../templates/AuthTamplate";
import { login } from "../utils/network-data";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, [password]);

  const onEmailHandler = (value) => {
    setEmail(value);
  };

  const onPasswordHandler = (value) => {
    setPassword(value);
  };

  const onLoginHandler = async () => {
    const { eror, data } = await login({ email, password });

    if (!eror) {
      onLogin(data);
      console.log("Succsess");
    }
  };
  return (
    <>
      <AuthTamplate type={"login"} onClickHandler={onLoginHandler}>
        <InputForm
          type={"email"}
          name="email"
          id="email"
          text="Email"
          placeholder="username@gmail.com"
          onChange={onEmailHandler}
        />
        <InputForm
          type={"password"}
          name="password"
          id="password"
          text="Password"
          placeholder="****"
          onChange={onPasswordHandler}
        />
      </AuthTamplate>
    </>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default Login;
