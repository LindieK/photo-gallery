import React, { useState } from "react";

import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { useAuth } from "../context/AuthContext";
import {
  LogoText,
  AuthenticationForm,
  AuthenticationPageContainer,
  HeaderTextContainer,
} from "../common/CommonStyles";

export default function ResetPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState({
    value: "",
    hasError: false,
  });
  const [error, setError] = useState("");

  const checkEmail = (value) => {
    const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (value === "") {
      setError("Please enter an email");
      setEmail({ ...email, hasError: true });
    } else if (emailRegEx.test(value)) {
      setError("");
      setEmail({ ...email, hasError: false });
    } else {
      setError(`Please enter a valid email like "example@domain.com"`);
      setEmail({ ...email, hasError: true });
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setEmail({ ...email, value: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPassword(email.value);
  };

  return (
    <AuthenticationPageContainer>
      <LogoText>PG</LogoText>
      <HeaderTextContainer>
        <h3 className="header-text">Reset Password</h3>
        <h4 className="sub-header">
          Enter your email and if you have an account we will send you a link to
          reset your password
        </h4>
      </HeaderTextContainer>

      <AuthenticationForm>
        <Input
          name="email"
          label="E-mail*"
          type="email"
          placeholderText="E-mail"
          value={email.value}
          error={error}
          hasError={email.hasError}
          handleChange={handleChange}
          handleBlur={() => checkEmail(email.value)}
        />
        <Button
          text="Send Link"
          handleClick={handleSubmit}
          disabled={email.hasError || !email.value}
        />
      </AuthenticationForm>
    </AuthenticationPageContainer>
  );
}
