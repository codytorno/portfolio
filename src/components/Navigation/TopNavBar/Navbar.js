import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { navContents } from "../navContents";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Cody Torno</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navContents.map((element) => {
              return (
                <NavItem key={element.link}>
                  <NavLinks
                    to={element.link}
                    smooth={true}
                    duration={500}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    spy={true}
                  >
                    {element.title}
                  </NavLinks>
                </NavItem>
              );
            })}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In!</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
