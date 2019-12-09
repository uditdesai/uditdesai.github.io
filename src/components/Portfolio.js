import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax, Power0 } from "gsap"
import useWindowSize from "../hooks/useWindowSize"
import { withAssetPrefix } from "gatsby"

//PARENT CONTAINER FOR WHOLE SITE
const Container = styled.div`
  margin: 50px 0 55px 0;
  padding: 0;
  width: 600px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  text-decoration: none;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 75px;
    margin: 30px 0 35px 0;
  }
`

const Prism = styled.div`
  width: 600px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-50px);

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 55px;
  }
`

const PrismFaceFront = styled.div`
  position: absolute;
  width: 594px;
  height: 100px;
  transform: rotateY(0deg) translateZ(53px);
  border: 3px solid black;
  /* background: white; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 294px;
    height: 55px;
    transform: rotateY(0deg) translateZ(30.5px);
  }
`

const PrismFaceBack = styled.div`
  position: absolute;
  width: 594px;
  height: 100px;
  transform: rotateY(180deg) translateZ(53px) rotateZ(180deg);
  border: 3px solid black;
  /* background: white; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 294px;
    height: 55px;
    transform: rotateY(180deg) translateZ(30.5px) rotateZ(180deg);
  }
`

const PrismFaceTop = styled.div`
  position: absolute;
  width: 594px;
  height: 100px;
  transform: rotateX(90deg) translateZ(53px);
  border: 3px solid black;
  /* background: black; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 294px;
    height: 55px;
    transform: rotateX(90deg) translateZ(30.5px);
  }
`

const PrismFaceBottom = styled.div`
  position: absolute;
  width: 594px;
  height: 100px;
  transform: rotateX(-90deg) translateZ(53px);
  border: 3px solid black;
  /* background: black; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 294px;
    height: 55px;
    transform: rotateX(-90deg) translateZ(30.5px);
  }
`

const PrismFaceRight = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  transform: rotateY(90deg) translateZ(547px);
  border: 3px solid black;
  /* background: white; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    transform: rotateY(90deg) translateZ(269px);
    width: 55px;
    height: 55px;
  }
`

const PrismFaceLeft = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  transform: rotateY(-90deg) translateZ(53px);
  border: 3px solid black;
  /* background: white; */
  @media screen and (max-width: 600px) {
    transform: rotateY(-90deg) translateZ(30.5px);
    width: 55px;
    height: 55px;
  }
`

const SectionTitle = styled.h1`
  text-decoration: none;
  font-family: "Heebo-Bold";
  font-size: 54px;
  line-height: 1.2;
  letter-spacing: 20px;
  color: ${props => `${props.color}`};

  @media screen and (max-width: 600px) {
    font-size: 24px;
    letter-spacing: 10px;
  }
`

const Portfolio = () => {
  // width and height of screen
  const { width, height } = useWindowSize()
  const [currRot, setCurrRot] = useState(10)

  useEffect(() => {
    const tl = new TimelineMax({ repeat: -1 })
    tl.to("#prism", 10, {
      rotationX: "-= 360",
      ease: Power0.easeNone,
    })
    tl.to(
      "#portfolioText",
      2,
      {
        color: "white",
      },
      "1"
    )
    tl.to(
      "#portfolioText",
      2,
      {
        color: "black",
      },
      "8"
    )
    tl.to(
      "#backPortfolio",
      2,
      {
        color: "white",
      },
      "6"
    )
    tl.to(
      "#backPortfolio",
      2,
      {
        color: "black",
      },
      "3"
    )
    tl.to(
      "#digitalText",
      2,
      {
        color: "black",
      },
      "0"
    )
    tl.to(
      "#digitalText",
      2,
      {
        color: "white",
      },
      "3"
    )
    tl.to(
      "#fullstackText",
      2,
      {
        color: "white",
      },
      "8"
    )
    tl.to(
      "#fullstackText",
      2,
      {
        color: "black",
      },
      "5"
    )
  }, [])

  const hoverPortfolio = () => {
    TweenMax.to("#faceFront", 0.5, { css: { border: "3px solid #828282" } })
    TweenMax.to("#faceBack", 0.5, { css: { border: "3px solid #828282" } })
    TweenMax.to("#faceTop", 0.5, { css: { border: "3px solid #828282" } })
    TweenMax.to("#faceBottom", 0.5, { css: { border: "3px solid #828282" } })
    TweenMax.to("#faceRight", 0.5, { css: { border: "3px solid #828282" } })
    TweenMax.to("#faceLeft", 0.5, { css: { border: "3px solid #828282" } })
  }

  const HoverPortfolioOut = () => {
    TweenMax.to("#faceFront", 0.5, { css: { border: "3px solid black" } })
    TweenMax.to("#faceBack", 0.5, { css: { border: "3px solid black" } })
    TweenMax.to("#faceTop", 0.5, { css: { border: "3px solid black" } })
    TweenMax.to("#faceBottom", 0.5, { css: { border: "3px solid black" } })
    TweenMax.to("#faceRight", 0.5, { css: { border: "3px solid black" } })
    TweenMax.to("#faceLeft", 0.5, { css: { border: "3px solid black" } })
  }

  return (
    <>
      <Container
        id="prismContainer"
        onMouseEnter={hoverPortfolio}
        onMouseLeave={HoverPortfolioOut}
      >
        <Prism id="prism">
          <PrismFaceFront id="faceFront">
            <SectionTitle id="portfolioText" color="black">
              PORTFOLIO
            </SectionTitle>
          </PrismFaceFront>
          <PrismFaceBack id="faceBack">
            <SectionTitle id="backPortfolio" color="white">
              PORTFOLIO
            </SectionTitle>
          </PrismFaceBack>
          <PrismFaceRight id="faceRight"></PrismFaceRight>
          <PrismFaceLeft id="faceLeft"></PrismFaceLeft>
          <PrismFaceTop id="faceTop">
            <SectionTitle id="digitalText" color="white">
              DIGITAL
            </SectionTitle>
          </PrismFaceTop>
          <PrismFaceBottom id="faceBottom">
            <SectionTitle id="fullstackText" color="white">
              FULLSTACK
            </SectionTitle>
          </PrismFaceBottom>
        </Prism>
      </Container>
    </>
  )
}

export default Portfolio
