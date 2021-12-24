import React from "react";
import Banner from "../../../components/Image/Banner";
import { StyleHeroBanner } from "../../../GlobalStyle";
import BreakingLine from "../../../components/UI/BreakingLine";
const HeroBanner = () => {
  return (
    <StyleHeroBanner>
      <Banner />
      <BreakingLine />
    </StyleHeroBanner>
  );
};
export default HeroBanner;
