import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
  }
`;
export const Img = styled.img`
  padding-top: 25px;
  width: 250px;
  height: 150px;
  object-fit: cover;
  overflow: hidden;
`;

export const BlogCard = styled.div`
  text-align: center;
  width: 320px;
  height: 460px;
  background-color: #273043;
  border-radius: 2rem;
  box-shadow: 0.5rem 0.2rem 0.6rem 0.5rem rgba(1, 2, 15);
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  width: 100%;
  color: whitesmoke;
`;

export const HeaderFour = styled.h4`
  font-weight: 200;
  letter-spacing: 2px;
  color: whitesmoke;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title = "title" ? "2.5rem" : "")};
`;

export const Hr = styled.hr`
  width: 15rem;
  height: 3px;
  margin: 2px auto;
  border: 0;
  background: whitesmoke;
`;

export const Intro = styled.div`
  width: 150px;
  margin: 0 auto;
  color: whitesmoke;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 75%;
  color: whitesmoke;
  font-size: 1.25rem;
  margin: 1rem 1rem 1rem 4rem;
  line-height: 16px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    margin: 1.25rem 1rem 1rem 5rem;
    padding: 0;
    text-align: justify;
    line-height: 2rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const ExternalLinks = styled.a`
  color: black;
  background-color: whitesmoke;
  font-size: 2rem;
  display: absolute !important;
  border-radius: 2px;
  padding: 0.5rem;
  transition: 0.5s;
  &:hover {
    background: #273043;
    color: whitesmoke;
  }
`;

export const TagList = styled.ul`
  display: absolute;
  padding: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
export const Tag = styled.li`
  color: whitesmoke;
  font-size: 1.5rem;
`;
