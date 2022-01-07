import React, { useRef } from "react";
import Header from "../../layout/Header/Header";
import HeroBanner from "./HeroBanner/HeroBanner";
import AboutUs from "./About/AboutUs";
import RoadMap from "./RoadMap/RoadMap";
import TokenMetric from "./Token/TokenMetric";
import ContactUs from "./Contact/ContactUs";
import OnTopButton from "../../components/UI/OnTopButton";
import { scrollElementIntoView } from "../../function/scrollElementIntoView";
const Home = () => {
  const tokenRef = useRef();
  const roadmapRef = useRef();
  const contactUsRef = useRef();
  const aboutUsRef = useRef();
  const scrollToTokenSection = () => {
    scrollElementIntoView(tokenRef.current, "smooth");
    console.log("THis is working ....");
  };
  const scrollToRoadmapSection = () => {
    scrollElementIntoView(roadmapRef.current, "smooth");
    console.log("THis is working ....");
  };
  const scrollToContactSection = () => {
    scrollElementIntoView(contactUsRef.current, "smooth");
    console.log("THis is working ....");
  };
  const scrollToAboutSection = () => {
    scrollElementIntoView(aboutUsRef.current, "smooth");
  };
  return (
    <div style={{ background: "#232323" }}>
      <Header
        onTokenSection={scrollToTokenSection}
        onRoadmapSection={scrollToRoadmapSection}
        onContactSection={scrollToContactSection}
        onAboutSection={scrollToAboutSection}
      />
      <HeroBanner />
      <TokenMetric tokenRef={tokenRef} />
      <RoadMap roadmapRef={roadmapRef} />
      <ContactUs contactUsRef={contactUsRef} />
      <AboutUs aboutUsRef={aboutUsRef} />
      <OnTopButton />
    </div>
  );
};
export default Home;
