import React from "react";

import About from "../About";

import { Container, Title } from "./styles";

function Header() {
  return (
    <Container data-scroll-section>
      <Title>
        HERNAN ACERO, <br />
        FRONTEND DEVELOPER
      </Title>
      <About />
    </Container>
  );
}

export default Header;
