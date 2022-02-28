import React from "react";
import styled from "styled-components";
const StyledTokenDescriptionItem = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  & > .token-description-percentage {
    width: 18%;
    padding: 3.5rem;
    margin-bottom: 4rem;
    border-radius: 1rem;
    font-size: 1.8rem;
    font-weight: 600;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 1rem;
    }
    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & > .token-description-content {
    width: 82%;
    @media (max-width: 768px) {
      width: 100%;
    }
    & > h3 {
      font-size: 1.8rem;
      font-weight: 600;
    }
    & > p {
      font-size: 1.4rem;
    }
  }
`;

const TokenDescriptionItem = (props) => {
  return (
    <StyledTokenDescriptionItem className="token-description-item" {...props}>
      <div
        className="token-description-percentage"
        style={{ background: props.background }}
      >
        <span>{props.percentage}</span>
      </div>
      <div className="token-description-content">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </StyledTokenDescriptionItem>
  );
};
export default TokenDescriptionItem;
