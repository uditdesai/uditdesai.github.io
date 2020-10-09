import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Favicon16 from "../assets/favicon16.png"
import Favicon32 from "../assets/favicon32.png"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Font1URL from "../fonts/WorkSans-Regular.ttf"
import Font2URL from "../fonts/VioletSans-Regular.ttf"

const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 50px 0 0 50px;
  background: linear-gradient(180deg, #eb5757 0%, rgba(235, 87, 87, 0) 70%);

  @media (max-width: 500px) {
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
  flex-direction: column;
  width: 100%;
  margin-bottom: 70px;
`

const ProjectImg = styled(Img)`
  width: 80%;
  max-width: 1500px;
  margin-bottom: 15px;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const ProjectTextContainer = styled.div`
  width: 80%;
  max-width: 1500px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const ProjectTitle = styled.h4`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 20px;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`

const ProjectLink = styled.a`
  color: #eb5757;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 20px;
  text-decoration: underline;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`

const App = ({ data }) => {
  return (
    <>
      <Helmet
        meta={[
          { name: "description", content: "Udit Desai" },
          { name: "keywords", content: "developer, designer" },
          { property: "og:type", content: "website" },
          { property: "og:url", content: "https://uditdesai.com/" },
          {
            property: "og:description",
            content: "Developer specializing in user experience and the web.",
          },
          { property: "og:title", content: "Udit Desai" },
          { property: "og:image", content: "https://i.imgur.com/DrRHTQa.png" },
        ]}
      >
        <title>Udit Desai</title>
        <link rel="preload" href={Font1URL} as="font" crossorigin="anonymous" />
        <link rel="preload" href={Font2URL} as="font" crossorigin="anonymous" />
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
      </Helmet>
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
          I also take on select projects in the shape of digital experiences,
          ecommerce, and portfolios.
        </Content>
      </Main>
      <Region>
        <RegionTitle>CONTACT</RegionTitle>
        <ContactLink href="mailto:udit.desai3@gmail.com" target="_blank">
          udit.desai3@gmail.com
        </ContactLink>
        <ContactLink href="https://twitter.com/uydesai" target="_blank">
          Twitter: @uydesai
        </ContactLink>
        <ContactLink
          href="https://www.instagram.com/uydesai/?hl=en"
          target="_blank"
        >
          Instagram: @uydesai
        </ContactLink>
        <ContactLink
          href="https://drive.google.com/file/d/1V8dmCaJWy-CBL0yOEC58a0MCYmozSqRx/view?usp=sharing"
          target="_blank"
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
            <ProjectLink href="https://www.hxouse.com/" target="_blank">
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
