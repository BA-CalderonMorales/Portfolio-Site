import styled from 'styled-components';


export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`
export const Img = styled.img`
  padding-top: 25px;
  width:250px;
  height:150px;
  object-fit: cover;
  overflow: hidden;
`

export const BlogCard = styled.div`
  text-align: center;
  width: 320px;
  height: 460px;
  background-color: #273043; 
  border-radius: 2rem;
  box-shadow: 1rem 1rem 2.25rem 1rem rgba(1,2,15);
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  z-index: 20;
  width: 100%;
  color: whitesmoke;
`;

export const HeaderFour = styled.h4`
  font-weight: 200;
  letter-spacing: 2px;
  color: whitesmoke;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
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
  font-family: 'Droid Serif', serif;
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
    padding: .3rem;
    margin: 1rem 4rem 1rem;
    font-size: 1.20rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1rem 6rem 1rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

export const ExternalLinks = styled.a`
color: black;
background-color: whitesmoke;
font-size: 1.6rem;
padding:1rem 1.5rem;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #273043;
  color: whitesmoke;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: none;
}
`
export const Tag = styled.li`
color: whitesmoke;
font-size: 1.5rem;
`