import React from "react";

import Button from "../components/button/Button";
import Input from "../components/input/Input";
import {
  LogoText,
  AuthenticationForm,
  AuthenticationPageContainer,
  HeaderTextContainer,
  LoginText,
} from "../common/CommonStyles";

const Login = () => {
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
        />
        <Input
          name="password"
          label="Password*"
          type="password"
          placeholderText="Password"
        />
        <Button text="Log In" />

        <LoginText>
          Don't have an account? <a>Sign Up</a>
        </LoginText>
      </AuthenticationForm>
    </AuthenticationPageContainer>
  );
};
export default Login;
