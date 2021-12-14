import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import Avatar from "react-avatar";

import LazyImageCard from "../lazyimage/LazyImageCard";
import defaultPic from "../../assets/profile.png";

const OptionsPane = styled.div`
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.primaryText};
`;

const AuthorInfo = styled.div`
  display: flex;

  p {
    margin-left: 0.25em;
  }
`;

const Tile = ({ photo }) => {
  return (
    <div>
      <LazyImageCard image={defaultPic} />
      <OptionsPane>
        <AuthorInfo>
          <Avatar
            name={/*user.username ||*/ "Default"}
            src={/*user.image ||*/ defaultPic}
            size={50}
            alt="author profile picture"
            round={true}
            //onClick={handleClick}
          />
          <p>Author Name</p>
        </AuthorInfo>
        <FontAwesomeIcon icon={faEllipsisH} />
      </OptionsPane>
    </div>
  );
};
export default Tile;
