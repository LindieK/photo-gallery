import styled from "styled-components";

import breakpoint from "../../common/Breakpoints";
import HeroPic from "../../assets/mountains-kai-oberhauser.webp";
import Search from "../search/Search";

const StyledHero = styled.div`
  background-image: url(${HeroPic});
  background-position: center;
  padding: 2em;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and ${breakpoint.device.md} {
    justify-content: center;
  }
  @media only screen and ${breakpoint.device.lg} {
    height: 55vh;
    padding: 3em;
  }
`;

const HeroTextSection = styled.div`
  text-align: center;
  color: rgba(0, 0, 0, 0.87);

  h1 {
    font-size: 1.5em;
  }
  p {
    font-size: 0.89em;
  }

  @media only screen and ${breakpoint.device.md} {
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1em;
    }
  }

  @media only screen and ${breakpoint.device.lg} {
    h1 {
      font-size: 3.25em;
    }
  }
`;

const SearchContainer = styled.div`
  width: 100%;

  @media only screen and ${breakpoint.device.sm} {
    width: 80%;
  }

  @media only screen and ${breakpoint.device.md} {
    width: 60%;
  }

  @media only screen and ${breakpoint.device.lg} {
    width: 40%;
  }
`;

const Hero = (props) => {
  const { searchTerm, /*handleSearchTermChange,*/ handleFormSubmit } = props;

  return (
    <StyledHero>
      <HeroTextSection>
        <h1> Discover the art of photography</h1>
        <p>
          Search for and collect great stock photos shared by creators all in
          one place.
        </p>
      </HeroTextSection>
      <SearchContainer>
        <Search
          searchTerm={searchTerm}
          //handleSearchTermChange={handleSearchTermChange}
          handleFormSubmit={handleFormSubmit}
        />
      </SearchContainer>
    </StyledHero>
  );
};
export default Hero;
