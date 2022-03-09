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
      ;
      {/* <BannerContent>
        Meta Adult is a project on the Binance Smart Chain platform. The symbol
        of MAC is a mysterious and seductive girl. The idea of ​​this project
        was started by the development team based on the metaverse social
        context that needs to be closest to the actual needs of each person. The
        developer wants to bring the real world and the interactions of the
        actors closer to the user. Here you can buy, sell, exchange, use, donate
        NFTs of idols or private video providers on this platform.
      </BannerContent> */}
    </BannerWrapper>
  );
};
export default Banner;
