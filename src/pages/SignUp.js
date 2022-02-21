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
  LoginText,
} from "../common/CommonStyles";

const SignUp = () => {
  const { signup } = useAuth();
  const [passwordStrength, setPasswordStrength] = useState("");
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validate = (name, value) => {
    let isValid;
    switch (name) {
      case "username":
        let userNameRegEx = "";
        isValid = userNameRegEx.test(value);
        break;
      case "email":
        let emailRegEx = "";
        isValid = emailRegEx.test(value);
        break;
      case "password":
        let passwordRegEx = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
        );
        isValid = passwordRegEx.test(value);
        break;
      default:
        break;
    }

    return isValid;
  };

  const validatePassword = (value) => {
    const strongRegEx = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    );
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );

    if (strongRegEx.test(value)) {
      setPasswordStrength("green");
    } else if (mediumRegex.test(value)) {
      setPasswordStrength("orange");
    }
  };
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = userInfo;
    await signup(username, email, password);
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
          value={userInfo.username}
          handleChange={handleChange}
        />
        <Input
          name="email"
          label="E-mail*"
          type="email"
          placeholderText="E-mail"
          value={userInfo.email}
          handleChange={handleChange}
        />
        <Input
          name="password"
          label="Password*"
          type="password"
          placeholderText="Password"
          value={userInfo.password}
          handleChange={handleChange}
        />
        <Button text="Sign Up" handleClick={handleSubmit} />

        <LoginText>
          Already have an account? <Link to="/login">Log In</Link>
        </LoginText>
      </AuthenticationForm>
    </AuthenticationPageContainer>
  );
};
export default SignUp;
