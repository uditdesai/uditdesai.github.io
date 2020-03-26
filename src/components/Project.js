import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const LinkContainer = styled.a`
  text-decoration: none;
`

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid black;
  position: relative;
  @media (max-width: 800px) and (min-width: 600px) {
    height: 300px;
  }
  @media (max-width: 475px) {
    height: 300px;
  }
`

const ProjectTitle = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0;
  color: black;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const ProjectImg = styled(Img)`
  width: 80%;

  @media (min-width: 1500px) {
    width: 70%;
  }
  @media (min-width: 1800px) {
    width: 60%;
  }
  @media (min-width: 2100px) {
    width: 480px;
  }
  @media (max-width: 475px) {
    width: 90%;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`

const ProjectDesc = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0;
  color: black;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const Project = ({ title, desc, img, link }) => {
  return (
    <LinkContainer target="_blank" href={link}>
      <Container>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectImg fluid={img} />
        <ProjectDesc>{desc}</ProjectDesc>
      </Container>
    </LinkContainer>
  )
}

export default Project
