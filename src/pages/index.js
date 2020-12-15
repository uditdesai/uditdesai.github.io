import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"

const Header = styled.header`
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding: 50px 0 0 50px;
  background: linear-gradient(180deg, #eb5757 0%, rgba(255, 255, 255, 50) 70%);

  @media (max-width: 500px) {
    height: 60px;
    padding: 30px 0 0 20px;
  }
`

const Name = styled.h1`
  color: black;
  font-family: "VioletSans-Regular", sans-serif;
  font-size: 64px;
  margin: 0;
  letter-spacing: 3px;

  @media (max-width: 500px) {
    font-size: 32px;
    letter-spacing: 1px;
  }
`

const Main = styled.main`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 15px;
  box-sizing: border-box;
  padding: 0 50px 0 50px;

  @media (min-width: 1800px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    padding: 0 20px 0 20px;
  }
`

const Content = styled.p`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 28px;
  margin: 0 0 35px 0;
  width: 100%;

  @media (min-width: 1800px) {
    font-size: 32px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`

const Region = styled.div`
  box-sizing: border-box;
  padding: 0 50px 0 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 0 20px 0 20px;
  }
`

const RegionTitle = styled.h3`
  color: black;
  font-family: "VioletSans-Regular", sans-serif;
  font-size: 20px;
  margin: 0 0 20px 0;
  letter-spacing: 1px;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`

const ContactLink = styled.a`
  color: #eb5757;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 18px;
  margin: 0 0 14px 0;
  text-decoration: underline;

  &:last-of-type {
    margin: 0;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 45px;
  }
`

const ProjectImg = styled(Img)`
  width: 60%;
  max-width: 1200px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

const ProjectTextContainer = styled.div`
  width: 40%;
  box-sizing: border-box;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    padding-left: 0;
    padding-top: 15px;
    justify-content: flex-start;
    width: 100%;
  }
`

const ProjectTitle = styled.h4`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 24px;
  margin: 0 0 15px 0;

  @media (max-width: 700px) {
    font-size: 18px;
    margin: 0 0 10px 0;
  }
`

const ProjectLink = styled.a`
  color: #eb5757;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 20px;
  text-decoration: underline;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`

const ProjectDate = styled.p`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 16px;
  margin: 0 0 30px 0;

  @media (max-width: 1000px) {
    margin: 0 0 20px 0;
  }

  @media (max-width: 700px) {
    font-size: 12px;
  }
