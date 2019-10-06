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
`
const ContentContainer = styled.div`
  width: 600px;
  margin: 100px auto 0 auto;
`
const Introduction = styled.h1`
  font-family: "Heebo-Bold";
  font-size: 18px;
  margin: 0 0 25px 0;
  line-height: 1.3;
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
const Link = styled.a`
  font-family: "Heebo-Bold";
  font-size: 16px;
  margin: 0 0 15px 0;
  line-height: 1.3;
  text-decoration: none;
`
const CreditContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
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

const v3 = () => {
  // width and height of screen
  const { width, height } = useWindowSize()

  return (
    <Container>
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
            <Link>RESUME</Link>
            <Link>GITHUB</Link>
            <Link>INSTAGRAM</Link>
            <Link>LINKEDIN</Link>
            <Link>EMAIL</Link>
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

export default v3
