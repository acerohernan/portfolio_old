import React from "react";

import { Nav, Link, Logo, Icon, IconMail } from "./styles";

function Navbar() {
  return (
    <Nav>
      <Link>
        <Logo>HA</Logo>
      </Link>
      <Link>
        <Icon />
        <span>CV</span>
      </Link>
      <Link>
        <IconMail />
        <span>CONTACT</span>
      </Link>
    </Nav>
  );
}

export default Navbar;
