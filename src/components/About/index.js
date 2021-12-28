import React, { useState } from "react";
import { Container, Button, Details, Info, Skills } from "./styles";

function About() {
  const [appear, setAppear] = useState(false);

  const handleAppear = () => {
    setAppear(!appear);
  };

  return (
    <Container>
      <Button onClick={handleAppear}>Sobre mí</Button>
      <Details className={appear ? "open" : ""}>
        <Info>
          <h2>Sobre mí</h2>
          <p>
            Soy un <b>Desarrollador Junior</b>, especializado en el
            <b> Frontend</b>, apasionado por el lenguaje de
            <b> Javascript</b> y las funcionalidades de
            <b> React</b>. Puede observar algunos de mis trabajos en la parte
            inferior.
            <br />
            <br />
            También tengo dominio en tecnologías como
            <b> Redux,</b> para manejar correctamente el estado de la aplicación
            y hacerlo escalable, programas como <b>Figma, </b>
            para prototipar correctamente la aplicación web y preprocesadores
            como <b>SASS,</b> para obtener más funcionalidades a la hora de
            agregar estilos.
            <br />
            <br />
            Estoy interesado en oportunidades labolares en donde pueda
            contribuir, aprender y crecer al mismo tiempo. Con respecto a las
            habilidades blandas, soy <b>comunicativo</b> y no tengo problemas
            con el <b>trabajo en equipo</b>. Si tiene alguna oportunidad para mi
            persona, no dude en contactarme.
          </p>
        </Info>
        <Skills>
          <h2>Habilidades</h2>
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS</span>
          <span>Javascript</span>
          <span>React</span>
          <span>Redux</span>
          <span>GIT</span>
          <span>Github</span>
          <span>Responsive Design</span>
          <span>SEO</span>
          <span>Terminal</span>
          <span>CSS in JS</span>
        </Skills>
      </Details>
    </Container>
  );
}

export default About;
