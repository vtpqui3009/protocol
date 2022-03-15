import React from "react";
import HeroBanner from "../../assets/images/hero-banner.svg";
import styled from "styled-components";
const BannerWrapper = styled.div`
  position: "relative";
  display: flex;
  align-items: center;
  oveflow: hidden;
  justify-content: center;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <img
        src={HeroBanner}
        alt=""
        style={{ width: "100%", objectFit: "cover" }}
      />
    </BannerWrapper>
  );
};
export default Banner;
