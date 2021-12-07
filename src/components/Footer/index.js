import React from "react";
import styled from "styled-components";

import { FaLinkedinIn as Linkedin } from "react-icons/fa";
import { BsGithub as Github } from "react-icons/bs";

const FooterNav = styled.nav`
  width: 100%;
  position: fixed;
  border-top: 1px solid black;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f7f9;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  a:nth-child(2) {
    border: none;
  }

  @media (min-width: 800px) {
    height: 100vh;
    width: 11vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: none;
    border-right: 1px solid black;
    max-width: 79px;

    a:nth-child(2) {
      border-top: 1px solid black;
    }
  }
`;

const Link = styled.a`
  display: inline-block;
  border-right: 1px solid black;
  text-align: center;
  padding: 15px 0;
  svg {
    width: 25px;
    height: 25px;
  }

  @media (min-width: 800px) {
    border: none;
    border-top: 1px solid black;
    width: 100%;
  }
`;

function Footer() {
  return (
    <FooterNav>
      <Link href="https://www.linkedin.com/in/hernan-acero-46a671212/">
        <Linkedin />
      </Link>
      <Link href="https://github.com/acerohernan">
        <Github />
      </Link>
    </FooterNav>
  );
}

export default Footer;
