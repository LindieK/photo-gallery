import styled from "styled-components";
import breakpoints from "./Breakpoints";

export const LogoText = styled.h3`
  font-weight: 800;
  font-size: 2em;
  color: #504cca;

  span {
    font-size: 1em;
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
  }

  .sub-header {
    color: #929292;
    font-weight: 500;
    margin: 0;
  }
`;

export const SupportText = styled.p`
  margin: 0;
  font-size: 0.88em;
  color: #929292;
`;
