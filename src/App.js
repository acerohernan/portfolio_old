import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Proyects from "./components/Proyects";
import Loader from "./components/Loader";

const Container = styled.div``;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Loader loading={loading} />
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
