import React from "react";
import styled from "styled-components";
import Avatar from "react-avatar";

import defaultPic from "../assets/profile.png";
import Button from "../components/button/Button";
import breakpoint from "../common/Breakpoints";

const ProfilePageLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
  }
`;

const CollectionSection = styled.div``;

const ProfileAside = styled.div``;

const UserInfo = styled.div``;

function Profile({ user, handleClick }) {
  return (
    <ProfilePageLayout>
      <ProfileAside>
        <Avatar
          name={/*user.username ||*/ "Default"}
          src={/*user.image ||*/ defaultPic}
          alt="user profile picture"
          round={true}
          //onClick={handleClick}
        />
        <UserInfo>
          <h2>Chris Pratt</h2>
          <h4>Music loving, Anime loving, Movie acting bloke</h4>
        </UserInfo>
        <Button text="Edit Profile" secondary />
      </ProfileAside>
      <CollectionSection>
        <h4>Collection(2)</h4>
      </CollectionSection>
    </ProfilePageLayout>
  );
}

export default Profile;
