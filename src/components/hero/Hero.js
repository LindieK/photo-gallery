import styled from "styled-components";

import breakpoint from "../../common/Breakpoints";
import HeroPic from "../../assets/mountains-kai-oberhauser.jpg";
import Button from "../button/Button";

const StyledHero = styled.div`
  background-image: url(${HeroPic});
  background-position: center;
  padding: 2em;

  @media only screen and ${breakpoint.device.lg} {
    height: 50vh;
    padding: 3em;
  }
`;

const HeroTextSection = styled.div`
  text-align: center;

  @media only screen and ${breakpoint.device.lg} {
    h1 {
      font-size: 3.25em;
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <HeroTextSection>
        <h1> Discover the art of photography</h1>
        <p>
          Search for and collect great stock photos shared by creators all in
          one place.
        </p>
        <Button text="Get Started" size="1em" />
      </HeroTextSection>
    </StyledHero>
  );
}
