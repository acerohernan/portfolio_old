import React from "react";
import styled from "styled-components";

import CardProyect from "../CardProyect";

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
  return (
    <Container>
      {[1, 2, 3, 4].map((el) => (
        <CardProyect key={el} />
      ))}
    </Container>
  );
}

export default Proyects;
