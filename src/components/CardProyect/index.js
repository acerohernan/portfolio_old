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
          <Text>{description1}</Text>
          <Text>{description2}</Text>
          <Text>{description3}</Text>
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
