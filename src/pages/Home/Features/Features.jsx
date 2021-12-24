import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
const StyledFeatures = styled.div`
  height: 100vh;
  background-color: purple;
`;
const Features = () => {
  return (
    <StyledFeatures>
      <Container>This is Features</Container>
    </StyledFeatures>
  );
};
export default Features;
