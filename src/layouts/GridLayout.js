import styled from "styled-components";
import breakpoint from "../common/Breakpoints";

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

const GridLayout = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};
export default GridLayout;
