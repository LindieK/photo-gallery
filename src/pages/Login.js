import React from "react";
import styled from "styled-components";

import Button from "../components/button/Button";
import Input from "../components/input/Input";
import {
  LogoText,
  AuthenticationForm,
  HeaderTextContainer,
  SupportText,
} from "../common/CommonStyles";

const LoginText = styled(SupportText)`
  text-align: center;
  margin-top: 1em;

  a {
    color: #504cca;
    cursor: pointer;
  }
`;
const PageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Login = () => {
  return (
    <PageContainer>
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
    </PageContainer>
  );
};
export default Login;
