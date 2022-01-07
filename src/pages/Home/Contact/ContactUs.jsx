import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import contactsData from "./contactsData";
import BreakingLine from "../../../components/UI/BreakingLine";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  padding: 0 4rem;
  & > #contact-social {
    text-align: center;
    margin-top: auto;
    padding: 2rem 0;
  }
  & > #contact-heading {
    text-align: center;
    padding: 4rem 0;
    font-family: "Black Ops One", cursive;
    font-size: 3rem;
  }
  & > #contact-flex-box {
    gap: 4rem;
    height: 60%;
    & > #contact-form > .row {
      & > .contact-form-action {
        font-size: 1.4rem;
        & > label {
          margin: 1rem 0;
        }
        & > input,
        & > textarea,
        & > button {
          padding: 1rem;
          border-radius: 0.6rem;
          outline: none;
          border: 1px solid #eee;
          margin-bottom: 20px;
          background-color: #e5e5e5;
          width: 100%;
        }
        & > textarea {
          resize: none;
        }
        & > button {
          background-color: #999;
          color: white;
          border: 1px solid #999;
          margin: 1rem 0;
        }
      }
    }
  }
`;
const ContactUs = ({ contactUsRef }) => {
  return (
    <StyledContainer className="container" id="contact-us" ref={contactUsRef}>
      <h1 id="contact-heading">Contact us</h1>
      <Row id="contact-flex-box">
        <Col id="contact-form">
          <Row>
            <div className="contact-form-action">
              <label>Phone or email</label>
              <input type="text" required />
            </div>
            <div className="contact-form-action">
              <label>Name</label>
              <input type="text" required />{" "}
            </div>
            <div className="contact-form-action">
              <label>Message</label>
              <textarea required rows={4} cols={50}></textarea>
            </div>
            <div className="contact-form-action">
              <button>Contact Us</button>{" "}
            </div>
          </Row>
        </Col>
      </Row>
      <Row id="contact-social">
        {contactsData.map((item) => {
          return <Col key={item.id}>{item.element}</Col>;
        })}
      </Row>
      <BreakingLine />
    </StyledContainer>
  );
};
export default ContactUs;
