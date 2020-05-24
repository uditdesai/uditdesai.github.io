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
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid black;
  position: relative;
  cursor: pointer;
  background: white;
`

const ProjectTitle = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0;
  color: black;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const ProjectImg = styled(Img)`
  width: 100%;
  margin: 20px 0 20px 0;
`

const ProjectDescWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const ProjectDesc = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0;
  color: black;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const ProjectAdd = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0;
  color: black;
`

const BottomDesc = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 14px;
  margin: 0 0 20px 0;
  color: black;
  display: ${props => (props.moreInfo === true ? "block" : "none")};

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const BottomLink = styled.a`
  font-family: "WorkSans-Regular";
  font-size: 14px;
  margin: 0;
  color: black;
  text-decoration: underline;
  display: ${props => (props.moreInfo === true ? "block" : "none")};

  &::selection {
    background: #222222;
    color: #f2f2f2;
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
