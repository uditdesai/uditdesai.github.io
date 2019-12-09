import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap"
import { Helmet } from "react-helmet"
import useWindowSize from "../hooks/useWindowSize"
import Logo from "../assets/logo.jpg"
import Tilt from "react-tilt"
import favicon16 from "../assets/favicon16.png"
import favicon32 from "../assets/favicon32.png"
import favicon64 from "../assets/favicon64.png"

const LeftBar = styled.div`
  width: 350px;
  height: 100%;
  background: white;
  /* border-right: 3px solid black; */
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  padding: 40px 0 0 40px;
  opacity: 0;

  @media (max-width: 600px) {
    width: 100%;
    height: 50px;
    padding: 20px 0 0 20px;
  }
`

const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 20px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const PortfolioSectionTitle = styled.h1`
  text-decoration: none;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 18px;
  margin: 50px 0 30px 0;
`

const PortfolioSection = styled.div`
  display: flex;
  flex-direction: column;
`

const PortfolioItem = styled.div`
  display: flex;
  margin: 0 0 30px 0;
  align-items: center;
  &:last-child {
    margin: 0;
  }
`

const PortfolioItemNumber = styled.p`
  text-decoration: none;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 12px;
  box-sizing: border-box;
  border: 1px solid black;
  margin: 0;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PortfolioItemName = styled.p`
  text-decoration: none;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 14px;
  margin: 0 0 0 15px;
`

const RightBar = styled.div`
  width: 150px;
  height: 100%;
  background: white;
  /* border-left: 3px solid black; */
  position: fixed;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding: 0 40px 40px 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  opacity: 0;

  @media (max-width: 600px) {
    width: 100%;
    height: 50px;
    bottom: 0;
    top: auto;
    padding: 0 20px 20px 0;
  }
`
const CreditLogo = styled.img`
  width: 100px;

  @media (max-width: 600px) {
    width: 50px;
  }
`

const ComingSoon = styled.h1`
  text-decoration: none;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 50px;
  width: 300px;
  text-align: center;
  margin: 250px auto 0px auto;

  @media (max-width: 600px) {
    margin-top: 150px;
  }
`

const App = () => {
  // width and height of screen
  const { width, height } = useWindowSize()

  useEffect(() => {
    TweenMax.to("#leftBar", 2, { opacity: 1 })
    TweenMax.to("#rightBar", 2, { opacity: 1 })
  }, [])

  return (
    <>
      <LeftBar id="leftBar">
        <HomeLink to="/">UDIT DESAI - TORONTO 2019</HomeLink>
        {/* <PortfolioSectionTitle>DIGITAL</PortfolioSectionTitle>
        <PortfolioSection>
          <PortfolioItem>
            <PortfolioItemNumber>1</PortfolioItemNumber>
            <PortfolioItemName>HXOUSE website</PortfolioItemName>
          </PortfolioItem>
          <PortfolioItem>
            <PortfolioItemNumber>2</PortfolioItemNumber>
            <PortfolioItemName>Alyx x HXOUSE Growing Family</PortfolioItemName>
          </PortfolioItem>
          <PortfolioItem>
            <PortfolioItemNumber>3</PortfolioItemNumber>
            <PortfolioItemName>HXOUSE shop</PortfolioItemName>
          </PortfolioItem>
          <PortfolioItem>
            <PortfolioItemNumber>4</PortfolioItemNumber>
            <PortfolioItemName>Deltawave</PortfolioItemName>
          </PortfolioItem>
        </PortfolioSection>
        <PortfolioSectionTitle>PROJECTS</PortfolioSectionTitle>
        <PortfolioSection>
          <PortfolioItem>
            <PortfolioItemNumber>5</PortfolioItemNumber>
            <PortfolioItemName>Paper piano</PortfolioItemName>
          </PortfolioItem>
          <PortfolioItem>
            <PortfolioItemNumber>6</PortfolioItemNumber>
            <PortfolioItemName>Housekeeper</PortfolioItemName>
          </PortfolioItem>
          <PortfolioItem>
            <PortfolioItemNumber>7</PortfolioItemNumber>
            <PortfolioItemName>Cue</PortfolioItemName>
          </PortfolioItem>
        </PortfolioSection> */}
      </LeftBar>
      <RightBar id="rightBar">
        <Tilt options={{ max: 45 }}>
          <CreditLogo src={Logo} />
        </Tilt>
      </RightBar>
      <ComingSoon>PORTFOLIO COMING SOON</ComingSoon>
    </>
  )
}

export default App
