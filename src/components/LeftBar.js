import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"

import shoeDog from "../assets/shoe-dog.jpg"
import goodPlace from "../assets/good-place.jpg"

//LEFT BAR CONTAINER
const LeftContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 15%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 6px solid #000;
  display: grid;
  grid-template-rows: 20% 26% 54%;
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
  font-family: "Heebo-Bold";
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin: 40px 0 10px 0;
  padding-bottom: 3px;
  border-bottom: 5px solid #000;
  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-height: 700px) {
    font-size: 16px;
  }
  @media (max-height: 650px) {
    font-size: 14px;
    border-bottom: 4px solid #000;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 20px;
    margin: 60px 0 10px 0;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 22px;
    margin: 60px 0 10px 0;
  }
`
const NavigationLink = styled.p`
  font-family: "Heebo-Bold";
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin: 5px 0 0 0;
  padding: 0;
  @media (max-height: 650px) {
    font-size: 12px;
  }
  @media (max-height: 600px) {
    margin: 2px 0 0 0;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 16px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 18px;
    margin: 7px 0 0 0;
  }
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
  font-family: "Heebo-Bold";
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin: 0 0 10px 0;
  padding-bottom: 3px;
  border-bottom: 5px solid #000;
  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-height: 700px) {
    font-size: 16px;
  }
  @media (max-height: 650px) {
    font-size: 14px;
    border-bottom: 4px solid #000;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 20px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 22px;
  }
`
const SocialLink = styled.p`
  font-family: "Heebo-Bold";
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin: 5px 0 0 0;
  padding: 0;
  @media (max-height: 650px) {
    font-size: 12px;
  }
  @media (max-height: 600px) {
    margin: 2px 0 0 0;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 16px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 18px;
    margin: 7px 0 0 0;
  }
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
  font-family: "Heebo-Bold";
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin: 0 0 10px 0;
  padding-bottom: 3px;
  border-bottom: 5px solid #000;
  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-height: 700px) {
    font-size: 16px;
  }
  @media (max-height: 650px) {
    font-size: 14px;
    border-bottom: 4px solid #000;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 20px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 22px;
  }
`
const CurrentlySubText = styled.p`
  font-family: "Heebo-Regular";
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin: 15px 0 0 0;
  padding: 0;
  @media (max-height: 650px) {
    font-size: 12px;
    margin: 10px 0 0 0;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 16px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 18px;
  }
`
const CurrentlyText = styled.p`
  font-family: "Heebo-Bold";
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin: 0 0 0 0;
  padding: 0;
  @media (max-height: 650px) {
    font-size: 12px;
  }
  @media (min-height: 800px) and (min-width: 1300px) {
    font-size: 16px;
  }
  @media (min-height: 1000px) and (min-width: 1800px) {
    font-size: 18px;
  }
`

const LeftBar = () => {
  return (
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
        <SocialLink>Resume</SocialLink>
      </SocialContainer>
      <CurrentlyContainer>
        <CurrentlyTitle>CURRENTLY</CurrentlyTitle>
        <CurrentlySubText>In:</CurrentlySubText>
        <CurrentlyText>Toronto</CurrentlyText>
        <CurrentlySubText>At:</CurrentlySubText>
        <CurrentlyText>HXOUSE</CurrentlyText>
        <CurrentlySubText>Reading:</CurrentlySubText>
        <CurrentlyText>Shoe Dog</CurrentlyText>
        <CurrentlySubText>Watching:</CurrentlySubText>
        <CurrentlyText>The Good Place</CurrentlyText>
      </CurrentlyContainer>
    </LeftContainer>
  )
}

export default LeftBar
