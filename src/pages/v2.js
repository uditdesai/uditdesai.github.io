import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"
import { Helmet } from "react-helmet"
import useWindowSize from "../hooks/useWindowSize"

import LeftBar from "../components/LeftBar"
import RightBar from "../components/RightBar"
import BottomBar from "../components/BottomBar"
import SkillTag from "../components/SkillTag"

//PARENT CONTAINER FOR WHOLE SITE
const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
`
//CONTENT CONTAINER
const ContentContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto 0 auto;
  padding: 0;
  @media (max-width: 800px) {
    width: 85%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`
//HOME SCREEN
const StartContainer = styled.div`
  width: 80%;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 500px) {
    margin: 30px auto 0 auto;
    width: 85%;
  }
`
const Greeting = styled.h1`
  font-family: "Hind";
  font-size: 140px;
  color: black;
  margin: 0 0 0 -6px;
  letter-spacing: 5px;
  -webkit-text-fill-color: black; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: black;
  @media (max-width: 1000px) {
    font-size: 120px;
  }
  @media (max-width: 500px) {
    font-size: 80px;
  }
`
const Introduction = styled.h2`
  font-family: "Roboto-Bold";
  font-family: 700;
  font-size: 50px;
  margin: 0;
  line-height: 1.2;
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`
const ColorPicker = styled.div`
  width: 100%;
  height: 120px;
  margin: 80px 0 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1200px) {
    height: 100px;
  }
  @media (max-width: 1000px) {
    height: 80px;
  }
  @media (max-width: 800px) {
    height: 60px;
  }
  @media (max-width: 500px) {
    margin: 40px 0 0 0;
    height: 120px;
    width: 180px;
    display: grid;
    grid-template-columns: 60px 60px 60px;
    grid-template-rows: 60px 60px;
  }
`
const ColorBox = styled.div`
  width: 120px;
  height: 120px;
  background: ${props => `${props.color}`};
  margin: 0;
  @media (max-width: 1200px) {
    height: 100px;
    width: 100px;
  }
  @media (max-width: 1000px) {
    height: 80px;
    width: 80px;
  }
  @media (max-width: 800px) {
    height: 60px;
    width: 60px;
  }
`
const ColorUnderline = styled.div`
  width: 120px;
  height: 5px;
  background: #000;
  margin: 20px 0 0 0;
  @media (max-width: 500px) {
    display: none;
  }
`
//PORTFOLIO SCREEN
const PortfolioContainer = styled.div`
  width: 80%;
  margin: 200px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 500px) {
    margin: 100px auto 0 auto;
    width: 85%;
  }
`
const PortfolioTitle = styled.h1`
  font-family: "Hind";
  font-size: 120px;
  letter-spacing: 5px;
  color: black;
  margin: 0 0 0 -6px;
  -webkit-text-fill-color: black; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: black;
  @media (max-width: 1200px) {
    font-size: 100px;
  }
  @media (max-width: 1000px) {
    font-size: 80px;
  }
  @media (max-width: 800px) {
    font-size: 64px;
  }
  @media (max-width: 500px) {
    font-size: 45px;
    margin: 0 0 0 0;
  }
`
const PortfolioInnerTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const PortfolioInnerTitleLine = styled.div`
  width: 5px;
  height: 28px;
  background: black;
  margin-bottom: 4px;
  @media (max-width: 800px) {
    height: 22px;
  }
  @media (max-width: 500px) {
    height: 15px;
    margin-bottom: 3px;
  }
`
const PortfolioInnerTitle = styled.h3`
  font-family: "Heebo-Bold";
  font-size: 40px;
  color: black;
  margin: 0 0 0 10px;
  @media (max-width: 800px) {
    font-size: 28px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    margin: 0 0 0 5px;
  }
`
const SkillsSectionContainer = styled.div`
  width: 100%;
  margin: 0 0 30px 0;
`
const SkillsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const SkillsTitle = styled.h5`
  font-family: "Heebo-Bold";
  font-size: 20px;
  color: black;
  margin: 20px 0 0 0;
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`

const v2 = () => {
  // width and height of screen
  const { width, height } = useWindowSize()

  // parameters to run animations based on scroll
  let scrollTotal = 0
  let scrollPosY = 0

  return (
    <Container>
      <Helmet>
        <title>Udit Desai</title>
      </Helmet>
      {width > 800 && height > 520 ? (
        width < 1000 && height > 1000 ? (
          <BottomBar />
        ) : (
          <>
            <LeftBar />
            <RightBar />
          </>
        )
      ) : (
        <BottomBar />
      )}
      <ContentContainer>
        <StartContainer>
          <Greeting>HEY,</Greeting>
          <Introduction>
            I’m a computer engineering student/programmer who is also into
            design.
          </Introduction>
          <ColorPicker>
            <ColorBox color="#000"></ColorBox>
            <ColorBox color="#009B77"></ColorBox>
            <ColorBox color="#F2C94C"></ColorBox>
            <ColorBox color="#BB6BC9"></ColorBox>
            <ColorBox color="#F2994A"></ColorBox>
            <ColorBox color="#2D9CDB"></ColorBox>
          </ColorPicker>
          <ColorUnderline></ColorUnderline>
        </StartContainer>
        <PortfolioContainer>
          <PortfolioTitle>PORTFOLIO:</PortfolioTitle>
          <PortfolioInnerTitleContainer>
            <PortfolioInnerTitleLine></PortfolioInnerTitleLine>
            <PortfolioInnerTitle>SKILLS</PortfolioInnerTitle>
          </PortfolioInnerTitleContainer>
          <SkillsSectionContainer>
            <SkillsTitle>Languages</SkillsTitle>
            <SkillsContainer>
              <SkillTag name="HTML" />
              <SkillTag name="CSS" />
              <SkillTag name="Javascript" />
              <SkillTag name="Python" />
              <SkillTag name="C++/C" />
            </SkillsContainer>
            <SkillsTitle>Technologies</SkillsTitle>
            <SkillsContainer>
              <SkillTag name="React" />
              <SkillTag name="GatsbyJS" />
              <SkillTag name="Node" />
              <SkillTag name="MongoDB" />
              <SkillTag name="Firebase" />
              <SkillTag name="Git" />
              <SkillTag name="GSAP" />
              <SkillTag name="ThreeJS" />
              <SkillTag name="OpenCV" />
              <SkillTag name="Heroku" />
              <SkillTag name="JIRA" />
              <SkillTag name="VScode" />
            </SkillsContainer>
            <SkillsTitle>Design</SkillsTitle>
            <SkillsContainer>
              <SkillTag name="Figma" />
              <SkillTag name="Sketch" />
              <SkillTag name="Wireframes" />
            </SkillsContainer>
          </SkillsSectionContainer>
        </PortfolioContainer>
      </ContentContainer>
    </Container>
  )
}

export default v2
