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
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, source }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderFour title>{title}</HeaderFour>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <UtilityList>
            <ExternalLinks href={source}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
