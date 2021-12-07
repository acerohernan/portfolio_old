import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  padding: 10px 0;
  border-bottom: 4px solid black;
`;

/* export const AboutButton = styled.button`
  border: 3px solid black;
  padding: 5px 30px;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  margin: 20px 0;
  transition: 0.5s all;
  background-color: #f6f7f9;

  :hover {
    background-color: black;
    color: #f6f7f9;
  }
`; */

export const AboutSection = styled.div`
  width: 100%;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 40px;
  }
`;

export const Details = styled.div``;

export const Skills = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid red;
  @media (min-width: 800px) {
    height: 100%;
  }
`;
