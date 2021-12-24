import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StyledButton = styled.i`
  padding: 8px 10px;
  background-color: #e83765;
  color: white;
  border-radius: 50%;
  position: fixed;
  bottom: 5%;
  right: 2%;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.25s linear;
`;
const OnTopButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledButton
      className="fa fa-chevron-up"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    ></StyledButton>
  );
};
export default OnTopButton;
