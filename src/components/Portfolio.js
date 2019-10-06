import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"
import useWindowSize from "../hooks/useWindowSize"
import Tilt from "react-tilt"

//PARENT CONTAINER FOR WHOLE SITE
const Container = styled.div`
  margin: 30px 0 20px 0;
  padding: 0;
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: 200px 200px 200px;
  background: white;
  @media (max-width: 600px) {
    height: 600px;
    grid-template-columns: 300px;
    grid-template-rows: 200px 200px 200px;
  }
`
const ContentContainer = styled.div`
  border: 3px solid black;
  border-right: ${props => (props.right ? "none" : "3px solid black")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 200px;
  @media (max-width: 600px) {
    border: 3px solid black;
    border-bottom: ${props => (props.right ? "none" : "3px solid black")};
  }
`
const SectionTitle = styled.h1`
  font-family: "Heebo-Bold";
  font-size: 16px;
  text-decoration: underline;
  margin: 15px 0 15px 15px;
  line-height: 1.2;
  width: 170px;
  color: black;
  @media (max-width: 600px) {
    width: 270px;
  }
`
const DigitalHeading = styled.a`
  font-family: "Roboto-Bold";
  font-size: 14px;
  margin: 0 0 5px 15px;
  line-height: 1.2;
  width: 170px;
  color: black;
  text-decoration: none;
  @media (max-width: 600px) {
    width: 270px;
  }
`
const DigitalSubheading = styled.p`
  font-family: "Roboto-Regular";
  font-size: 14px;
  margin: 0 0 20px 15px;
  line-height: 1.2;
  width: 170px;
  color: black;
  @media (max-width: 600px) {
    width: 270px;
  }
`
const ExperienceHeading = styled.a`
  font-family: "Roboto-Bold";
  font-family: 700;
  font-size: 14px;
  margin: 0 0 20px 15px;
  line-height: 1.2;
  width: 170px;
  color: black;
  text-decoration: none;
  @media (max-width: 600px) {
    width: 270px;
  }

  p {
    font-family: "Roboto-Regular";
    display: inline;
  }
`

const Portfolio = () => {
  // width and height of screen
  const { width, height } = useWindowSize()

  return (
    <>
      {width > 800 ? (
        <Tilt options={{ max: 15 }}>
          <Container>
            <ContentContainer right>
              <SectionTitle>DIGITAL WORK</SectionTitle>
              <DigitalHeading href="https://www.hxouse.com" target="_blank">
                HXOUSE.com
              </DigitalHeading>
              <DigitalSubheading>
                New immersive, content-filled website
              </DigitalSubheading>
              {/* <DigitalHeading href="">deltawave</DigitalHeading>
        <DigitalSubheading>
          Digital album listening experience
        </DigitalSubheading> */}
            </ContentContainer>
            <ContentContainer right>
              <SectionTitle>EXPERIENCE</SectionTitle>
              <ExperienceHeading href="https://www.hxouse.com" target="_blank">
                HXOUSE - <p>Developer + Program Director</p>
              </ExperienceHeading>
              <ExperienceHeading
                href="https://www.tangerine.ca/en"
                target="_blank"
              >
                Tangerine - <p>Frontend Developer Intern</p>
              </ExperienceHeading>
              <ExperienceHeading
                href="http://projectcipher.io/"
                target="_blank"
              >
                Cipher - <p>Co-founder</p>
              </ExperienceHeading>
            </ContentContainer>
            <ContentContainer>
              <SectionTitle>PROJECTS</SectionTitle>
              <ExperienceHeading
                href="https://devpost.com/software/paper-piano-8yzaw9"
                target="_blank"
              >
                Paper Piano
              </ExperienceHeading>
              <ExperienceHeading
                href="https://github.com/uditdesai/clout-jar"
                target="_blank"
              >
                Cloutjar
              </ExperienceHeading>
              <ExperienceHeading
                href="https://github.com/uditdesai/map-app"
                target="_blank"
              >
                Mapping application
              </ExperienceHeading>
              <ExperienceHeading
                href="https://github.com/uditdesai/jukebox"
                target="_blank"
              >
                Retro Boombox
              </ExperienceHeading>
            </ContentContainer>
          </Container>
        </Tilt>
      ) : (
        <Container>
          <ContentContainer right>
            <SectionTitle>DIGITAL WORK</SectionTitle>
            <DigitalHeading href="https://www.hxouse.com" target="_blank">
              HXOUSE.com
            </DigitalHeading>
            <DigitalSubheading>
              New immersive, content-filled website
            </DigitalSubheading>
            {/* <DigitalHeading>deltawave</DigitalHeading>
        <DigitalSubheading>
          Digital album listening experience
        </DigitalSubheading> */}
          </ContentContainer>
          <ContentContainer right>
            <SectionTitle>EXPERIENCE</SectionTitle>
            <ExperienceHeading href="https://www.hxouse.com" target="_blank">
              HXOUSE - <p>Developer + Program Director</p>
            </ExperienceHeading>
            <ExperienceHeading
              href="https://www.tangerine.ca/en"
              target="_blank"
            >
              Tangerine - <p>Frontend Developer Intern</p>
            </ExperienceHeading>
            <ExperienceHeading href="http://projectcipher.io/" target="_blank">
              Cipher - <p>Co-founder</p>
            </ExperienceHeading>
          </ContentContainer>
          <ContentContainer>
            <SectionTitle>PROJECTS</SectionTitle>
            <ExperienceHeading
              href="https://devpost.com/software/paper-piano-8yzaw9"
              target="_blank"
            >
              Paper Piano
            </ExperienceHeading>
            <ExperienceHeading
              href="https://github.com/uditdesai/clout-jar"
              target="_blank"
            >
              Cloutjar
            </ExperienceHeading>
            <ExperienceHeading
              href="https://github.com/uditdesai/map-app"
              target="_blank"
            >
              Mapping application
            </ExperienceHeading>
            <ExperienceHeading
              href="https://github.com/uditdesai/jukebox"
              target="_blank"
            >
              Retro Boombox
            </ExperienceHeading>
          </ContentContainer>
        </Container>
      )}
    </>
  )
}

export default Portfolio
