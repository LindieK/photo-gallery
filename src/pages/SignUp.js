import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/button/Button";
import Input from "../components/input/Input";
import PasswordInput from "../components/input/PasswordInput";
import { useAuth } from "../context/AuthContext";
import {
  LogoText,
  AuthenticationForm,
  AuthenticationPageContainer,
  HeaderTextContainer,
  LoginText,
} from "../common/CommonStyles";

const SignUp = () => {
  const { signup } = useAuth();
  const [passwordStrength, setPasswordStrength] = useState("");
  const [username, setUsername] = useState({
    value: "",
    hasError: false,
  });
  const [email, setEmail] = useState({
    value: "",
    hasError: false,
  });
  const [password, setPassword] = useState({
    value: "",
    hasError: false,
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const checkUsername = (value) => {
    const usernameLengthRegEx = /^.{16,}/;
    const usernameSpecialCharactersRegEx = /[\s!"£$%^&*()-+=.,?@;\\[\]:{}~#¬]/;

    if (value === "") {
      setError({
        ...error,
        username: "Please enter a username",
      });
      setUsername({ ...username, hasError: true });
    } else if (usernameLengthRegEx.test(value)) {
      setError({
        ...error,
        username: "A username can't be longer than 15 characters",
      });
      setUsername({ ...username, hasError: true });
    } else if (usernameSpecialCharactersRegEx.test(value)) {
      console.log("SC", usernameSpecialCharactersRegEx.test(value));
      setError({
        ...error,
        username:
          "A username can't have any spaces or special characters except an underscore (_)",
      });
      setUsername({ ...username, hasError: true });
    } else {
      setError({ ...error, username: "" });
      setUsername({ ...username, hasError: false });
    }
  };

  const checkEmail = (value) => {
    const emailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (value === "") {
      setError({
        ...error,
        email: "Please enter an email",
      });
      setEmail({ ...email, hasError: true });
    } else if (emailRegEx.test(value)) {
      setError({ ...error, email: "" });
      setEmail({ ...email, hasError: false });
    } else {
      setError({
        ...error,
        email: `Please enter a valid email like "example@domain.org"`,
      });
      setEmail({ ...email, hasError: true });
    }
  };

  const checkPasswordStrength = (value) => {
    const strongRegEx = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    );
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );

    if (value === "") {
      setError({
        ...error,
        password: "Please enter a password",
      });
      setPassword({ ...password, hasError: true });
    } else if (strongRegEx.test(value)) {
      setPasswordStrength("100");
      setPassword({ ...password, hasError: false });
    } else if (mediumRegex.test(value)) {
      setPasswordStrength("60");
      setPassword({ ...password, hasError: false });
    } else {
      setPasswordStrength("30");
      setPassword({ ...password, hasError: false });
    }
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "username":
        setUsername({ ...username, value: value });
        break;
      case "email":
        setEmail({ ...email, value: value });
        break;
      case "password":
        setPassword({ ...password, value: value });
        break;
      default:
        break;
    }
  };

  const handleBlur = (e) => {
    let name = e.target.name;

    switch (name) {
      case "username":
        checkUsername(username.value);
        break;
      case "email":
        checkEmail(email.value);
        break;
      case "password":
        checkPasswordStrength(password.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username.value, email.value, password.value);
  };

  return (
    <AuthenticationPageContainer>
      <LogoText>PG</LogoText>
      <HeaderTextContainer>
        <h3 className="header-text">Sign Up</h3>
        <h4 className="sub-header">
          View all the awesome pictures of Unsplash here!
        </h4>
      </HeaderTextContainer>

      <AuthenticationForm>
        <Input
          name="username"
          label="Username*"
          type="text"
          placeholderText="Username"
          value={username}
          error={error.username}
          hasError={username.hasError}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Input
          name="email"
          label="E-mail*"
          type="email"
          placeholderText="E-mail"
          value={email}
          error={error.email}
          hasError={email.hasError}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <PasswordInput
          name="password"
          label="Password*"
          placeholderText="Password"
          value={password.value}
          error={error.password}
          hasError={password.hasError}
          passwordStrength={passwordStrength}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Button
          text="Sign Up"
          handleClick={handleSubmit}
          disabled={
            username.hasError ||
            email.hasError ||
            password.hasError ||
            !email.value ||
            !password.value ||
            !username.value
          }
        />

        <LoginText>
          Already have an account? <Link to="/login">Log In</Link>
        </LoginText>
      </AuthenticationForm>
    </AuthenticationPageContainer>
  );
};
export default SignUp;
