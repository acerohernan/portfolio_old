import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => (props.$loading ? "100%" : "0%")};
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all ease-in-out;
  -webkit-scrollbar: none;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: black;
  display: ${(props) => (props.$loading ? "block" : "none")};
`;
