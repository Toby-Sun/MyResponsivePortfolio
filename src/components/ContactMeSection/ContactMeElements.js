import styled from "styled-components";

export const ContactContainer = styled.section`
  background: #fff;
  padding: 80px 0;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

export const ImgWrap = styled.div`
  margin-left: 100px;
  margin-top: 30px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 30px;
    justify-content: center;
  }
`;

export const Img = styled.img`
  max-width: 500px;

  @media screen and (max-width: 768px) {
    max-width: 60%;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    width: 70%;
    padding: 20px;
  }
`;
export const Heading = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 16px;
  height: 150px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

export const ContactButton = styled.button`
  padding: 16px 32px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;
