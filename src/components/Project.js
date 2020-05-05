import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const LinkContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`

const BottomContainer = styled.div`
  width: 100%;
  height: ${props => (props.moreInfo === true ? "fit-content" : "0px")};
  border: ${props => (props.moreInfo === true ? "1px solid black" : "none")};
  border-top: none;
  box-sizing: border-box;
  padding: ${props => (props.moreInfo === true ? "20px" : "0px")};
  display: flex;
  flex-direction: column;
  background: white;
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
  cursor: pointer;
  background: white;
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

const ProjectDescWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ProjectAdd = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 28px;
  margin: 0;
  color: black;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`

const BottomDesc = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 16px;
  margin: 0 0 20px 0;
  color: black;
  display: ${props => (props.moreInfo === true ? "block" : "none")};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const BottomLink = styled.a`
  font-family: "WorkSans-Regular";
  font-size: 16px;
  margin: 0;
  color: black;
  text-decoration: underline;
  display: ${props => (props.moreInfo === true ? "block" : "none")};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const Project = ({
  title,
  desc,
  img,
  link,
  moreInfo,
  changeMoreInfoNo,
  projectNo,
  bottomDesc,
}) => {
  const clickHandler = () => {
    changeMoreInfoNo(projectNo)
  }
  return (
    <LinkContainer>
      <Container onClick={clickHandler}>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectImg fluid={img} />
        <ProjectDescWrapper>
          <ProjectDesc>{desc}</ProjectDesc>
          <ProjectAdd>{moreInfo === true ? "-" : "+"}</ProjectAdd>
        </ProjectDescWrapper>
      </Container>
      <BottomContainer moreInfo={moreInfo}>
        <BottomDesc moreInfo={moreInfo}>{bottomDesc}</BottomDesc>
        <BottomLink href={link} moreInfo={moreInfo}>
          View Project
        </BottomLink>
      </BottomContainer>
    </LinkContainer>
  )
}

export default Project
