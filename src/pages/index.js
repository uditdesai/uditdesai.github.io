import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"
import { Helmet } from "react-helmet"
import useWindowSize from "../hooks/useWindowSize"
import Portfolio from "../components/Portfolio"
import Logo from "../assets/logo.jpg"

//PARENT CONTAINER FOR WHOLE SITE
const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  opacity: 0;
`
const ContentContainer = styled.div`
  width: 600px;
  padding: 100px 0 0 0;
  margin: 0 auto 0 auto;
  @media (max-width: 600px) {
    padding: 50px 0 0 0;
    margin: 0 auto 0 auto;
    width: 300px;
  }
`
const Introduction = styled.h1`
  font-family: "Heebo-Bold";
  font-size: 18px;
  margin: 0 0 25px 0;
  line-height: 1.3;
  color: black;
`
const Conclusion = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 30px 0 25px 0;
`
const LinkContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const SLink = styled.a`
  font-family: "Heebo-Bold";
  font-size: 16px;
  margin: 0 0 15px 0;
  line-height: 1.3;
  text-decoration: none;
  color: black;
`
const CreditContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  @media (max-width: 600px) {
    width: 100px;
  }
`
const CreditTag = styled.p`
  font-family: "Heebo-Bold";
  font-size: 16px;
  margin: 0 0 20px 0;
  line-height: 1.3;
`
const CreditLogo = styled.img`
  width: 100px;
`

const App = () => {
  // width and height of screen
  const { width, height } = useWindowSize()

  const hoverLink = linkNum => {
    if (linkNum === 1) {
      TweenMax.to("#link1", 0.5, { color: "#828282" })
    } else if (linkNum === 2) {
      TweenMax.to("#link2", 0.5, { color: "#828282" })
    } else if (linkNum === 3) {
      TweenMax.to("#link3", 0.5, { color: "#828282" })
    } else if (linkNum === 4) {
      TweenMax.to("#link4", 0.5, { color: "#828282" })
    } else if (linkNum === 5) {
      TweenMax.to("#link5", 0.5, { color: "#828282" })
    }
  }

  const hoverLinkBack = linkNum => {
    if (linkNum === 1) {
      TweenMax.to("#link1", 0.5, { color: "black" })
    } else if (linkNum === 2) {
      TweenMax.to("#link2", 0.5, { color: "black" })
    } else if (linkNum === 3) {
      TweenMax.to("#link3", 0.5, { color: "black" })
    } else if (linkNum === 4) {
      TweenMax.to("#link4", 0.5, { color: "black" })
    } else if (linkNum === 5) {
      TweenMax.to("#link5", 0.5, { color: "black" })
    }
  }

  useEffect(() => {
    TweenMax.to("#container", 2, { autoAlpha: 1 })
  }, [])

  return (
    <Container id="container">
      <ContentContainer>
        <Introduction>
          Hey. I’m a full-stack developer passionate about creating digital
          experiences on the web and using new technologies to build projects
          that make life easier and more fun.
        </Introduction>
        <Introduction>
          I’m currently an undergraduate student at The University of Toronto
          studying computer engineering. I also work at HXOUSE to build new
          programming and curriculum a long with working on technical projects.
        </Introduction>
        <Portfolio></Portfolio>
        <Conclusion>
          <LinkContainer>
            <SLink
              href="https://drive.google.com/file/d/1t5UnaVPL3HoxOMG1N_A36pX1UAQx5Ihu/view"
              target="_blank"
              id="link1"
              onMouseEnter={() => {
                hoverLink(1)
              }}
              onMouseLeave={() => {
                hoverLinkBack(1)
              }}
            >
              RESUME
            </SLink>
            <SLink
              href="https://github.com/uditdesai"
              target="_blank"
              id="link2"
              onMouseEnter={() => {
                hoverLink(2)
              }}
              onMouseLeave={() => {
                hoverLinkBack(2)
              }}
            >
              GITHUB
            </SLink>
            <SLink
              href="https://www.instagram.com/uydesai/?hl=en"
              target="_blank"
              id="link3"
              onMouseEnter={() => {
                hoverLink(3)
              }}
              onMouseLeave={() => {
                hoverLinkBack(3)
              }}
            >
              INSTAGRAM
            </SLink>
            <SLink
              href="https://www.linkedin.com/in/uditdesai/"
              target="_blank"
              id="link4"
              onMouseEnter={() => {
                hoverLink(4)
              }}
              onMouseLeave={() => {
                hoverLinkBack(4)
              }}
            >
              LINKEDIN
            </SLink>
            <SLink
              href="mailto:udit.desai3@gmail.com?subject=Hey Udit!"
              id="link5"
              onMouseEnter={() => {
                hoverLink(5)
              }}
              onMouseLeave={() => {
                hoverLinkBack(5)
              }}
            >
              EMAIL
            </SLink>
          </LinkContainer>
          <CreditContainer>
            <CreditTag>UDIT DESAI - TORONTO 2019</CreditTag>
            <CreditLogo src={Logo}></CreditLogo>
          </CreditContainer>
        </Conclusion>
      </ContentContainer>
    </Container>
  )
}

export default App
