import React from "react";
import { Container, Title } from "./styles";

function Loader({ loading }) {
  return (
    <Container loading={loading}>
      <Title loading={loading}>LOADING...</Title>
    </Container>
  );
}

export default Loader;
