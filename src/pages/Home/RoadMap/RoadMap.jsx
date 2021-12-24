import React from "react";
import styled from "styled-components";
import RoadmapImage from "../../../assets/images/roadmap.svg";
import RoadMapGridItem from "./RoadMapGridItem";
import BreakingLine from "../../../components/UI/BreakingLine";
const StyledRoadMap = styled.div`
  color: #ffffff;
  & > h1 {
    text-align: center;
    padding: 4rem 0;
    font-family: "Black Ops One", cursive;
    font-size: 3rem;
  }
  & > #roadmap-heading {
    margin-bottom: 5%;
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid #ffffff;
    & > img {
      object-fit: cover;
      width: 100%;
    }
  }
  & > #roadmap-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 4rem;
    border: 1px solid #ffffff;
    padding: 2rem;
    border-radius: 1rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    & > .roadmap-grid-item {
      background-color: #a7a7a7;
      padding: 2rem;
      font-size: 1.4rem;
      line-height: 3rem;
      border-radius: 1rem;
      font-family: "Open Sans", sans-serif;
    }
  }
`;
const RoadMap = () => {
  return (
    <StyledRoadMap id="roadmap" className="container">
      <h1>This is RoadMap</h1>
      <div id="roadmap-heading">
        <img src={RoadmapImage} alt="" />
      </div>
      <div id="roadmap-grid">
        <RoadMapGridItem
          chilren={
            <React.Fragment>
              <li>Project announcement to the community</li>
              <li>Alpha</li>
              <li>$MAC IDO</li>
            </React.Fragment>
          }
        />
        <RoadMapGridItem
          chilren={
            <React.Fragment>
              <li>Beta testing activity</li>
              <li>The Official launch of the Project</li>
              <li>Set up events to buy and sell adult actors NFTs</li>
            </React.Fragment>
          }
        />
        <RoadMapGridItem
          chilren={
            <React.Fragment>
              <li>
                Announcement of shopping mall NTFs, photos, videos, adult
                animation images, videos
              </li>
              <li>Set up a special Livestream room system</li>
              <li>Pay actors according to the donation system</li>
            </React.Fragment>
          }
        />
        <RoadMapGridItem
          chilren={
            <React.Fragment>
              <li>
                Launch augmented reality interactive technology. preparing to
                integrate into the metaverse ecosystem
              </li>
              <li>
                Create interactive events to establish new actors from the
                community
              </li>
            </React.Fragment>
          }
        />
      </div>
      <BreakingLine />
    </StyledRoadMap>
  );
};
export default RoadMap;
