import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavBar from "./NavBar/Navbar";
import BarIcon from "./BarIcon/BarIcon";
import { StyledHeader } from "../../GlobalStyle";
import Logo from "../../components/Image/Logo";
const Header = (props) => {
  return (
    <StyledHeader id="header">
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          {["end"].map((placement, idx) => (
            <BarIcon key={idx} placement={placement} name={placement} />
          ))}
          <Nav className="ms-auto d-none d-xl-block">
            <NavBar
              class={"d-flex flex-row"}
              onTokenSection={props.onTokenSection}
              onRoadmapSection={props.onRoadmapSection}
              onContactSection={props.onContactSection}
              onAboutSection={props.onAboutSection}
            />
          </Nav>
        </Container>
      </Navbar>
    </StyledHeader>
  );
};
export default Header;
