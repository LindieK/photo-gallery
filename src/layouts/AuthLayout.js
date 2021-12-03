import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";

import breakpoint from "../common/Breakpoints";
import coverImage from "../assets/Sunset_Waterfall_Landscape_Illustration.jpg";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and ${breakpoint.device.md} {
    flex-direction: row;
  }
`;
const CoverImage = styled.div`
  display: none;
  flex-basis: 55%;
  margin: 0;
  height: 100vh;
  background: url(${coverImage}) no-repeat center center fixed;
  background-size: cover;

  @media only screen and ${breakpoint.device.lg} {
    display: unset;
  }
`;
const FormSection = styled.main`
  position: relative;
  height: 100vh;
  padding: 4em;

  @media only screen and ${breakpoint.device.lg} {
    flex-basis: 45%;
  }
`;

const AuthLayout = () => {
  return (
    <StyledLayout>
      <CoverImage />
      <FormSection>
        <Outlet />
      </FormSection>
    </StyledLayout>
  );
};
export default AuthLayout;
