import React from "react"
import styled from "styled-components"
import Tilt from "react-tilt"

const Container = styled.div`
  position: relative;
  width: 700px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.25s linear;
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`

const Image = styled.img`
  width: ${props => `${props.imgWidth}%`};
  z-index: -5;
`

const TextContainer = styled.div`
  position: absolute;
  left: 0;
  top: ${props => `${props.top}%`};
  z-index: 500;
  pointer-events: none;
`

const CompanyWrapper = styled.div`
  display: inline-block;
`

const Company = styled.h2`
  color: #333333;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 100px;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 64px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
  @media (max-width: 350px) {
    font-size: 40px;
  }
`

const Position = styled.h5`
  color: #4f4f4f;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 50px;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 28px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
  @media (max-width: 350px) {
    font-size: 30px;
  }
`

const Summary = styled.p`
  color: #333333;
  font-family: "PT Serif";
  font-weight: 400;
  font-size: 24px;
  margin: 0;
  margin-top: 15px;
  @media (max-width: 800px) {
    font-size: 22px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`

const Experience = props => {
  const imgWidth = props.width
  const top = props.top
  const textColor = props.color
  const comp = props.company

  return (
    <Container>
      <Tilt options={{ max: 45 }}>
        <Image imgWidth={imgWidth} src={props.image}></Image>
      </Tilt>
      <TextContainer top={top}>
        <CompanyWrapper>
          <Company>{props.company}</Company>
        </CompanyWrapper>
        <Position>{props.position}</Position>
        <Summary>{props.summary}</Summary>
      </TextContainer>
    </Container>
  )
}

export default Experience
