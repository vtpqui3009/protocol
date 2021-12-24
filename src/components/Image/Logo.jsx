import React from "react";
import WebLogo from "../../assets/images/web-logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledLogo = styled.div`
  & > a {
    text-decoration: none;
  }
  & > a > img {
    width: 5rem;
    height: 5rem;
  }
  & > a > span {
    color: white;
    margin-left: 1rem;
    letter-spacing: 0.2rem;
    font-size: 1.6rem;
  }
`;
const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <img src={WebLogo} alt="" />
        <span>MetaAdult</span>
      </Link>
    </StyledLogo>
  );
};
export default Logo;
