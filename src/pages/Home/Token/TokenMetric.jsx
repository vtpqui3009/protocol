import React from "react";
import TokenChart from "../../../assets/images/token-chart.svg";
import Token25 from "../../../assets/images/token-25.svg";
import styled from "styled-components";
import TokenDescriptionItem from "./TokenDescriptionItem";
import BreakingLine from "../../../components/UI/BreakingLine";
const StyledTokenMetric = styled.div`
  color: #ffffff;
  & > h1 {
    text-align: center;
    padding: 4rem 0;
    font-family: "Black Ops One", cursive;
    font-size: 3rem;
  }
  & > #token-chart {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > #token-25 {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      padding: 6rem 2rem;
    }
    & > #token-25-chart,
    & > #token-25-description {
      width: 50%;
    }
    & > #token-25-chart {
      position: relative;
      z-index: 0;
      img {
        width: 100%;
        @media (max-width: 1024px) {
          width: 80%;
        }
      }
      & > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "Black Ops One", cursive;
        color: #ff4d4d;
        font-size: 4rem;
        display: flex;
        align-items: center;
        @media (max-width: 1024px) {
          position: absolute;
          top: 50%;
          left: 40%;
          transform: translate(-50%, -50%);
        }
        @media (max-width: 768px) {
          font-size: 2.5rem;
        }
        & > span {
          color: #ffffff;
          @media (max-width: 1024px) {
            font-size: 2rem;
          }
        }
      }
    }
    & > #token-25-description {
      font-family: "Open Sans", sans-serif;
      font-size: 2rem;
      @media (max-width: 1024px) {
        font-size: 1.5rem;
      }
      & > #token-25-heading {
        font-weight: 600;
        font-size: 2.2rem;
        @media (max-width: 768px) {
          font-size: 1.7rem;
        }
      }
    }
  }
  & > #token-description {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 4rem;
    @media (max-width: 768px) {
      padding: 0 2rem;
    }
  }
`;
const TokenMetric = () => {
  return (
    <StyledTokenMetric id="token" className="container">
      <h1>Token Metrics</h1>
      <div id="token-chart">
        <img src={TokenChart} alt="token-chart" width="60%" height="60%" />
      </div>
      <div id="token-25">
        <div id="token-25-chart">
          <img src={Token25} alt="token-25" />
          <div>
            25<span>%</span>
          </div>
        </div>
        <div id="token-25-description">
          <p id="token-25-heading">of the whole total circulation</p>
          <p>+ Support the initial development of the project.</p>
          <p>+ Release according to investment term.</p>
        </div>
      </div>
      <div id="token-description">
        <TokenDescriptionItem
          percentage={"9%"}
          heading={"Ecosystem growth"}
          text={
            "For marketing, cooperation, and release after   every quarter within 3 years."
          }
          background={"#F772CE"}
        />
        <TokenDescriptionItem
          percentage={"21%"}
          heading={"M&A deals"}
          background={"#DF8AFF"}
        />
        <TokenDescriptionItem
          percentage={"20%"}
          heading={"Development team"}
          background={"#5093FF"}
        />
        <TokenDescriptionItem
          percentage={"10%"}
          heading={"Team & Advisor "}
          text={
            "Reserved for new staff of team and advisor as incentive.6 months lockup after listing, then monthly release within 36 months."
          }
          background={"#19D5DA"}
        />
        <TokenDescriptionItem
          percentage={"5%"}
          heading={"Incentive for customers"}
          background={"#3FFCA2"}
        />
        <TokenDescriptionItem
          percentage={"10%"}
          heading={"Project managemnent"}
          background={"#FF7A17"}
        />
      </div>
      <BreakingLine />
    </StyledTokenMetric>
  );
};
export default TokenMetric;
