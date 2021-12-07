import React from "react";
import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Proyects from "./components/Proyects";

import useLocoScroll from "./hooks/useLocoScroll";

const Container = styled.div``;

function App() {
  useLocoScroll(true);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Container data-scroll-container id="main-container">
          <Header />
          <Proyects />
        </Container>
      </Layout>
    </>
  );
}

export default App;
