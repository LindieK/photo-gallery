import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { useAuth } from "../context/AuthContext";
import {
  LogoText,
  AuthenticationForm,
  AuthenticationPageContainer,
  HeaderTextContainer,
  ResetPassword,
  LoginText,
} from "../common/CommonStyles";

const Login = () => {
  const [email, setEmail] = useState({
    value: "",
    hasError: false,
  });
  const [password, setPassword] = useState({
    value: "",
    hasError: false,
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    switch (name) {
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

  const checkEmail = (value) => {
    const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

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

  const checkPassword = (value) => {
    if (value === "") {
      setError({
        ...error,
        password: "Please enter a password",
      });
      setPassword({ ...password, hasError: true });
    } else {
      setError({
        ...error,
        password: "",
      });
    }
  };

  const checkFields = (e) => {
    let name = e.target.name;

    switch (name) {
      case "email":
        checkEmail(email.value);
        break;
      case "password":
        checkPassword(password.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email.value, password.value);
  };

  return (
    <AuthenticationPageContainer>
      <LogoText>PG</LogoText>
      <HeaderTextContainer>
        <h3 className="header-text">Welcome Back!</h3>
        <h4 className="sub-header">
          Log in and keep viewing pictures to your heart's content
        </h4>
      </HeaderTextContainer>

      <AuthenticationForm>
        <Input
          name="email"
          label="E-mail*"
          type="email"
          placeholderText="E-mail"
          error={error.email}
          hasError={email.hasError}
          handleChange={handleChange}
          handleBlur={checkFields}
        />
        <Input
          name="password"
          label="Password*"
          type="password"
          error={error.password}
          hasError={password.hasError}
          placeholderText="Password"
          handleChange={handleChange}
          handleBlur={checkFields}
        />
        <ResetPassword>
          <Link to="/resetpassword">Forgot Password?</Link>
        </ResetPassword>

        <Button
          text="Log In"
          handleClick={handleSubmit}
          disabled={
            email.hasError ||
            password.hasError ||
            !email.value ||
            !password.value
          }
        />

        <LoginText>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </LoginText>
      </AuthenticationForm>
    </AuthenticationPageContainer>
  );
};
export default Login;