`

const ProjectSummary = styled.p`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 18px;
  margin: 0 0 30px 0;
  line-height: 1.3;
  max-width: 700px;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`

const App = ({ data }) => {
  return (
    <>
      <SEO title="Udit Desai | @uydesai" />
      <Header>
        <Name>UDIT DESAI</Name>
      </Header>
      <Main>
        <Content>
          Developer specializing in user experience and the web. I’m currently
          improving the pre-purchase experience of online stores at Shopify as a
          UX developer and studying engineering at the University of Toronto.
        </Content>
        <Content>
          I also take on select development and design projects in the shape of
          digital experiences, ecommerce sites, and portfolios.
        </Content>
      </Main>
      <Region>
        <RegionTitle>CONTACT</RegionTitle>
        <ContactLink
          href="mailto:udit.desai3@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          udit.desai3@gmail.com
        </ContactLink>
        <ContactLink
          href="https://twitter.com/uydesai"
          target="_blank"
          rel="noreferrer"
        >
          Twitter: @uydesai
        </ContactLink>
        <ContactLink
          href="https://www.instagram.com/uydesai/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Instagram: @uydesai
        </ContactLink>
        <ContactLink
          href="https://www.linkedin.com/in/uditdesai/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </ContactLink>
        <ContactLink
          href="https://github.com/uditdesai"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </ContactLink>
        <ContactLink
          href="https://uditdesai.com/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </ContactLink>
      </Region>
      <Region>
        <RegionTitle>SELECT WORK</RegionTitle>
        <ProjectContainer>
          <ProjectImg
            alt="HXOUSE website landing"
            fluid={data.hxouse.childImageSharp.fluid}
          />
          <ProjectTextContainer>
            <ProjectTitle>HXOUSE Website</ProjectTitle>
            <ProjectDate>October 2019</ProjectDate>
            <ProjectSummary>
              Collaborated with The Weeknd and XO's internal design team to
              design and develop new website for HXOUSE filled with immersive
              digital experiences on each page.
            </ProjectSummary>
            <ProjectLink href="https://hxouse.com/" target="_blank">
              Visit site
            </ProjectLink>
          </ProjectTextContainer>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImg
            alt="Pierre Bassene World product page"
            fluid={data.pierreBassene.childImageSharp.fluid}
          />
          <ProjectTextContainer>
            <ProjectTitle>Pierre Bassene World Store</ProjectTitle>
            <ProjectDate>July 2020</ProjectDate>
            <ProjectSummary>
              Designed and developed Pierre Bassene World's new digital presence
              through an updated ecommerce store with a heavy emphasis on
              highlighting elements of the brand.
            </ProjectSummary>
            <ProjectLink href="https://pierrebassene.world/" target="_blank">
              Visit site
            </ProjectLink>
          </ProjectTextContainer>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImg
            alt="Andras website landing"
            fluid={data.andras.childImageSharp.fluid}
          />
          <ProjectTextContainer>
            <ProjectTitle>Andras Website</ProjectTitle>
            <ProjectDate>February 2020</ProjectDate>
            <ProjectSummary>
              Crafted a portfolio website showcasing all the studio's work
              through large imagery and a unique landing page to help launch
              Andras.
            </ProjectSummary>
            <ProjectLink href="https://www.andrasii.com/" target="_blank">
              Visit site
            </ProjectLink>
          </ProjectTextContainer>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImg
            alt="Cannon website landing"
            fluid={data.cannon.childImageSharp.fluid}
          />
          <ProjectTextContainer>
            <ProjectTitle>The Cannon Website</ProjectTitle>
            <ProjectDate>July 2020</ProjectDate>
            <ProjectSummary>
              Designed and engineered new website for UofT Engineering's
              official newspaper with a focus on discovering new articles, a
              better reading experience, and with a design that showcases The
              Cannon's rich history.
            </ProjectSummary>
            <ProjectLink href="https://www.cannon.skule.ca/" target="_blank">
              Visit site
            </ProjectLink>
          </ProjectTextContainer>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImg
            alt="Alyx Growing Family"
            fluid={data.alyx.childImageSharp.fluid}
          />
          <ProjectTextContainer>
            <ProjectTitle>Alyx Growing Family Website</ProjectTitle>
            <ProjectDate>November 2019</ProjectDate>
            <ProjectSummary>
              Developed a beautiful landing page for the Alyx and HXOUSE Growing
              Family event in Toronto with links to all the events and a cute
              cursor animation using Alyx's signatue buckle.
            </ProjectSummary>
            <ProjectLink href="https://alyx.hxouse.com/" target="_blank">
              Visit site
            </ProjectLink>
          </ProjectTextContainer>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImg
            alt="HXOUSE store landing"
            fluid={data.hxouseStore.childImageSharp.fluid}
          />
          <ProjectTextContainer>
            <ProjectTitle>HXOUSE Store</ProjectTitle>
            <ProjectDate>December 2020</ProjectDate>
            <ProjectSummary>
              Worked with the XO + HXOUSE design team to create an ecommerce
              store for HXOUSE merchandise.
            </ProjectSummary>
            <ProjectLink href="https://shop.hxouse.com/" target="_blank">
              Visit site
            </ProjectLink>
          </ProjectTextContainer>
        </ProjectContainer>
      </Region>
    </>
  )
}

export default App

export const query = graphql`
  query {
    hxouse: file(relativePath: { eq: "images/hxouse.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pierreBassene: file(relativePath: { eq: "images/pierreBassene.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    andras: file(relativePath: { eq: "images/andras.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hxouseStore: file(relativePath: { eq: "images/hxouseStore.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    alyx: file(relativePath: { eq: "images/alyx.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cannon: file(relativePath: { eq: "images/cannon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
