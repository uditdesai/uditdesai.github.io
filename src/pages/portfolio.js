import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TweenMax, TimelineMax, Power0 } from "gsap"
import useWindowSize from "../hooks/useWindowSize"
import Logo from "../assets/logo.png"
import Tilt from "react-tilt"
import Project from "../components/Project"

const Slider = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
`

const MobileMenu = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0;
  background-color: #ffffff;
  z-index: 20;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftBar = styled.div`
  width: 350px;
  height: 100%;
  background: white;
  /* border-right: 3px solid black; */
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  padding: 40px 0 0 40px;
  opacity: 1;
  perspective: 500px;
  z-index: 15;

  @media (max-width: 800px) {
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    padding: 20px 0 0 20px;
    background: none;
  }
`

const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 20px;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`

const PortfolioSectionTitle = styled.h1`
  text-decoration: none;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 18px;
  margin: 50px 0 30px 0;

  @media (max-width: 800px) {
    margin: 10px 0 20px 0;
    width: calc(100% - 40px);
  }
`

const PortfolioSection = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
`

const PortfolioItem = styled.div`
  display: flex;
  margin: 0 0 30px 0;
  align-items: center;
  cursor: pointer;
  &:last-child {
    margin: 0;
  }

  @media (max-width: 800px) {
    margin: 0 0 15px 0;
    &:last-child {
      margin: 0 0 10px 0;
    }
  }
`

const PortfolioItemNumber = styled.p`
  text-decoration: none;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 12px;
  box-sizing: border-box;
  border: 1px solid black;
  margin: 0;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    margin: 0 20px 0 0;
  }
`

const PortfolioItemName = styled.p`
  text-decoration: none;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 14px;
  margin: 0 0 0 15px;

  @media (max-width: 800px) {
    font-size: 12px;
    margin: 0 25px 0 0;
  }
`

const RightBar = styled.div`
  width: 150px;
  height: 100%;
  background: white;
  /* border-left: 3px solid black; */
  position: fixed;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding: 0 40px 40px 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  opacity: 1;
  z-index: 15;

  @media (max-width: 800px) {
    width: 100%;
    height: 50px;
    background: none;
    bottom: 0;
    top: calc(100% - 50px);
    padding: 0 20px 20px 20px;
    justify-content: space-between;
  }
`
const CreditLogo = styled.img`
  width: 100px;

  @media (max-width: 800px) {
    height: 60px;
    width: auto;
  }
`

const StartLogo = styled(CreditLogo)`
  opacity: 0;
`

const MobilePortfolioContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const MobileProjectsLink = styled.p`
  text-decoration: underline;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 16px;
  margin: 0;
`

const ComingSoon = styled.h1`
  text-decoration: none;
  color: black;
  font-family: "Heebo-Bold";
  font-size: 50px;
  width: 300px;
  text-align: center;
  margin: 250px auto 0px auto;
  opacity: 0;

  @media (max-width: 800px) {
    margin-top: 150px;
  }
