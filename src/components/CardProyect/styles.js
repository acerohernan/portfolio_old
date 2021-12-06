import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-area: 2;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border: 3px solid black;
  border-bottom: none;
  box-sizing: border-box;
`;

export const Buttons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  button {
    width: 100%;
    display: inline-block;
    border: 3px solid black;
    padding: 5px 0;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
  }

  button:nth-of-type(1) {
    border-right: none;
  }
`;

export const Details = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.4rem;
  margin: 10px 0;
`;

export const Text = styled.p`
  font-weight: 300;
  width: 100%;
  margin-bottom: 15px;
`;

export const Icons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
  padding: 10px 0;
  svg {
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    border: none;

    svg {
      margin: 0 40px;
    }
  }
`;
