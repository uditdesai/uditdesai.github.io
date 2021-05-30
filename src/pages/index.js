import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"

const Header = styled.header`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 50px 0 0 30px;
  background: linear-gradient(180deg, #eb5757 0%, rgba(250, 250, 250, 50) 70%);

  @media (max-width: 500px) {
    height: fit-content;
    padding: 20px 0 0 15px;
  }
`

const Name = styled.h1`
  color: black;
  font-family: "VioletSans-Regular", sans-serif;
  font-size: 42px;
  margin: 0;
  letter-spacing: 2px;

  @media (max-width: 500px) {
    font-size: 28px;
    letter-spacing: 1px;
  }
`

const Main = styled.main`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding: 0 30px 0 30px;

  @media (min-width: 1800px) {
    max-width: 950px;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }

  @media (max-width: 500px) {
    padding: 0 15px 0 15px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`

const JobLink = styled.a`
  color: ${props => props.color};
  text-decoration: underline;
  cursor: pointer;
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
  padding: 0 30px 0 30px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 0 15px 0 15px;
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

const InlineContactLink = styled(Link)`
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
  height: fit-content;
  margin-bottom: 60px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const ProjectImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 1200px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

const ProjectImg = styled(Img)`
  width: 100%;
  margin-bottom: 20px;

  &:last-of-type {
    margin: 0;
  }
`

const ProjectTextContainer = styled.div`
  width: 40%;
  max-width: 600px;
  height: fit-content;
  box-sizing: border-box;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: sticky;
  top: 30px;

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
  margin-bottom: 10px;

  &:last-of-type {
    margin: 0;
  }

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
  margin: 0 0 10px 0;
  line-height: 1.25;

  &:last-of-type {
    margin: 0 0 20px 0;
  }

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
          Design-oriented developer specializing in user experience and web
          development. I'm currently studying computer engineering at the
          University of Toronto and completing an internship at{" "}
          <JobLink
            href="https://www.sanctuary.computer/"
            target="_blank"
            color="#0a3458"
          >
            Sanctuary Computer
          </JobLink>
          , a development studio in NYC. On the side, I also work on select
          freelance technology projects with friends :)
        </Content>
        <Content>
          In the past, I've worked at small to large non-profits and companies.
          Last year, I interned at{" "}
          <JobLink
            href="https://www.shopify.ca/"
            target="_blank"
            color="#5f8e3e"
          >
            Shopify
          </JobLink>{" "}
          and help built the subscriptions experience and functionality for
          online stores.
        </Content>
        <Content>
          I'm interested in fashion, health and fitness, design, reading, and
          recently making smoothies.
        </Content>
      </Main>
      <Region>
        <RegionTitle>LINKS</RegionTitle>
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
            <InlineContactLink to="/books">Good books</InlineContactLink>
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
          <ProjectImgContainer>
            <ProjectImg
              alt="Shopify subscriptions launch website"
              fluid={data.shopify.childImageSharp.fluid}
            />
            <ProjectImg
              alt="Shopify subscriptions UX guidelines"
              fluid={data.shopifyUX.childImageSharp.fluid}
            />
          </ProjectImgContainer>
          <ProjectTextContainer>
            <ProjectTitle>Shopify Subscriptions</ProjectTitle>
            <ProjectDate>May to December 2020</ProjectDate>
            <ProjectSummary>
              Developed new Liquid selling plan APIs and the buyer-facing user
              experience principles for the highly-anticipated subscriptions
              feature as a part of my internship.
            </ProjectSummary>
            <ProjectLink
              href="https://www.shopify.ca/subscriptions"
              target="_blank"
              rel="noreferrer"
            >
              Visit subscriptions marketing site
            </ProjectLink>
            <ProjectLink
              href="https://shopify.dev/tutorials/storefront-ux-guidelines-for-subscriptions"
              target="_blank"
              rel="noreferrer"
            >
              Visit subscriptions storefront UX guidelines
            </ProjectLink>
            <ProjectLink
              href="https://shopify.dev/docs/themes/liquid/reference/objects/selling-plan"
              target="_blank"
              rel="noreferrer"
            >
              Visit selling plan liquid API docs
            </ProjectLink>
          </ProjectTextContainer>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImgContainer>
            <ProjectImg
              alt="HXOUSE website landing"
              fluid={data.hxouse.childImageSharp.fluid}
            />
            <ProjectImg
              alt="HXOUSE and Alyx Conference site"
              fluid={data.alyx.childImageSharp.fluid}
            />
          </ProjectImgContainer>
          <ProjectTextContainer>
            <ProjectTitle>HXOUSE</ProjectTitle>
            <ProjectDate>May to December 2019</ProjectDate>
            <ProjectSummary>
              Collaborated with The Weeknd and XO's internal design team to
              design and develop new website for HXOUSE filled with immersive
              digital experiences on each page.
            </ProjectSummary>
            <ProjectSummary>
              Also worked on microsites for different events and an online store
              for HXOUSE merch. Note the HXOUSE store is no longer live.
            </ProjectSummary>
            <ProjectLink
              href="https://hxouse.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit HXOUSE site
            </ProjectLink>
            <ProjectLink
              href="https://alyx.hxouse.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit HXOUSE x Alyx site
            </ProjectLink>
          </ProjectTextContainer>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImgContainer>
            <ProjectImg
              alt="Seekings webstore collection page"
              fluid={data.seekings.childImageSharp.fluid}
            />
            <ProjectImg
              alt="Seekings webstore product page"
              fluid={data.seekingsProduct.childImageSharp.fluid}
            />
          </ProjectImgContainer>
          <ProjectTextContainer>
            <ProjectTitle>Seekings</ProjectTitle>
            <ProjectDate>April 2021</ProjectDate>
            <ProjectSummary>
              Designed and developed webstore for Yeezy Alum Mark Seekings' new
              self-titled brand Seekings. The Website was built to have a super
              clean visual identity and user experience.
            </ProjectSummary>
            <ProjectLink
              href="https://seekings.co/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Seekings
            </ProjectLink>
          </ProjectTextContainer>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImgContainer>
            <ProjectImg
              alt="Andras website landing"
              fluid={data.andras.childImageSharp.fluid}
            />
            <ProjectImg
              alt="Andras website project page"
              fluid={data.andrasProject.childImageSharp.fluid}
            />
          </ProjectImgContainer>
          <ProjectTextContainer>
            <ProjectTitle>Andras</ProjectTitle>
            <ProjectDate>March 2021</ProjectDate>
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
              Visit Andras
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
    hxouseStore: file(relativePath: { eq: "images/hxouse-store.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    alyx: file(relativePath: { eq: "images/alyx.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    andras: file(relativePath: { eq: "images/andras.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    andrasProject: file(relativePath: { eq: "images/andras-project.jpg" }) {
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
    shopifyUX: file(relativePath: { eq: "images/shopify-ux.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    seekings: file(relativePath: { eq: "images/seekings.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    seekingsProduct: file(relativePath: { eq: "images/seekings-product.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
