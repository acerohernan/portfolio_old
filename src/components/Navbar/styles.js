import styled from "styled-components";
import { FiDownload, FiMail } from "react-icons/fi";

export const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  position: fixed;
  top: 0%;
  right: 0;
  left: 0;
  height: 60px;
  background-color: #f6f7f9;
  z-index: 1;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    a:nth-child(3) {
      border-right: none;
    }
  }
`;

export const Link = styled.a`
  display: inline-block;
  border-right: 1px solid black;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.1rem;
  }

  @media (max-width: 800px) {
  }
`;

export const Icon = styled(FiDownload)`
  margin: 0 5px;
`;

export const IconMail = styled(FiMail)`
  margin: 0 5px;
`;

export const Logo = styled.h1`
  font-size: 2rem;
`;
