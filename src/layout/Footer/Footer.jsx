import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
const StyledFooter = styled.div`
  height: 100vh;
  background-color: green;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <Container>This is Footer</Container>
    </StyledFooter>
  );
};
export default Footer;
