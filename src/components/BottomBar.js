import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"

//BOTTOM BAR CONTAINER
const BottomContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background: #fff;
  border-top: 6px solid #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const SectionContainer = styled.div`
  margin: 0;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-right: 3px solid #000;
`
const SectionNumberContainer = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid #000;
  border-radius: 50%;
  margin: 0 30px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SectionNumber = styled.p`
  font-family: "Heebo-Bold";
  font-size: 20px;
  font-weight: 700;
  color: black;
  margin: 0;
  padding: 0;
`
const SectionTitle = styled.h1`
  font-family: "Heebo-Bold";
  font-size: 24px;
  font-weight: 700;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  letter-spacing: 2px;
  margin: 0 30px 0 0;
  padding: 0;
`
const NavigationContainer = styled.div`
  height: 70px;
  margin: 0 0 0 30px;
  padding: 0 30px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-right: 3px solid #000;
`
const NavigationLink = styled.p`
  font-family: "Heebo-Bold";
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin: 0;
  padding: 0;
`
const CreditContainer = styled.div`
  margin: 0 0 0 30px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CreditLogo = styled.h1`
  font-family: "Hind";
  font-size: 60px;
  font-weight: 700;
  color: black;
  margin: 0;
`

const BottomBar = () => {
  return (
    <BottomContainer>
      <SectionContainer>
        <SectionNumberContainer>
          <SectionNumber>1</SectionNumber>
        </SectionNumberContainer>
        <SectionTitle>UDIT DESAI</SectionTitle>
      </SectionContainer>
      <NavigationContainer>
        <NavigationLink>Portfolio</NavigationLink>
        <NavigationLink>About</NavigationLink>
      </NavigationContainer>
      <CreditContainer>
        <CreditLogo>UD</CreditLogo>
      </CreditContainer>
    </BottomContainer>
  )
}

export default BottomBar