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

  const invert = secNum => {
    if (secNum === 1) {
      TweenMax.to("#firstSection", 0.5, { backgroundColor: "black" })
      TweenMax.to(".text1", 0.5, { color: "white" })
    } else if (secNum === 2) {
      TweenMax.to("#secondSection", 0.5, { backgroundColor: "black" })
      TweenMax.to(".text2", 0.5, { color: "white" })
    } else if (secNum === 3) {
      TweenMax.to("#thirdSection", 0.5, { backgroundColor: "black" })
      TweenMax.to(".text3", 0.5, { color: "white" })
    }
  }

  const invertBack = secNum => {
    if (secNum === 1) {
      TweenMax.to("#firstSection", 0.5, { backgroundColor: "white" })
      TweenMax.to(".text1", 0.5, { color: "black" })
    } else if (secNum === 2) {
      TweenMax.to("#secondSection", 0.5, { backgroundColor: "white" })
      TweenMax.to(".text2", 0.5, { color: "black" })
    } else if (secNum === 3) {
      TweenMax.to("#thirdSection", 0.5, { backgroundColor: "white" })
      TweenMax.to(".text3", 0.5, { color: "black" })
    }
  }

  const hoverWorkLink = linkNum => {
    if (linkNum === 1) {
      TweenMax.to("#workLink1", 0.5, { color: "#828282" })
      TweenMax.to("#workDesc1", 0.5, { color: "#828282" })
    } else if (linkNum === 2) {
      TweenMax.to("#workLink2", 0.5, { color: "#828282" })
    } else if (linkNum === 3) {
      TweenMax.to("#workLink3", 0.5, { color: "#828282" })
    } else if (linkNum === 4) {
      TweenMax.to("#workLink4", 0.5, { color: "#828282" })
    } else if (linkNum === 5) {
      TweenMax.to("#workLink5", 0.5, { color: "#828282" })
    } else if (linkNum === 6) {
      TweenMax.to("#workLink6", 0.5, { color: "#828282" })
    } else if (linkNum === 7) {
      TweenMax.to("#workLink7", 0.5, { color: "#828282" })
    } else if (linkNum === 8) {
      TweenMax.to("#workLink8", 0.5, { color: "#828282" })
    }
  }

  const hoverWorkLinkBack = linkNum => {
    if (linkNum === 1) {
      TweenMax.to("#workLink1", 0.5, { color: "white" })
      TweenMax.to("#workDesc1", 0.5, { color: "white" })
    } else if (linkNum === 2) {
      TweenMax.to("#workLink2", 0.5, { color: "white" })
    } else if (linkNum === 3) {
      TweenMax.to("#workLink3", 0.5, { color: "white" })
    } else if (linkNum === 4) {
      TweenMax.to("#workLink4", 0.5, { color: "white" })
    } else if (linkNum === 5) {
      TweenMax.to("#workLink5", 0.5, { color: "white" })
    } else if (linkNum === 6) {
      TweenMax.to("#workLink6", 0.5, { color: "white" })
    } else if (linkNum === 7) {
      TweenMax.to("#workLink7", 0.5, { color: "white" })
    } else if (linkNum === 8) {
      TweenMax.to("#workLink8", 0.5, { color: "white" })
    }
  }

  return (
    <>
      {width > 800 ? (
        <Tilt options={{ max: 20 }}>
          <Container>
            <ContentContainer
              right
              id="firstSection"
              onMouseEnter={() => {
                invert(1)
              }}
              onMouseLeave={() => {
                invertBack(1)
              }}
            >
              <SectionTitle className="text1">DIGITAL WORK</SectionTitle>
              <DigitalHeading
                className="text1"
                href="https://www.hxouse.com"
                target="_blank"
                id="workLink1"
                onMouseEnter={() => {
                  hoverWorkLink(1)
                }}
                onMouseLeave={() => {
                  hoverWorkLinkBack(1)
                }}
              >
                HXOUSE.com
              </DigitalHeading>
              <DigitalSubheading className="text1" id="workDesc1">
                New immersive, content-filled website
              </DigitalSubheading>
              {/* <DigitalHeading className="text1" href="">deltawave</DigitalHeading>
        <DigitalSubheading className="text1">
          Digital album listening experience
        </DigitalSubheading> */}
            </ContentContainer>
            <ContentContainer
              right
              id="secondSection"
              onMouseEnter={() => {
                invert(2)
              }}
              onMouseLeave={() => {
                invertBack(2)
              }}
            >
              <SectionTitle className="text2">EXPERIENCE</SectionTitle>
              <ExperienceHeading
                className="text2"
                href="https://www.hxouse.com"
                target="_blank"
                id="workLink2"
                onMouseEnter={() => {
                  hoverWorkLink(2)
                }}
                onMouseLeave={() => {
                  hoverWorkLinkBack(2)
                }}
              >
                HXOUSE - <p>Developer + Program Director</p>
              </ExperienceHeading>
              <ExperienceHeading
                className="text2"
                href="https://www.tangerine.ca/en"
                target="_blank"
                id="workLink3"
                onMouseEnter={() => {
                  hoverWorkLink(3)
                }}
                onMouseLeave={() => {
                  hoverWorkLinkBack(3)
                }}
              >
                Tangerine - <p>Frontend Developer Intern</p>
              </ExperienceHeading>
              <ExperienceHeading
                className="text2"
                href="http://projectcipher.io/"
                target="_blank"
                id="workLink4"
                onMouseEnter={() => {
                  hoverWorkLink(4)
                }}
                onMouseLeave={() => {
                  hoverWorkLinkBack(4)
                }}
              >
                Cipher - <p>Co-founder</p>
              </ExperienceHeading>
            </ContentContainer>
            <ContentContainer
              id="thirdSection"
              onMouseEnter={() => {
                invert(3)
              }}
              onMouseLeave={() => {
                invertBack(3)
              }}
            >
              <SectionTitle className="text3">PROJECTS</SectionTitle>
              <ExperienceHeading
                className="text3"
                href="https://devpost.com/software/paper-piano-8yzaw9"
                target="_blank"
                id="workLink5"
                onMouseEnter={() => {
                  hoverWorkLink(5)
                }}
                onMouseLeave={() => {
                  hoverWorkLinkBack(5)
                }}
              >
                Paper Piano
              </ExperienceHeading>
              <ExperienceHeading
                className="text3"
                href="https://github.com/uditdesai/clout-jar"
                target="_blank"
                id="workLink6"
                onMouseEnter={() => {
                  hoverWorkLink(6)
                }}
                onMouseLeave={() => {
                  hoverWorkLinkBack(6)
                }}
              >
                Cloutjar
              </ExperienceHeading>
              <ExperienceHeading
                className="text3"
                href="https://github.com/uditdesai/map-app"
                target="_blank"
                id="workLink7"
                onMouseEnter={() => {
                  hoverWorkLink(7)
                }}
                onMouseLeave={() => {
                  hoverWorkLinkBack(7)
                }}
              >
                Mapping application
              </ExperienceHeading>
              <ExperienceHeading
                className="text3"
                href="https://github.com/uditdesai/jukebox"
                target="_blank"
                id="workLink8"
                onMouseEnter={() => {
                  hoverWorkLink(8)
                }}
                onMouseLeave={() => {
                  hoverWorkLinkBack(8)
                }}
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