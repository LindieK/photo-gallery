import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/button/Button";
import Input from "../components/input/Input";
import {
  LogoText,
  AuthenticationForm,
  AuthenticationPageContainer,
  HeaderTextContainer,
  LoginText,
} from "../common/CommonStyles";

const SignUp = () => {
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
        />
        <Input
          name="email"
          label="E-mail*"
          type="email"
          placeholderText="E-mail"
        />
        <Input
          name="password"
          label="Password*"
          type="password"
          placeholderText="Password"
        />
        <Button text="Sign Up" />

        <LoginText>
          Already have an account? <Link to="/login">Log In</Link>
        </LoginText>
      </AuthenticationForm>
    </AuthenticationPageContainer>
  );
};
export default SignUp;
