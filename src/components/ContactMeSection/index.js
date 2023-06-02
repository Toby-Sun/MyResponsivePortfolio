import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactMePic from "../../images/contactMe.svg";
import { toast } from "react-hot-toast";
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

const ContactMeSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b5jcrtb",
        "template_z0frxlg",
        form.current,
        "2PqzACZzIZjuZXjtZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Thank you for contacting us! We have received your message and will be in touch shortly."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <ContactContainer>
      <ImgWrap>
        <Img src={ContactMePic} alt="" />
      </ImgWrap>
      <TextWrapper>
        <Heading>Contact Me</Heading>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactInput
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <ContactInput
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <ContactTextarea name="message" placeholder="Your Message" required />
          <ContactButton type="submit">Send Message</ContactButton>
        </ContactForm>
      </TextWrapper>
    </ContactContainer>
  );
};

export default ContactMeSection;
