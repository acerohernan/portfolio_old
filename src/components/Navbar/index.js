import React from "react";

import { Nav, Link, Logo, Icon, IconMail } from "./styles";

function Navbar() {
  return (
    <Nav>
      <Link href="/">
        <Logo>HA</Logo>
      </Link>
      <Link
        href="https://drive.google.com/file/d/1kOzEaYlwwsuhshCXQHf_Ju2t95IR8z2T/view?usp=sharing"
        target="_blank"
      >
        <Icon />
        <span>CV</span>
      </Link>
      <Link href="mailto:contacto.acero.hernan@gmail.com" target="_blank">
        <IconMail />
        <span>CONTACTO</span>
      </Link>
    </Nav>
  );
}

export default Navbar;
