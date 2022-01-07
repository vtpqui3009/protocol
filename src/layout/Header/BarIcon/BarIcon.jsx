import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import NavBar from "../NavBar/Navbar";
const StyledBarIcon = styled.i`
  font-size: 3rem;
  cursor: pointer;
  color: white;
`;
const StyledBarLink = styled.div`
  & > div > span,
  & > div > a {
    padding: 1rem 2rem;
    cursor: pointer;
  }
`;
const StyledOffcanvasHeader = styled.span`
  display: none;
  cursor: pointer;
  @media (max-width: 480px) {
    display: block;
    font-size: 3rem;
    color: white;
    dispplay: block;
    margin-left: auto;
    padding: 0 2rem;
    transform: rotate(45deg);
  }
`;
const BarIcon = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-xl-none">
      <StyledBarIcon className="bi bi-list" onClick={handleShow} />
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        style={{ backgroundColor: "#434343" }}
      >
        <Offcanvas.Header>
          <StyledOffcanvasHeader onClick={handleClose}>+</StyledOffcanvasHeader>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <StyledBarLink>
            <NavBar class={"d-flex flex-column"} />
          </StyledBarLink>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default BarIcon;
