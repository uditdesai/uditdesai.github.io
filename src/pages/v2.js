import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"

import shoeDog from "../assets/shoe-dog.jpg"
import goodPlace from "../assets/good-place.jpg"

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

//LEFT BAR CONTAINER
const LeftContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 15%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 6px solid #000;
  display: grid;
  grid-template-rows: 20% 22% 58%;
  grid-row-gap: 20px;
`
const NavigationContainer = styled.div`
  width: 70%;
  justify-self: center;
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
const NavigationTitle = styled.h1`
  width: 100%;
  font-family: "heebo";
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin: 40px 0 10px 0;
  padding-bottom: 3px;
  border-bottom: 5px solid #000;
`
const NavigationLink = styled.p`
  font-family: "heebo";
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin: 5px 0 0 0;
  padding: 0;
`
const SocialContainer = styled.div`
  width: 70%;
  justify-self: center;
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10px;
`
const SocialTitle = styled.h1`
  width: 100%;
  font-family: "heebo";
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin: 0 0 10px 0;
  padding-bottom: 3px;
  border-bottom: 5px solid #000;
`
const SocialLink = styled.p`
  font-family: "heebo";
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin: 5px 0 0 0;
  padding: 0;
`
const CurrentlyContainer = styled.div`
  width: 70%;
  justify-self: center;
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10px;
`
const CurrentlyTitle = styled.h1`
  width: 100%;
  font-family: "heebo";
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin: 0 0 10px 0;
  padding-bottom: 3px;
  border-bottom: 5px solid #000;
`
const CurrentlyText = styled.p`
  font-family: "heebo";
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin: 0;
  padding: 0;
`
const CurrentlyImage = styled.img`
  width: 80%;
  margin: 5px 0 10px 0;
`

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
`
const SectionNumber = styled.p`
  font-family: "heebo";
  font-size: 30px;
  font-weight: 700;
  color: black;
  margin: 0;
  padding: 0;
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
`
const CreditLogo = styled.h1`
  width: 100%;
  font-family: "heebo";
  font-size: 70px;
  font-weight: 700;
  color: black;
  margin: 0;
`
const CreditText = styled.p`
  font-family: "heebo";
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin: 0;
  padding: 0;
`

const v2 = () => {
  // parameters to run animations based on scroll
  let scrollTotal = 0
  let scrollPosY = 0

  return (
    <Container>
      <LeftContainer>
        <NavigationContainer>
          <NavigationTitle>UDIT DESAI</NavigationTitle>
          <NavigationLink>Portfolio</NavigationLink>
          <NavigationLink>About</NavigationLink>
        </NavigationContainer>
        <SocialContainer>
          <SocialTitle>CONNECT</SocialTitle>
          <SocialLink>Instagram</SocialLink>
          <SocialLink>Twitter</SocialLink>
          <SocialLink>Github</SocialLink>
          <SocialLink>Linkedin</SocialLink>
        </SocialContainer>
        <CurrentlyContainer>
          <CurrentlyTitle>CURRENTLY</CurrentlyTitle>
          <CurrentlyText>Reading:</CurrentlyText>
          <CurrentlyText>Shoe Dog</CurrentlyText>
          <CurrentlyImage src={shoeDog} />
        </CurrentlyContainer>
      </LeftContainer>
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
      <ContentContainer></ContentContainer>
    </Container>
  )
}

export default v2
