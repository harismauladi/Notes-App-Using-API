import React, { useEffect, useState } from "react";
import AuthTamplate from "../templates/AuthTamplate";
import InputForm from "../fragments/InputForm";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const onUsernameChange = (value) => {
    setUserName(value);
  };
  const onEmailChange = (value) => {
    setEmail(value);
  };

  const onPasswordChange = (value) => {
    setPassword(value);
  };

  useEffect(() => {
    setUser({
      name: userName,
      email: email,
      password: password,
    });
  }, [password]);

  const onRegisterHandler = async () => {
    await register(user);
    navigate("/login");
  };

  return (
    <>
      <AuthTamplate type={"register"} onClickHandler={onRegisterHandler}>
        <InputForm
          type={"text"}
          name="username"
          id="username"
          text="Username"
          placeholder="John Doe"
          onChange={onUsernameChange}
        />
        <InputForm
          type={"email"}
          name="email"
          id="email"
          text="Email"
          placeholder="johndoe@gmail.com"
          onChange={onEmailChange}
        />
        <InputForm
          type={"password"}
          name="password"
          id="password"
          text="Password"
          placeholder="****"
          onChange={onPasswordChange}
        />
      </AuthTamplate>
    </>
  );
}

export default Register;
