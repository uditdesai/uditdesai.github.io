import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"
import { Helmet } from "react-helmet"

import LeftBar from "../components/LeftBar"
import RightBar from "../components/RightBar"

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
`
const StartContainer = styled.div`
  width: 80%;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const Greeting = styled.h1`
  font-family: "Hind";
  font-size: 140px;
  color: black;
  margin: 0 0 0 -8px;
`
const Introduction = styled.h2`
  font-family: "Roboto-Bold";
  font-family: 700;
  font-size: 50px;
  margin: 0;
  line-height: 1.2;
`
const ColorPicker = styled.div`
  width: 100%;
  height: 120px;
  margin: 80px 0 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const ColorBox = styled.div`
  width: 120px;
  height: 120px;
  background: ${props => `${props.color}`};
  margin: 0;
`
const ColorUnderline = styled.div`
  width: 120px;
  height: 5px;
  background: #000;
  margin: 20px 0 0 0;
`

const v2 = () => {
  // parameters to run animations based on scroll
  let scrollTotal = 0
  let scrollPosY = 0

  return (
    <Container>
      <Helmet>
        <title>Udit Desai</title>
      </Helmet>
      <LeftBar />
      <RightBar />
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
      </ContentContainer>
    </Container>
  )
}

export default v2
