import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"

const Header = styled.header`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 50px 0 0 50px;
  background: linear-gradient(180deg, #eb5757 0%, rgba(255, 255, 255, 50) 70%);

  @media (max-width: 500px) {
    height: fit-content;
    padding: 30px 0 0 20px;
  }
`

const Name = styled.h1`
  color: black;
  font-family: "VioletSans-Regular", sans-serif;
  font-size: 42px;
  margin: 0;
  letter-spacing: 2px;

  @media (max-width: 500px) {
    font-size: 32px;
    letter-spacing: 1px;
  }
`

const Main = styled.main`
  width: 60%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding: 0 50px 0 50px;

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    padding: 0 20px 0 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`

const Content = styled.p`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 20px;
  line-height: 1.25;
  margin: 0 0 30px 0;
  width: 100%;

  @media (min-width: 1800px) {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  &:last-child {
    margin: 0;
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
    margin-bottom: 40px;
  }
`

const RegionTitle = styled.h2`
  color: black;
  font-family: "VioletSans-Regular", sans-serif;
  font-size: 18px;
  margin: 0 0 20px 0;
  letter-spacing: 1px;

  @media (min-width: 1800px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`

const ContactContainer = styled.div`
  display: flex;
`

const ContactWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 350px) {
    margin-right: 30px;
  }
`

const ContactLink = styled.a`
  color: #b71c1c;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 16px;
  margin: 0 0 10px 0;
  text-decoration: underline;

  &:last-of-type {
    margin: 0;
  }

  @media (min-width: 1800px) {
    font-size: 18px;
  }
`

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 40px;
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
  max-width: 600px;
  box-sizing: border-box;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    padding-left: 0;
    padding-top: 20px;
    justify-content: flex-start;
    width: 100%;
  }
`

const ProjectTitle = styled.h3`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 24px;
  margin: 0 0 10px 0;

  @media (min-width: 1800px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`

const ProjectLink = styled.a`
  color: #b71c1c;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 16px;
  text-decoration: underline;

  @media (min-width: 1800px) {
    font-size: 18px;
  }
`

const ProjectDate = styled.p`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 16px;
  margin: 0 0 20px 0;

  @media (min-width: 1800px) {
    font-size: 18px;
  }
`

const ProjectSummary = styled.p`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 18px;
  margin: 0 0 20px 0;
  line-height: 1.25;

  @media (min-width: 1800px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
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
          Developer and designer specializing in user experience and the web.
          I'm currently studying computer engineering at the University of
          Toronto and working on select technology projects for clients.
        </Content>
        <Content>
          In the past, I've worked at small to large non-profits and companies.
          Most recently I interned at Shopify, building the subscriptions
          experience and functionality for online stores.
        </Content>
        <Content>
          I'm interested in fashion, health and fitness, design, and reading.
        </Content>
      </Main>
      <Region>
        <RegionTitle>CONTACT</RegionTitle>
        <ContactContainer>
          <ContactWrapper>
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
              Twitter
            </ContactLink>
            <ContactLink
              href="https://www.instagram.com/uydesai/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </ContactLink>
          </ContactWrapper>
          <ContactWrapper>
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
          </ContactWrapper>
        </ContactContainer>
      </Region>
      <Region>
        <RegionTitle>SELECT WORK</RegionTitle>
        <ProjectContainer>
          <ProjectImg
            alt="Shopify subscriptions launch website"
            fluid={data.shopify.childImageSharp.fluid}
          />
          <ProjectTextContainer>
            <ProjectTitle>Shopify Subscriptions</ProjectTitle>
            <ProjectDate>October 2020</ProjectDate>
            <ProjectSummary>
              Worked with a super talented team to develop new Liquid selling
              plan APIs and the buyer-facing user experience principles for the
              highly-anticipated subscriptions feature as a part of my
              internship.
            </ProjectSummary>
            <ProjectLink
              href="https://www.shopify.ca/subscriptions"
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </ProjectLink>
          </ProjectTextContainer>
        </ProjectContainer>
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
            <ProjectLink
              href="https://hxouse.com/"
              target="_blank"
              rel="noreferrer"
            >
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
            <ProjectLink
              href="https://pierrebassene.world/"
              target="_blank"
              rel="noreferrer"
            >
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
            <ProjectLink
              href="https://www.andrasii.com/"
              target="_blank"
              rel="noreferrer"
            >
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
            <ProjectLink
              href="https://www.cannon.skule.ca/"
              target="_blank"
              rel="noreferrer"
            >
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
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pierreBassene: file(relativePath: { eq: "images/pierreBassene.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    andras: file(relativePath: { eq: "images/andras.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cannon: file(relativePath: { eq: "images/cannon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shopify: file(relativePath: { eq: "images/shopify.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
