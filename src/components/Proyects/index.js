import React from "react";
import styled from "styled-components";

import CardProyect from "../CardProyect";
import icons from "../../utils/icons";

import codeStoreimage from "../../assets/codeStore.png";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`;

function Proyects() {
  const [ReactIcon, Sass, Redux, Node, Styled, Firebase, CSS] = icons;

  const CodeStoreIcons = [ReactIcon, CSS, Redux, Firebase];

  return (
    <Container data-scroll-section>
      <CardProyect
        title="Code Store"
        icons={CodeStoreIcons}
        description1="A fully responsive react CRUD application using The Guardian News & Open Weather Map API with Firebase for Database, Auth and Hosting. This app pulls headlines from all the main sections of The Guardian. Users are able to login and leave comments on all articles."
        description2="
        This app features: - Various React hooks such as useEffect, useHistory and useLocation to make API calls and define routes. - Multiple API calls to fetch News and Weather data. - State stored and persisted using Redux and local storage. - User authentication to allow for article comment creation, deletion and editing."
        description3="I worked with The Guardian's style guide to retain brand consitency. MaterializeUI was used for the icons."
        pageLink="https://acerohernan.github.io/code-store/"
        codeLink="https://github.com/acerohernan/code-store"
        image={codeStoreimage}
      />
    </Container>
  );
}

export default Proyects;
