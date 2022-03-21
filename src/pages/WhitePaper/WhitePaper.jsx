import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Header from "../../layout/Header/Header";
const StyledUpdatingPage = styled.div`
  linh-height: 1.7;
  height: 100vh;
  width: 100%;
  padding: 5% 0;
  background-color: #333;
  color: #fff;
  font-size: 1.6rem;
  & > .container > .white-paper__content {
    padding: 8rem 4rem;
  }
`;
const UpdatingPage = () => {
  return (
    <StyledUpdatingPage>
      <Container>
        <Header />
        <div className="white-paper__content">
          <p>
            You are guaranteed the image of actors experience that’s never been
            known before. you're guaranteed to get a feel for the actors'
            personalities by meeting them on the platform our development team
            is building. Prepare yourself for NFTs representing your favorite
            actors to meet and interact with them on our platform. In addition,
            we also support your desire to become actors when you get high views
            from your private videos. The white paper provides comprehensive
            information about Meta adults, including how it works and other
            smart features of the platform like ecosystem, token economy,
            especially NFTs. It also shows details and progression regarding the
            development, creative and consulting teams. The whitepaper helps
            players keep up with further development of Meta Adult and
            understand how the platform economy operates more quickly and
            accurately.
          </p>
          <p>
            This whitepaper will be constantly updated by the Meta Adult team.
            The objective of all changes is to improve the quality and
            sustainability of the project. Now we will show how to use the
            tokens, NFTs that we issue on this platform. MAC is the underlying
            token that represents the holder's stake for the Meta Adult
            platform. It is used as a gas fee for transactions arising on the
            system. Or use to buy, sell or exchange limited NFTs. MBC is a token
            issued to reward owners of videos posted on the Meta Adult platform
            for achieving high views. You can buy this token to donate to your
            favorite actors. . or if you are video owners you can sell MBC
            tokens for gas fee of MAC to get your own money. NFT we release is
            limited to actors or people who post individual videos.
          </p>
          <p>
            <p>Version: 2022.02</p>
            <ul style={{ padding: "0 1rem" }}>
              <li>Release date: Feb 2022 </li>
              <li>
                {" "}
                Objectives: provide aggregate information so that users can
                quickly join the platform.{" "}
              </li>
              <li>
                MetaAdult: We provide a detailed release roadmap and
                distribution of MAC, MBC tokens and NFTs.
              </li>
              <li>New Roadmap, Treasury inflows update </li>
              <li>Notice and Disclaimer update</li>
            </ul>
          </p>
        </div>
      </Container>
    </StyledUpdatingPage>
  );
};
export default UpdatingPage;
