import React from 'react';
import { DiFirebase, DiGitCommit, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Capable of working with multiple frontend frameworks and backend databases.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js + Redux <br />
            Next.js <br />
            Material-UI <br />
            Styled-Components <br />
            Theme-UI <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Mongoose <br />
            Express <br />
            Node <br />
            Axios <br />
            ASP.NET Core Entity Framework <br />
            MSSQL <br />
            Django REST Framework <br />
            MySQL <br />
            MongoDB <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGitCommit size="3rem" />
        <ListContainer>
          <ListTitle>Source Control</ListTitle>
          <ListParagraph>
            GitHub <br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
