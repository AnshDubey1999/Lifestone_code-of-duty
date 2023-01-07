import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
  NavLink,
} from "reactstrap";
import WalletIcon from "@mui/icons-material/Wallet";
import shortLogoWithText from "../images/shortLogoWithText.png";
const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light className="d-flex align-items-center">
        {/* <NavbarToggler onClick={toggleNavbar} className="me-2" /> */}
        {/* <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="text-white">
            <NavItem>
              <NavLink href="/components/" className="text-white">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
        <NavbarBrand href="/" style={{ color: "white" }} alt="Logo">
          {/* <h3>LifeStone</h3> */}
          <img src={shortLogoWithText} style={{ height: "50px" }} />
        </NavbarBrand>
        <Button
          color="pink-600"
          className=""
          style={{ backgroundColor: "#de3576" }}
        >
          <div className="text-white">
            Connect to wallet &nbsp;
            <WalletIcon />
          </div>
        </Button>
      </Navbar>
    </div>
  );
};

export default Header;
