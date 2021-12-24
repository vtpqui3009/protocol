import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
const StyledArchitecture = styled.div`
  height: 100vh;
  background-color: yellow;
`;
const Architecture = () => {
  return (
    <StyledArchitecture>
      <Container>This is Architecture</Container>
    </StyledArchitecture>
  );
};
export default Architecture;
