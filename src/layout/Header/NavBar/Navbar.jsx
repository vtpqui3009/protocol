import React from "react";
import linksData from "./linksData";
import { StyledHeaderLink } from "../../../GlobalStyle";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <StyledHeaderLink className={props.class}>
      {linksData.map((item) => {
        const render =
          item.option === "normal" ? (
            <a key={item.id} href={item.href}>
              {item.name}
            </a>
          ) : (
            <Link key={item.id} to={item.href}>
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
