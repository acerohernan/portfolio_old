import styled from "styled-components";

export const FooterNav = styled.nav`
  width: 100%;
  position: fixed;
  border-top: 1px solid #434343;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #191919;

  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  z-index: 1;
  a:nth-child(2) {
    border: none;
  }

  @media (min-width: 800px) {
    height: 100vh;
    width: 78.9px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: none;
    border-right: 1px solid #434343;
    max-width: 79px;

    a:nth-child(2) {
      border-top: 1px solid #434343;
    }
  }
`;

export const Link = styled.a`
  display: inline-block;
  border-right: 1px solid #434343;
  text-align: center;
  padding: 15px 0;
  position: relative;
  svg {
    width: 25px;
    height: 25px;
    color: white;
  }

  ::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    opacity: 0;
    bottom: 0;
    background-color: #ffffff;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  :hover {
    ::after {
      background-color: white;
      opacity: 1;
    }
  }

  @media (min-width: 800px) {
    border: none;
    border-top: 1px solid #434343;
    width: 100%;
  }
`;
