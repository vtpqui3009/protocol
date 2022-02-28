import React, { useEffect } from "react";
import styled from "styled-components";
import RoadmapImage from "../../../assets/images/roadmap.svg";
import RoadMapGridItem from "./RoadMapGridItem";
import BreakingLine from "../../../components/UI/BreakingLine";
import AOS from "aos";
import "aos/dist/aos.css";
const StyledRoadMap = styled.div`
  color: #ffffff;
  overflow: hidden;
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
    gap: 2rem;
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
const RoadMap = ({ roadmapRef }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <StyledRoadMap id="roadmap" className="container" ref={roadmapRef}>
      <h1>RoadMap</h1>
      <div id="roadmap-heading">
        <img
          src={RoadmapImage}
          alt=""
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos-anchor-placement="center-bottom"
        />
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
          data-aos="fade-up-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
        />
        <RoadMapGridItem
          chilren={
            <React.Fragment>
              <li>Beta testing activity</li>
              <li>The Official launch of the Project</li>
              <li>Set up events to buy and sell adult actors NFTs</li>
            </React.Fragment>
          }
          data-aos="fade-up-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
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
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
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
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
        />
      </div>
      <BreakingLine />
    </StyledRoadMap>
  );
};
export default RoadMap;
