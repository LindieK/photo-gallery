import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";

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

const SignUp = () => {
  return (
    <PageContainer>
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
          Already have an account? <a>Log In</a>
        </LoginText>
      </AuthenticationForm>
    </PageContainer>
  );
};
export default SignUp;
