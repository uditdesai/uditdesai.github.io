import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { TweenMax } from "gsap"
import { Helmet } from "react-helmet"
import useWindowSize from "../hooks/useWindowSize"
import Portfolio from "../components/Portfolio"
import Logo from "../assets/logo.png"
import favicon16 from "../assets/favicon16.png"
import favicon32 from "../assets/favicon32.png"
import favicon64 from "../assets/favicon64.png"
import Tilt from "react-tilt"

//PARENT CONTAINER FOR WHOLE SITE
const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  perspective: 500px;
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

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

const ExpLink = styled.a`
  text-decoration: none;
  font-family: "Heebo-Bold";
  font-size: 18px;
  margin: 0 0 25px 0;
  line-height: 1.3;
  color: black;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

const NewLink = styled(Link)`
  text-decoration: none;
`

const PortfolioTilt = styled.div`
  text-decoration: none;
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
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
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
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`
const CreditLogo = styled.img`
  width: 100px;
  @media screen and (max-width: 600px) {
    width: 75px;
  }
`

const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: black;
  position: absolute;
  z-index: 10;
  pointer-events: none;
  transform: translateX(100px) translateY(50px);
  @media (max-width: 800px) {
    display: none;
  }
`

const App = () => {
  // width and height of screen
  const { width } = useWindowSize()

  const updateMouse = e => {
    // let x = (e.clientX / width) * 2 - 1
    // let y = (e.clientY / height) * 2 - 1

    TweenMax.to("#circle1", 1, {
      x: e.clientX + 20,
      y: e.clientY + 20,
    })
    TweenMax.to("#circle2", 1.15, {
      x: e.clientX + 23,
      y: e.clientY + 30,
    })
    TweenMax.to("#circle3", 1.3, {
      x: e.clientX + 27,
      y: e.clientY + 40,
    })
    TweenMax.to("#circle4", 1.45, {
      x: e.clientX + 34,
      y: e.clientY + 48,
    })
    TweenMax.to("#circle5", 1.6, {
      x: e.clientX + 44,
      y: e.clientY + 47,
    })
    TweenMax.to("#circle6", 1.75, {
      x: e.clientX + 51,
      y: e.clientY + 40,
    })
    TweenMax.to("#circle7", 1.9, {
      x: e.clientX + 50,
      y: e.clientY + 30,
    })
    TweenMax.to("#circle8", 2.05, {
      x: e.clientX + 47,
      y: e.clientY + 21,
    })
    TweenMax.to("#circle9", 2.2, {
      x: e.clientX + 44,
      y: e.clientY + 12,
    })

    TweenMax.to("#circle10", 1, {
      x: e.clientX + 50,
      y: e.clientY + 65,
    })
    TweenMax.to("#circle11", 1.15, {
      x: e.clientX + 58,
      y: e.clientY + 72,
    })
    TweenMax.to("#circle12", 1.3, {
      x: e.clientX + 60,
      y: e.clientY + 82,
    })
    TweenMax.to("#circle13", 1.45, {
      x: e.clientX + 55,
      y: e.clientY + 90,
    })
    TweenMax.to("#circle14", 1.6, {
      x: e.clientX + 49,
      y: e.clientY + 96,
    })
    TweenMax.to("#circle15", 1.75, {
      x: e.clientX + 40,
      y: e.clientY + 89,
    })
    TweenMax.to("#circle16", 1.9, {
      x: e.clientX + 32,
      y: e.clientY + 82,
    })
    TweenMax.to("#circle17", 2.05, {
      x: e.clientX + 24,
      y: e.clientY + 74,
    })
    TweenMax.to("#circle18", 2.2, {
      x: e.clientX + 31,
      y: e.clientY + 65,
    })
    TweenMax.to("#circle19", 2.35, {
      x: e.clientX + 40,
      y: e.clientY + 62,
    })
  }

  const hoverLink = linkNum => {
    if (linkNum === 1) {
      TweenMax.to("#link1", 0.5, { z: -10 })
    } else if (linkNum === 2) {
      TweenMax.to("#link2", 0.5, { z: -10 })
    } else if (linkNum === 3) {
      TweenMax.to("#link3", 0.5, { z: -10 })
    } else if (linkNum === 4) {
      TweenMax.to("#link4", 0.5, { z: -10 })
    } else if (linkNum === 5) {
      TweenMax.to("#link5", 0.5, { z: -10 })
    }
  }

  const hoverLinkBack = linkNum => {
    if (linkNum === 1) {
      TweenMax.to("#link1", 0.5, { z: 0 })
    } else if (linkNum === 2) {
      TweenMax.to("#link2", 0.5, { z: 0 })
    } else if (linkNum === 3) {
      TweenMax.to("#link3", 0.5, { z: 0 })
    } else if (linkNum === 4) {
      TweenMax.to("#link4", 0.5, { z: 0 })
    } else if (linkNum === 5) {
      TweenMax.to("#link5", 0.5, { z: 0 })
    }
  }

  useEffect(() => {
    TweenMax.to("#mainContainer", 2, { opacity: 1 })
  }, [])

  return (
    <>
      <Helmet
        meta={[
          { name: "description", content: "Udit Desai - Developer" },
          { name: "keywords", content: "developer" },
        ]}
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `${favicon16}`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: `${favicon32}`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "64x64",
            href: `${favicon64}`,
          },
        ]}
      >
        <title>UDIT DESAI</title>
      </Helmet>
      <Circle id="circle1"></Circle>
      <Circle id="circle2"></Circle>
      <Circle id="circle3"></Circle>
      <Circle id="circle4"></Circle>
      <Circle id="circle5"></Circle>
      <Circle id="circle6"></Circle>
      <Circle id="circle7"></Circle>
      <Circle id="circle8"></Circle>
      <Circle id="circle9"></Circle>
      <Circle id="circle10"></Circle>
      <Circle id="circle11"></Circle>
      <Circle id="circle12"></Circle>
      <Circle id="circle13"></Circle>
      <Circle id="circle14"></Circle>
      <Circle id="circle15"></Circle>
      <Circle id="circle16"></Circle>
      <Circle id="circle17"></Circle>
      <Circle id="circle18"></Circle>
      <Circle id="circle19"></Circle>
      <Container
        id="mainContainer"
        onMouseMove={
          width > 800
            ? e => {
                updateMouse(e)
              }
            : undefined
        }
      >
        <ContentContainer>
          <Introduction>
            Hey. I’m a design-focussed full-stack developer passionate about
            creating digital experiences and using new technologies to build
            projects that push boundaries and make life simpler.
          </Introduction>
          <Introduction>
            I’m currently an undergrad student at The University of Toronto
            studying computer engineering. I also work at{" "}
            <ExpLink href="https://www.hxouse.com">HXOUSE</ExpLink> to further
            develop Toronto’s creative and tech scene. I am currently open for
            freelance work.
          </Introduction>
          <NewLink to="/portfolio">
            <PortfolioTilt id="tiltPortfolio">
              <Portfolio />
            </PortfolioTilt>
          </NewLink>
          <Conclusion>
            <LinkContainer>
              <SLink
                href="https://drive.google.com/file/d/1Y5MVbWvVe_IN2nTnxOTOcv0aGGiN8q3T/view?usp=sharing"
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
              <Tilt options={{ max: 45 }}>
                <CreditLogo src={Logo}></CreditLogo>
              </Tilt>
            </CreditContainer>
          </Conclusion>
        </ContentContainer>
      </Container>
    </>
  )
}

export default App
