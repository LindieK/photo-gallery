import styled from "styled-components";
import breakpoint from "./Breakpoints";

/**
 * General
 */
export const SecondaryLink = styled.a`
  background-color: transparent;
  font-size: 1em;
  color: #767676;
  padding: 0.5em 0.6em;
  margin: 0 0.25em;
  border-radius: 5px;
  border: 1.5px solid #d1d1d1;
  cursor: pointer;

  & > span {
    padding-left: 0.5em;
  }
  &:hover {
    color: #000000;
    border: 2px solid #000000;
  }

  @media only screen and (${breakpoint.device.sm}) {
    font-size: 0.8em;

    & > span {
      display: none;
    }
  }
`; //Change colour codes

export const FetchErrorMessage = styled.p`
  width: 90vw;
  font-size: 1.25em;
  text-align: center;
  margin: 0.5em auto;
`;
/**
 * Auth Pages
 */
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
  color: ${({ theme }) => theme.primary};

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
    color: ${({ theme }) => theme.text87};

    @media only screen and ${breakpoint.device.xlg} {
      font-size: 4em;
    }
  }

  .sub-header {
    color: ${({ theme }) => theme.text60};
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
  color: ${({ theme }) => theme.text60};
`;

export const LoginText = styled(SupportText)`
  text-align: center;
  margin-top: 1em;

  a {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }

  @media only screen and ${breakpoint.device.xlg} {
    font-size: 1.76em;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.75em;
  color: ${({ theme }) => theme.error};
  margin: 0.5em 0;
`;

/**
 * Modal Components
 */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;

export const ModalWrapper = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
`;
