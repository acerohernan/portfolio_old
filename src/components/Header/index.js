import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  padding: 10px 0;
  border-bottom: 4px solid black;
`;

const AboutButton = styled.button`
  border: 3px solid black;
  padding: 10px 30px;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  margin: 20px 0 40px;
`;

function Header() {
  return (
    <Container>
      <Title>
        HERNAN ACERO, <br />
        FRONTEND DEVELOPER
      </Title>
      <AboutButton>About Me</AboutButton>
    </Container>
  );
}

export default Header;
