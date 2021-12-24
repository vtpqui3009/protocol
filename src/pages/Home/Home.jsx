import React from "react";
import Header from "../../layout/Header/Header";
import HeroBanner from "./HeroBanner/HeroBanner";
// import Architecture from "./Architecture/Architecture";
// import Features from "./Features/Features";
// import Footer from "../../layout/Footer/Footer";
import AboutUs from "./About/AboutUs";
import RoadMap from "./RoadMap/RoadMap";
import TokenMetric from "./Token/TokenMetric";
import ContactUs from "./Contact/ContactUs";
import OnTopButton from "../../components/UI/OnTopButton";
const Home = () => {
  return (
    <div style={{ background: "#232323" }}>
      <Header />
      <HeroBanner />
      <TokenMetric />
      <RoadMap />
      <ContactUs />
      <AboutUs />
      <OnTopButton />
    </div>
  );
};
export default Home;
