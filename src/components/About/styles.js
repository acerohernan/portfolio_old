import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  .open {
    height: auto;
    opacity: 1;
  }

  @media (min-width: 800px) {
    .open {
      height: 41rem;
    }
  }
  @media (min-width: 1000px) {
    .open {
      height: 35rem;
    }
  }
  @media (min-width: 1200px) {
    .open {
      height: 29rem;
    }
  }
  @media (min-width: 1600px) {
    .open {
      height: 23rem;
    }
  }
`;

export const Button = styled.button`
  border: 3px solid black;
  padding: 5px 40px;
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
`;

export const Details = styled.div`
  height: 0;
  opacity: 0;
  transition: 1s all;
  position: relative;
  z-index: -2;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

export const Info = styled.div`
  p {
    font-weight: 300;
  }
`;
export const Skills = styled.div`
  margin: 20px 0;
  @media (min-width: 800px) {
    margin: 0;
  }

  span {
    background-color: #e7e7e7;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px 0;
    margin-right: 10px;
    display: inline-block;
    font-size: 0.9rem;
  }
`;
