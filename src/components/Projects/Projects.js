import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderFour,
  Hr,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle accessKey="title">Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, source }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderFour title="true">{title}</HeaderFour>
            <Hr />
          </TitleContent>
          <CardInfo>
            <UtilityList>
              <ExternalLinks href={source}>Code</ExternalLinks>
            </UtilityList>
            {description}
          </CardInfo>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
