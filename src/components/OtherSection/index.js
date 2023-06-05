import React from "react";
import pythonImg from "../../images/python.png";

import {
  OtherProjectContainer,
  Title,
  OtherProjectWrapper,
  IconLink,
  Heading,
  TextWrapper,
  ImgWrap,
  Img,
  Description,
} from "./OtherSectionElements";

const OtherSection = React.forwardRef((_props, ref) => {
  return (
    <>
      <section ref={ref}>
        <OtherProjectContainer>
          <Title>Other Noteworthy Project</Title>
          <OtherProjectWrapper>
            <TextWrapper>
              <IconLink
                href="https://tobysun73.blogspot.com/2023/02/of-python-and-web-scraping-what-is.html"
                target="_blank"
                rel="noreferrer"
              >
                <Heading>Introduction of Python and Web Scraping</Heading>
                <ImgWrap>
                  <Img src={pythonImg} />
                </ImgWrap>
                <Description>
                  This blog provides an introduction to Python programming and
                  web scraping. It highlights the reasons for choosing Python as
                  a programming language, including its simplicity, readability,
                  and wide range of applications. The blog also discusses the
                  concept of web scraping, its importance in data collection,
                  and the legal and ethical considerations involved. It includes
                  a step-by-step demonstration of a simple web scraping example
                  using Python and Beautiful Soup library.
                </Description>
              </IconLink>
            </TextWrapper>
            <TextWrapper>
              <IconLink
                href="https://tobysun73.blogspot.com/2023/04/advanced-web-scraping-automation-with.html"
                target="_blank"
                rel="noreferrer"
              >
                <Heading>Advanced Web Scraping [Automation]</Heading>
                <ImgWrap>
                  <Img src={pythonImg} />
                </ImgWrap>
                <Description>
                  This blog focuses on advanced web scraping techniques for
                  dynamic websites using Python. It explains the differences
                  between static and dynamic websites and demonstrates how to
                  automate web scraping using the Selenium library. The tutorial
                  walks through the process of scraping goal statistics from a
                  Premier League website, covering topics such as installing
                  Selenium, navigating web pages, handling cookies, scrolling,
                  and exporting data to a CSV file. The blog highlights the
                  challenges of dynamic web scraping and offers valuable
                  insights for extracting data from multiple pages.
                </Description>
              </IconLink>
            </TextWrapper>
          </OtherProjectWrapper>
        </OtherProjectContainer>
      </section>
    </>
  );
});

export default OtherSection;
