import React, { useState } from "react";
import { Container, Button, Details, Info, Skills } from "./styles";

function About() {
  const [appear, setAppear] = useState(false);

  const handleAppear = () => {
    setAppear(!appear);
  };

  return (
    <Container>
      <Button onClick={handleAppear}>About</Button>
      <Details className={appear ? "open" : ""}>
        <Info>
          <h2>Get to know me!</h2>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
            <br />
            <br />
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming.
            <br />
            <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </Info>
        <Skills>
          <h2>Skills</h2>
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
