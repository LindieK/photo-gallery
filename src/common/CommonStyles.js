import styled from "styled-components";
import breakpoint from "./Breakpoints";

export const AuthenticationPageContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  @media only screen and ${breakpoint.device.md} {
    height: 60%;
  }
  @media only screen and ${breakpoint.device.lg} {
    height: unset;
  }
  @media only screen and ${breakpoint.device.xlg} {
    height: 60%;
  }
`;

export const LogoText = styled.h3`
  font-weight: 800;
  font-size: 2em;
  color: #504cca;

  @media only screen and ${breakpoint.device.xlg} {
    font-size: 4em;
  }
`;

export const AuthenticationForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const HeaderTextContainer = styled.hgroup`
  margin: 2em 0;

  .header-text {
    font-size: 2em;
    font-weight: 700;
    line-height: 1.462;
    margin-bottom: 0.25em;
    color: #333333;

    @media only screen and ${breakpoint.device.xlg} {
      font-size: 4em;
    }
  }

  .sub-header {
    color: #929292;
    font-weight: 500;
    margin: 0;

    @media only screen and ${breakpoint.device.xlg} {
      font-size: 2em;
    }
  }
`;

export const SupportText = styled.p`
  margin: 0;
  font-size: 0.88em;
  color: #929292;
`;

export const LoginText = styled(SupportText)`
  text-align: center;
  margin-top: 1em;

  a {
    color: #504cca;
    cursor: pointer;
  }

  @media only screen and ${breakpoint.device.xlg} {
    font-size: 1.76em;
  }
`;
