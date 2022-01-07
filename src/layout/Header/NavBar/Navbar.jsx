import React from "react";
import { StyledHeaderLink } from "../../../GlobalStyle";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <StyledHeaderLink className={props.class}>
      <Link to="/">Home</Link>
      <Link to="/white-paper">White Paper</Link>
      <span onClick={props.onTokenSection}>Token</span>
      <span onClick={props.onRoadmapSection}>Roadmap</span>
      <span onClick={props.onContactSection}>Contact us</span>
      <span onClick={props.onAboutSection}>About us</span>
      {/* {linksData.map((item) => {
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
      })} */}
    </StyledHeaderLink>
  );
};
export default NavBar;
