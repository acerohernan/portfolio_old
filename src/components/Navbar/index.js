import React from "react";

import { Nav, Link, Logo, Icon, IconMail } from "./styles";

function Navbar() {
  return (
    <Nav>
      <Link href="/">
        <Logo>HA</Logo>
      </Link>
      <Link
        href="https://drive.google.com/file/d/15fjPWucPXV-s9JIavo3mSGivs_RfNIMD/view?usp=sharing"
        target="_blank"
      >
        <Icon />
        <span>CV</span>
      </Link>
      <Link href="mailto:contacto.acero.hernan@gmail.com" target="_blank">
        <IconMail />
        <span>CONTACT</span>
      </Link>
    </Nav>
  );
}

export default Navbar;
