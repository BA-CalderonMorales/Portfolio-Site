import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding-left: 8rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 0rem;
    margin-left: -8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 0rem;
    margin-left: 0rem;
    text-align: justify;
  }
`;
