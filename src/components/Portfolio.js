import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"
import useWindowSize from "../hooks/useWindowSize"

//PARENT CONTAINER FOR WHOLE SITE
const Container = styled.div`
  margin: 30px 0 20px 0;
  padding: 0;
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: 200px 200px 200px;
  background: white;
`
const ContentContainer = styled.div`
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 200px;
`
const SectionTitle = styled.h1`
  font-family: "Heebo-Bold";
  font-size: 16px;
  text-decoration: underline;
  margin: 15px 0 15px 15px;
  line-height: 1.2;
  width: 170px;
`
const DigitalHeading = styled.h3`
  font-family: "Roboto-Bold";
  font-size: 14px;
  margin: 0 0 5px 15px;
  line-height: 1.2;
  width: 170px;
`
const DigitalSubheading = styled.p`
  font-family: "Roboto-Regular";
  font-size: 14px;
  margin: 0 0 20px 15px;
  line-height: 1.2;
  width: 170px;
`
const ExperienceHeading = styled.h3`
  font-family: "Roboto-Bold";
  font-family: 700;
  font-size: 14px;
  margin: 0 0 20px 15px;
  line-height: 1.2;
  width: 170px;

  p {
    font-family: "Roboto-Regular";
    display: inline;
  }
`

const Portfolio = () => {
  // width and height of screen
  const { width, height } = useWindowSize()

  return (
    <Container>
      <ContentContainer style={{ borderRight: "none" }}>
        <SectionTitle>DIGITAL WORK</SectionTitle>
        <DigitalHeading>HXOUSE.com</DigitalHeading>
        <DigitalSubheading>
          New immersive, content-filled website
        </DigitalSubheading>
        {/* <DigitalHeading>deltawave</DigitalHeading>
        <DigitalSubheading>
          Digital album listening experience
        </DigitalSubheading> */}
      </ContentContainer>
      <ContentContainer style={{ borderRight: "none" }}>
        <SectionTitle>EXPERIENCE</SectionTitle>
        <ExperienceHeading>
          HXOUSE - <p>Developer + Program Director</p>
        </ExperienceHeading>
        <ExperienceHeading>
          Tangerine - <p>Frontend Developer Intern</p>
        </ExperienceHeading>
        <ExperienceHeading>
          Cipher - <p>Co-founder</p>
        </ExperienceHeading>
      </ContentContainer>
      <ContentContainer>
        <SectionTitle>PROJECTS</SectionTitle>
        <ExperienceHeading>Paper Piano</ExperienceHeading>
        <ExperienceHeading>Cloutjar</ExperienceHeading>
        <ExperienceHeading>Mapping application</ExperienceHeading>
        <ExperienceHeading>Retro Boombox</ExperienceHeading>
      </ContentContainer>
    </Container>
  )
}

export default Portfolio
