import React from "react";

import GlobalStyle from "./styles/GlobalStyles";

import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Proyects from "./components/Proyects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Header />
      <Proyects />
      <Footer />
    </>
  );
}

export default App;
