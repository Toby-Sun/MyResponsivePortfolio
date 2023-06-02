import React from "react";
import ContactMePic from "../../images/contactMe.svg";
import {
  ContactContainer,
  ImgWrap,
  Img,
  TextWrapper,
  Heading,
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactButton,
} from "./ContactMeElements";

const ContactMe = () => {
  return (
    <ContactContainer>
      <ImgWrap>
        <Img src={ContactMePic} alt="" />
      </ImgWrap>
      <TextWrapper>
        <Heading>Contact Me</Heading>
        <ContactForm>
          <ContactInput type="text" placeholder="Your Name" required />
          <ContactInput type="email" placeholder="Your Email" required />
          <ContactTextarea placeholder="Your Message" required />
          <ContactButton>Send Message</ContactButton>
        </ContactForm>
      </TextWrapper>
    </ContactContainer>
  );
};

export default ContactMe;
