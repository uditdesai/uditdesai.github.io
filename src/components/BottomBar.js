import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"

//BOTTOM BAR CONTAINER
const BottomContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top: 3px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BottomContentContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const SectionContainer = styled.div`
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-right: 3px solid #000;
`
const SectionNumberContainer = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid #000;
  border-radius: 50%;
  margin: 0 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SectionNumber = styled.p`
  font-family: "Heebo-Bold";
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin: 0;
  padding: 0;
`
const SectionTitle = styled.h1`
  font-family: "Heebo-Bold";
  font-size: 18px;
  font-weight: 700;
  color: black;
  letter-spacing: 2px;
  margin: 0 20px 0 0;
  padding: 0;
`
const NavigationContainer = styled.div`
  height: 100%;
  margin: 0 0 0 10px;
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
  margin: 0 10px 0 0;
  padding: 0;
`
const CreditContainer = styled.div`
  margin: 0 0 0 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CreditLogo = styled.h1`
  font-family: "Hind";
  font-size: 40px;
  font-weight: 700;
  color: black;
  margin: 0;
`

const BottomBar = () => {
  return (
    <BottomContainer>
      <BottomContentContainer>
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
      </BottomContentContainer>
    </BottomContainer>
  )
}

export default BottomBar
