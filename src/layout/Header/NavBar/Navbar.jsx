import React from "react";
import { StyledHeaderLink } from "../../../GlobalStyle";
import { Link } from "react-router-dom";
import linksData from "./linksData.js";
const NavBar = (props) => {
  return (
    <StyledHeaderLink className={props.class}>
      {linksData.map((item) => {
        const render =
          item.option === "normal" ? (
            <a
              key={item.id}
              href={item.href}
              style={{ color: "white", textDecoration: "none" }}
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={item.id}
              to={item.href}
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              {item.name}
            </Link>
          );
        return <span key={item.id}>{render}</span>;
      })}
    </StyledHeaderLink>
  );
};
export default NavBar;
