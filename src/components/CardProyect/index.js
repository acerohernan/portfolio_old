import React from "react";

import {
  Container,
  Main,
  Image,
  Buttons,
  Details,
  Title,
  Text,
  Icons,
  IconContainer,
  ImgContainer,
  SecondImg,
} from "./styles.js";

function CardProyect({
  title,
  icons,
  description1,
  description2,
  description3,
  image,
  codeLink,
  pageLink,
  secondImg,
}) {
  return (
    <Container>
      <Main>
        <ImgContainer>
          <Image src={image} />
          <SecondImg src={secondImg} />
        </ImgContainer>
        <Buttons>
          <a href={pageLink} target="_blank" rel="noreferrer">
            See live
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer">
            View Code
          </a>
        </Buttons>
      </Main>
      <Details>
        <div>
          <Title>{title.toUpperCase()}</Title>
          <Text>
            A fully responsive react CRUD application using The Guardian News &
            Open Weather Map API with Firebase for Database, Auth and Hosting.
            This app pulls headlines from all the main sections of The Guardian.
            Users are able to login and leave comments on all articles.
          </Text>
          <Text>
            This app features: - Various React hooks such as useEffect,
            useHistory and useLocation to make API calls and define routes. -
            Multiple API calls to fetch News and Weather data. - State stored
            and persisted using Redux and local storage. - User authentication
            to allow for article comment creation, deletion and editing.
          </Text>
          <Text>
            I worked with The Guardian's style guide to retain brand consitency.
            MaterializeUI was used for the icons.
          </Text>
        </div>
        <Icons>
          {icons.map(({ name, icon }, index) => (
            <IconContainer key={index}>
              {icon()}
              <span>{name}</span>
            </IconContainer>
          ))}
        </Icons>
      </Details>
    </Container>
  );
}

export default CardProyect;