`

const portfolio = () => {
  // width and height of screen
  const { width, height } = useWindowSize()

  const [project, setProject] = useState(1)
  const [projectClick, setProjectClick] = useState(1)
  const [isLeft, setIsLeft] = useState(true)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openMobileMenu = () => {
    if (mobileMenuOpen) {
      TweenMax.to("#mobileMenu", 0.5, { autoAlpha: 0 })
      setMobileMenuOpen(false)
    } else {
      TweenMax.to("#mobileMenu", 0.5, { autoAlpha: 1 })
      setMobileMenuOpen(true)
    }
  }

  useEffect(() => {
    TweenMax.set("#pageSlider", {
      height: document
        .getElementById("projectContainer")
        .getBoundingClientRect().height,
    })
  }, [projectClick, project])

  useEffect(() => {
    TweenMax.to("#startLogo", 1, {
      opacity: 1,
    })
    TweenMax.to("#startLogo", 1, {
      x: width / 2 - 90,
      y: height / 2 - 100,
      opacity: 0,
      delay: 1,
    })
    TweenMax.to("#startOverlay", 1, { autoAlpha: 0, delay: 2 })
    TweenMax.set("#pageSlider", { x: -width })
  }, [])

  const hoverPortItem = i => {
    TweenMax.to(`#portItem${i}`, 0.5, { z: -10 })
  }

  const hoverPortItemLeave = i => {
    TweenMax.to(`#portItem${i}`, 0.5, { z: 0 })
  }

  const projectHandler = i => {
    setProjectClick(i)
    if (width > 800) {
      if (isLeft) {
        TweenMax.to("#pageSlider", 1, {
          x: 0,
          ease: Power0.easeNone,
          onComplete: () => {
            setIsLeft(false)
            setProject(i)
            TweenMax.to("#pageSlider", 1, { x: width, ease: Power0.easeNone })
            window.scrollTo(0, 0)
          },
        })
      } else {
        TweenMax.to("#pageSlider", 1, {
          x: 0,
          ease: Power0.easeNone,
          onComplete: () => {
            setIsLeft(true)
            setProject(i)
            TweenMax.to("#pageSlider", 1, { x: -width, ease: Power0.easeNone })
            window.scrollTo(0, 0)
          },
        })
      }
    } else {
      window.scrollTo(0, 0)
      TweenMax.to("#mobileMenu", 1, { autoAlpha: 0, delay: 0.5 })
      setMobileMenuOpen(false)
      setProject(i)
    }
  }

  useEffect(() => {
    TweenMax.to(`#portItemNum${projectClick}`, 0.5, {
      color: "white",
      backgroundColor: "black",
    })
    for (let i = 0; i < projectClick; i++) {
      TweenMax.to(`#portItemNum${i}`, 0.5, {
        color: "black",
        backgroundColor: "white",
      })
    }
    for (let i = projectClick + 1; i < 8; i++) {
      TweenMax.to(`#portItemNum${i}`, 0.5, {
        color: "black",
        backgroundColor: "white",
      })
    }
  }, [projectClick])

  return (
    <>
      <Overlay id="startOverlay">
        <StartLogo id="startLogo" src={Logo} />
      </Overlay>
      {width > 800 ? (
        <Slider id="pageSlider"></Slider>
      ) : (
        <MobileMenu id="mobileMenu">
          <PortfolioSectionTitle>DIGITAL</PortfolioSectionTitle>
          <PortfolioSection>
            <PortfolioItem
              id="portItem1"
              onMouseEnter={() => {
                hoverPortItem(1)
              }}
              onMouseLeave={() => {
                hoverPortItemLeave(1)
              }}
              onClick={() => {
                projectHandler(1)
              }}
            >
              <PortfolioItemNumber id="portItemNum1">1</PortfolioItemNumber>
              <PortfolioItemName>HXOUSE Website</PortfolioItemName>
            </PortfolioItem>
            <PortfolioItem
              id="portItem2"
              onMouseEnter={() => {
                hoverPortItem(2)
              }}
              onMouseLeave={() => {
                hoverPortItemLeave(2)
              }}
              onClick={() => {
                projectHandler(2)
              }}
            >
              <PortfolioItemNumber id="portItemNum2">2</PortfolioItemNumber>
              <PortfolioItemName>
                Alyx x HXOUSE Growing Family
              </PortfolioItemName>
            </PortfolioItem>
          </PortfolioSection>
          <PortfolioSectionTitle>PROJECTS</PortfolioSectionTitle>
          <PortfolioSection>
            <PortfolioItem
              id="portItem3"
              onMouseEnter={() => {
                hoverPortItem(3)
              }}
              onMouseLeave={() => {
                hoverPortItemLeave(3)
              }}
              onClick={() => {
                projectHandler(3)
              }}
            >
              <PortfolioItemNumber id="portItemNum3">3</PortfolioItemNumber>
              <PortfolioItemName>Paper Piano</PortfolioItemName>
            </PortfolioItem>
            <PortfolioItem
              id="portItem4"
              onMouseEnter={() => {
                hoverPortItem(4)
              }}
              onMouseLeave={() => {
                hoverPortItemLeave(4)
              }}
              onClick={() => {
                projectHandler(4)
              }}
            >
              <PortfolioItemNumber id="portItemNum4">4</PortfolioItemNumber>
              <PortfolioItemName>Housekeeper</PortfolioItemName>
            </PortfolioItem>
            <PortfolioItem
              id="portItem5"
              onMouseEnter={() => {
                hoverPortItem(5)
              }}
              onMouseLeave={() => {
                hoverPortItemLeave(5)
              }}
              onClick={() => {
                projectHandler(5)
              }}
            >
              <PortfolioItemNumber id="portItemNum5">5</PortfolioItemNumber>
              <PortfolioItemName>Cue</PortfolioItemName>
            </PortfolioItem>
          </PortfolioSection>
        </MobileMenu>
      )}
      <LeftBar id="leftBar">
        <HomeLink to="/">UDIT DESAI - TORONTO 2019</HomeLink>
        {width > 800 ? (
          <>
            <PortfolioSectionTitle>DIGITAL</PortfolioSectionTitle>
            <PortfolioSection>
              <PortfolioItem
                id="portItem1"
                onMouseEnter={() => {
                  hoverPortItem(1)
                }}
                onMouseLeave={() => {
                  hoverPortItemLeave(1)
                }}
                onClick={() => {
                  projectHandler(1)
                }}
              >
                <PortfolioItemNumber id="portItemNum1">1</PortfolioItemNumber>
                <PortfolioItemName>HXOUSE Website</PortfolioItemName>
              </PortfolioItem>
              <PortfolioItem
                id="portItem2"
                onMouseEnter={() => {
                  hoverPortItem(2)
                }}
                onMouseLeave={() => {
                  hoverPortItemLeave(2)
                }}
                onClick={() => {
                  projectHandler(2)
                }}
              >
                <PortfolioItemNumber id="portItemNum2">2</PortfolioItemNumber>
                <PortfolioItemName>
                  Alyx x HXOUSE Growing Family
                </PortfolioItemName>
              </PortfolioItem>
            </PortfolioSection>
            <PortfolioSectionTitle>PROJECTS</PortfolioSectionTitle>
            <PortfolioSection>
              <PortfolioItem
                id="portItem3"
                onMouseEnter={() => {
                  hoverPortItem(3)
                }}
                onMouseLeave={() => {
                  hoverPortItemLeave(3)
                }}
                onClick={() => {
                  projectHandler(3)
                }}
              >
                <PortfolioItemNumber id="portItemNum3">3</PortfolioItemNumber>
                <PortfolioItemName>Paper Piano</PortfolioItemName>
              </PortfolioItem>
              <PortfolioItem
                id="portItem4"
                onMouseEnter={() => {
                  hoverPortItem(4)
                }}
                onMouseLeave={() => {
                  hoverPortItemLeave(4)
                }}
                onClick={() => {
                  projectHandler(4)
                }}
              >
                <PortfolioItemNumber id="portItemNum4">4</PortfolioItemNumber>
                <PortfolioItemName>Housekeeper</PortfolioItemName>
              </PortfolioItem>
              <PortfolioItem
                id="portItem5"
                onMouseEnter={() => {
                  hoverPortItem(5)
                }}
                onMouseLeave={() => {
                  hoverPortItemLeave(5)
                }}
                onClick={() => {
                  projectHandler(5)
                }}
              >
                <PortfolioItemNumber id="portItemNum5">5</PortfolioItemNumber>
                <PortfolioItemName>Cue</PortfolioItemName>
              </PortfolioItem>
            </PortfolioSection>
          </>
        ) : (
          <></>
        )}
      </LeftBar>
      <RightBar id="rightBar">
        {width > 800 ? (
          <Tilt options={{ max: 45 }}>
            <CreditLogo src={Logo} />
          </Tilt>
        ) : (
          <>
            <MobilePortfolioContainer>
              <MobileProjectsLink onClick={openMobileMenu}>
                SEE PROJECT LIST
              </MobileProjectsLink>
            </MobilePortfolioContainer>
            <CreditLogo src={Logo} />
          </>
        )}
      </RightBar>
      <Project project={project} />
    </>
  )
}

export default portfolio
