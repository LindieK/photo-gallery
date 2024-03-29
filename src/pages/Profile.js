import React from "react";
import styled from "styled-components";
import Avatar from "react-avatar";

import defaultPic from "../assets/profile.png";
import breakpoint from "../common/Breakpoints";
import Button from "../components/button/Button";
import Tile from "../components/tile/Tile";

const ProfilePageLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};

  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
    padding: 1em;
  }
`;

const CollectionSection = styled.div`
  width: 100%;

  .title {
    color: ${({ theme }) => theme.text87};
    font-size: 1.5em;
    padding-left: 1em;

    @media only screen and ${breakpoint.device.lg} {
      margin-top: 0;
      padding: unset;
    }
  }

  @media only screen and ${breakpoint.device.lg} {
    flex-basis: 75%;
    margin: 0.5em;
  }
`;

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  padding: 1em;

  @media only screen and ${breakpoint.device.md} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and ${breakpoint.device.xlg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProfileAside = styled.div`
  background: ${({ theme }) => theme.panel};
  text-align: center;
  padding: 2em 1em;

  @media only screen and ${breakpoint.device.lg} {
    flex-basis: 25%;
    border-radius: 10px;
    box-shadow: 2px 4px 4px 0 ${({ theme }) => theme.shadow};
    margin: 0.5em;
  }
`;

const UserInfo = styled.div`
  color: ${({ theme }) => theme.text87};

  .description {
    color: ${({ theme }) => theme.text60};
    font-weight: 500;
  }
`;

//TODO: remove user from props will com from local storage
function Profile({ user, handleClick }) {
  return (
    <ProfilePageLayout>
      <ProfileAside>
        <Avatar
          name={/*user.username ||*/ "Default"}
          src={/*user.image ||*/ defaultPic}
          //className="profile"
          size={180}
          alt="user profile picture"
          round={true}
          //onClick={handleClick}
        />
        <UserInfo>
          <h2>Chris Pratt</h2>
          <h4 className="description">
            Music loving, Anime loving, Movie acting bloke
          </h4>
        </UserInfo>
        <Button text="Edit Profile" secondary />
      </ProfileAside>
      <CollectionSection>
        <h4 className="title">Collection(2)</h4>
        {/* TODO: Add no photos section for when thee are no photos to show*/}
        <GridContainer>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </GridContainer>
      </CollectionSection>
    </ProfilePageLayout>
  );
}

export default Profile;
