import React from 'react';
import { DiFirebase, DiGitCommit, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      Capable of working with multiple frontend frameworks and backend databases in Python, JavaScript, C#, and Java languages.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js + Redux <br />
            Angular.js CLI<br />
            Axios <br />
            Backbone.js <br />
            Ampersand.js <br />
            Next.js <br />
            Material-UI <br />
            Semantic-UI <br />
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
          <ListTitle>Source Control & Tech Tools</ListTitle>
          <ListParagraph>
            GitHub <br />
            Azure DevOps <br />
            BitBucket <br />
            Git <br />
            Postman <br />
            Jira <br />
            Notion <br />
            Slack <br />
            Discord <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
