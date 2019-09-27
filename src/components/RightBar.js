import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"

//RIGHT BAR CONTAINER
const RightContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 15%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  border-left: 6px solid #000;
  display: grid;
  grid-template-rows: 70% 30%;
  grid-row-gap: 20px;
`
const SectionContainer = styled.div`
  width: 70%;
  justify-self: center;
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const SectionNumberContainer = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid #000;
  border-radius: 50%;
  margin: 40px 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-height: 720px) {
    width: 45px;
    height: 45px;
  }
  @media (max-height: 600px) {
    width: 35px;
    height: 35px;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    width: 65px;
    height: 65px;
    margin: 60px 0 40px 0;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    width: 70px;
    height: 70px;
    margin: 60px 0 40px 0;
  }
`
const SectionNumber = styled.p`
  font-family: "heebo";
  font-size: 30px;
  font-weight: 700;
  color: black;
  margin: 0;
  padding: 0;
  @media (max-height: 720px) {
    font-size: 24px;
  }
  @media (max-height: 600px) {
    font-size: 20px;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 35px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 40px;
  }
`
const SectionTitle = styled.h1`
  font-family: "heebo";
  font-size: 64px;
  font-weight: 700;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: black;
  letter-spacing: 2px;
  margin: 0;
  padding: 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  @media (max-height: 720px) {
    font-size: 56px;
  }
  @media (max-height: 650px) {
    font-size: 48px;
  }
  @media (max-height: 600px) {
    font-size: 42px;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 72px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 80px;
  }
`
const CreditContainer = styled.div`
  width: 70%;
  justify-self: center;
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
const CreditTitle = styled.h1`
  width: 100%;
  font-family: "heebo";
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin: 0;
  padding-top: 7px;
  border-top: 5px solid #000;
  @media (max-height: 720px) {
    font-size: 16px;
  }
  @media (max-height: 600px) {
    font-size: 14px;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 20px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 22px;
  }
`
const CreditLogo = styled.h1`
  width: 100%;
  font-family: "heebo";
  font-size: 70px;
  font-weight: 700;
  color: black;
  margin: 0;
  @media (max-height: 720px) {
    font-size: 50px;
  }
  @media (max-height: 600px) {
    font-size: 40px;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 80px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 100px;
  }
`
const CreditText = styled.p`
  font-family: "heebo";
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin: 0;
  padding: 0;
  @media (max-height: 720px) {
    font-size: 12px;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 16px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 18px;
  }
`

const RightBar = () => {
  return (
    <RightContainer>
      <SectionContainer>
        <SectionNumberContainer>
          <SectionNumber>1</SectionNumber>
        </SectionNumberContainer>
        <SectionTitle>UDIT DESAI</SectionTitle>
      </SectionContainer>
      <CreditContainer>
        <CreditTitle>Crafted by</CreditTitle>
        <CreditLogo>UD</CreditLogo>
        <CreditText>Toronto, Canada - 2019</CreditText>
      </CreditContainer>
    </RightContainer>
  )
}

export default RightBar
