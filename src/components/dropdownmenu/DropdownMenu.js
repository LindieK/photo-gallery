import React, { useContext, useRef } from "react";
import Avatar from "react-avatar";
import styled from "styled-components";
import { Link } from "react-router-dom";

import defaultPic from "../../assets/profile.png";
import MenuItem from "../menuitem/MenuItem";
import Toggler from "../toggler/Toggler";
import { useDetectOutsideClick } from "../../helpers/useDetectOutsideClick";
import { ThemeContext } from "../../context/ThemeContext";

const MENU_OPTIONS = [
  {
    text: "Home",
    linkTo: "/",
  },
  {
    text: "Profile",
    linkTo: "/profile",
  },
  {
    text: "Bookmarks",
    linkTo: "/profile",
  },
];

const StyledDropdown = styled.div`
  background: ${({ theme }) => theme.background};
  position: absolute;
  top: 90px;
  right: 0;
  width: 250px;
  padding: 1em;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const AvatarButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectOutsideClick(dropdownRef, false);
  const { toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AvatarButton onClick={toggleMenu}>
        <Avatar
          name="Default"
          className="profile-icon"
          src={defaultPic}
          size={50}
          alt="user profile picture"
          round={true}
        />
      </AvatarButton>
      <StyledDropdown
        ref={dropdownRef}
        className={isOpen ? "active" : "inactive"}
      >
        <MenuItem>@lindaokorie</MenuItem>
        <hr />
        {MENU_OPTIONS.map((item) => (
          <MenuItem>
            <Link to={item.linkTo}>{item.text}</Link>
          </MenuItem>
        ))}
        <hr />
        <MenuItem>
          <p>Night Mode</p>
          <Toggler onClick={toggleTheme} />
        </MenuItem>
        <MenuItem>Log Out</MenuItem>
      </StyledDropdown>
    </>
  );
};
export default DropdownMenu;
