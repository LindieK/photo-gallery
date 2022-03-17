import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import Button from "../button/Button";
import breakpoint from "../../common/Breakpoints";

const StyledNav = styled.nav`
  background: ${(props) =>
    props.navStatus ? "transparent" : ({ theme }) => theme.background};
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  border: ${(props) =>
    props.navStatus ? ({ theme }) => theme.border : "none"};
  z-index: 2;
  transition: background 1s;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;

  .profile-icon {
    margin-right: 0.75em;

    @media only screen and ${breakpoint.device.md} {
      margin-right: 1em;
    }
  }

  span {
    margin: 0 0.5em;
  }
  span:first-child {
    font-size: 0.8em;
  }

  span a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }
`;

const NavLogoText = styled.h3`
  font-weight: 800;
  font-size: 1.5em;
  padding-left: 0.75em;
  margin: 0.75em 0;
  color: ${({ theme }) => theme.primary};

  @media only screen and ${breakpoint.device.md} {
    padding-left: 1em;
  }
  @media only screen and ${breakpoint.device.xlg} {
    font-size: 2.25em;
  }
`;

const HeroNav = () => {
  const [navPositionTop, setNavPosition] = useState(true);
  let scrollListener = null;
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    scrollListener = document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (navPositionTop) {
          setNavPosition(false);
        }
      } else {
        if (!navPositionTop) {
          setNavPosition(true);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <StyledNav navStatus={navPositionTop}>
      <NavLogoText>PG</NavLogoText>
      <NavItems navStatus={navPositionTop}>
        <span>
          <Link to="/login">Log In</Link>
        </span>
        <span>
          <Button text="Sign Up" handleClick={handleSignUpClick} />
        </span>
      </NavItems>
    </StyledNav>
  );
};
export default HeroNav;
