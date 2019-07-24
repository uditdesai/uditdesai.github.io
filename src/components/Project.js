import React, { useEffect } from "react"
import ProjectStyles from "./Project.module.css"
import styled from "styled-components"
import { TweenMax, TimelineMax, Linear } from "gsap/TweenMax"

const SceneWrapper = styled.div`
  width: 80%;
`

const Scene = styled.div`
  width: 160px;
  height: 50px;
  position: relative;
  perspective: 300px;
  margin: 0;
  margin-left: 50px;
`

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transform: ${props => `translateZ(-${props.translation}px)`};
`

const CarouselCell = styled.div`
  position: absolute;
  width: 140px;
  height: 40px;
  left: 10px;
  top: 10px;
  transform: ${props =>
    `rotateY(${props.rotation}deg) translateZ(${props.translation}px)`};
  background-color: #bdbdbd;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CellText = styled.p`
  color: #333;
  font-family: Montserrat;
  font-weight: 700;
  margin: 0;
  font-size: 18px;
`

const Project = props => {
  const margin = props.margin
  const skills = props.skills
  const github = props.github
  const tags = skills.map((skill, num) => {
    return (
      <CarouselCell
        rotation={(360 / skills.length) * num}
        translation={Math.round(160 / 2 / Math.tan(Math.PI / skills.length))}
      >
        <CellText>{skill}</CellText>
      </CarouselCell>
    )
  })

  useEffect(() => {
    const tl = new TimelineMax({ repeat: -1 })
    tl.to("#carousel", 20, { rotationY: "360", ease: Linear.easeNone })
  }, [])

  return (
    <div className={ProjectStyles.container}>
      <a style={{ display: `block`, textDecoration: `none` }} href={github}>
        <h2 className={ProjectStyles.name}>{props.name}</h2>
        <SceneWrapper>
          <Scene>
            <Carousel
              id="carousel"
              translation={Math.round(
                160 / 2 / Math.tan(Math.PI / skills.length)
              )}
            >
              {tags}
            </Carousel>
          </Scene>
        </SceneWrapper>
        <p className={ProjectStyles.summary}>{props.summary}</p>
      </a>
    </div>
  )
}

export default Project
