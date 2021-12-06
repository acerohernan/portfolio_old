import React from "react";
import { FaReact as ReactIcon } from "react-icons/fa";

import {
  Container,
  Main,
  Image,
  Buttons,
  Details,
  Title,
  Text,
  Icons,
} from "./styles.js";

import proyectImg from "../../assets/proyect1.png";

function CardProyect() {
  return (
    <Container>
      <Main>
        <Image src={proyectImg} />
        <Buttons>
          <button>See live</button>
          <button>View Code</button>
        </Buttons>
      </Main>
      <Details>
        <div>
          <Title>REACT GUARDIAN APP</Title>
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
          {[1, 2, 3, 4].map((el) => (
            <ReactIcon key={el} />
          ))}
        </Icons>
      </Details>
    </Container>
  );
}

export default CardProyect;
