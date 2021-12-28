import React from "react";
import styled from "styled-components";

import CardProyect from "../CardProyect";
import icons from "../../utils/icons";

import codeStoreimage from "../../assets/codeStore.png";
import hotDogsimage from "../../assets/hotDogs.png";
import codeStoreSecondimage from "../../assets/proyect1.png";
import hotDogsSecondimage from "../../assets/proyect2.png";

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
  const [ReactIcon, Redux, Styled, CSS, Figma] = icons;

  const CodeStoreIcons = [Figma, ReactIcon, CSS, Redux];
  const HotDogsIcons = [Figma, ReactIcon, Styled, Redux];

  return (
    <Container data-scroll-section>
      <CardProyect
        title="Code Store"
        icons={CodeStoreIcons}
        description1="Code Store es la parte frontend de un ecommerce, construido 
        en React. 
        Los estilos fueron añadidos con CSS utilizando la metodología 
        de Módulos en CSS.
        Y para manejar el estado de la aplicación se utilizo Redux."
        description2="El usuario puede agregar y eliminar productos del carrito, así como también disfrutar del modo responsivo hecho a medida para cada uno de los dispositivos."
        description3="El prototipo de la página se construyo en Figma y fue inspirada en diversas tiendas vistuales."
        pageLink="https://acerohernan.github.io/code-store/"
        codeLink="https://github.com/acerohernan/code-store"
        image={codeStoreimage}
        secondImg={codeStoreSecondimage}
      />
      <CardProyect
        title="Hot Dogs"
        icons={HotDogsIcons}
        description1="Hot Dogs es un sitio de visualización de cachorros inspirado en Tinder, construido 
        en React. 
        Los estilos fueron añadidos con CSS en Javascript utilizando la librería de Styled Components.
        Y para manejar el estado de la aplicación se utilizo Redux."
        description2="El usuario puede agregar y eliminar cahorros favoritos, acceder a un chat con cada cachorro y visualizar los detalles de cada uno. A la vez, se puede acceder a la página de cuenta y registrarse."
        description3="El prototipo de la página se construyo en Figma y fue inspirada en Tinder."
        pageLink="https://acerohernan.github.io/hot-dogs/"
        codeLink="https://github.com/acerohernan/hot-dogs"
        image={hotDogsimage}
        secondImg={hotDogsSecondimage}
      />
    </Container>
  );
}

export default Proyects;
