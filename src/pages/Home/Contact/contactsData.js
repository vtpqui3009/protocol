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
    element: <i className="fab fa-facebook-f" style={style}></i>,
    description: "facebook",
  },
  {
    id: 2,
    element: <i className="fa fa-envelope" style={style}></i>,
    description: "mail",
  },
  {
    id: 3,
    element: <i className="fab fa-twitter" style={style}></i>,
    description: "twitter",
  },
  {
    id: 4,
    element: <i className="fa fa-phone-alt" style={style}></i>,
    description: "call",
  },
  {
    id: 5,
    element: <i className="fab fa-instagram" style={style}></i>,
    description: "instagram",
  },
];
export default contactsData;
