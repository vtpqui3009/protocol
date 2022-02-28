import "aos/dist/aos.css";
const style = {
  background: "#000000",
  fontSize: "2rem",
  color: "#ffffff",
  padding: "1rem",
  borderRadius: "50%",
};

const contactsData = [
  {
    id: 1,
    element: (
      <i
        className="fab fa-facebook-f"
        style={style}
        data-aos="fade-up-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      ></i>
    ),
    description: "facebook",
  },
  {
    id: 2,
    element: (
      <i
        className="fa fa-envelope"
        style={style}
        data-aos="fade-up-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      ></i>
    ),
    description: "mail",
  },
  {
    id: 3,
    element: (
      <i
        className="fab fa-twitter"
        style={style}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      ></i>
    ),
    description: "twitter",
  },
  {
    id: 4,
    element: (
      <i
        className="fa fa-phone-alt"
        style={style}
        data-aos="fade-up-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      ></i>
    ),
    description: "call",
  },
  {
    id: 5,
    element: (
      <i
        className="fab fa-instagram"
        style={style}
        data-aos="fade-up-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      ></i>
    ),
    description: "instagram",
  },
];
export default contactsData;
