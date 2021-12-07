import React from "react";
import { FaLinkedinIn as Linkedin } from "react-icons/fa";
import { BsGithub as Github } from "react-icons/bs";

import { FooterNav, Link } from "./styles";

function Footer() {
  return (
    <FooterNav>
      <Link
        href="https://www.linkedin.com/in/hernan-acero-46a671212/"
        target="_blank"
      >
        <Linkedin />
      </Link>
      <Link href="https://github.com/acerohernan" target="_blank">
        <Github />
      </Link>
    </FooterNav>
  );
}

export default Footer;
