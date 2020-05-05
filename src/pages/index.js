import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import favicon16 from "../assets/favicon16.png"
import favicon32 from "../assets/favicon32.png"
import favicon64 from "../assets/favicon64.png"
import { Link } from "gatsby"

import Project from "../components/Project.js"

const BackgroundTextContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  margin: 0;
  display: flex;
  align-items: center;
`

const BackgroundText = styled.p`
  width: 100%;
  font-family: "WorkSans-Black";
  font-size: 350px;
  color: #f2f2f2;
  pointer-events: none;
  margin: 0;
  word-wrap: break-word;

  @media (max-width: 1000px) {
    font-size: 250px;
  }

  @media (max-width: 600px) {
    font-size: 150px;
  }
`

const Topbar = styled.div`
  width: calc(100% - 80px);
  display: flex;
  margin: 0 auto 0 auto;

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    justify-content: space-between;
  }
`

const TopBarLink = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 40px 50px 0 0;
  color: black;
  cursor: pointer;
  text-decoration: underline;

  @media (max-width: 600px) {
    margin: 30px 0 0 0;
    font-size: 14px;
  }
`

const TopBarLink1 = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 40px 50px 0 0;
  color: black;
  cursor: pointer;
  text-decoration: ${props => (props.info === "info" ? "underline" : "none")};
  @media (max-width: 600px) {
    margin: 30px 0 0 0;
    font-size: 14px;
  }
`

const TopBarLink2 = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 40px 50px 0 0;
  color: black;
  cursor: pointer;
  text-decoration: ${props =>
    props.info === "contact" ? "underline" : "none"};

  @media (max-width: 600px) {
    margin: 30px 0 0 0;
    font-size: 14px;
  }
`

const BlogLink = styled(Link)`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 40px 50px 0 0;
  color: black;
  cursor: pointer;
  text-decoration: ${props => (props.info === "blog" ? "underline" : "none")};

  @media (max-width: 600px) {
    margin: 30px 0 0 0;
    font-size: 14px;
  }
`

const DescriptionLink = styled.a`
  text-decoration: none;
  font-family: "WorkSans-Regular";
  font-size: 18px;
  color: black;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const InfoContainer = styled.div`
  width: calc(100% - 80px);
  margin: 50px auto 0 auto;
  height: 130px;
  display: flex;

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    height: 150px;
    margin: 30px auto 0 auto;
  }
`

const InfoText = styled.p`
  width: 70%;
  font-family: "WorkSans-Regular";
  font-size: 18px;
  color: black;
  margin: 0;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 14px;
  }
`

const ContactWrapper = styled.div`
  display: flex;
  margin: 10px 0 0 0;

  @media (max-width: 600px) {
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 30px;
    grid-gap: 10px 0;
    margin: 20px 0 0 0;
  }
`

const ContactLink = styled.a`
  text-decoration: none;
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0 50px 0 0;
  color: black;

  @media (max-width: 600px) {
    margin: 0;
    font-size: 14px;
  }
`

const ProjectGrid = styled.div`
  width: calc(100% - 80px);
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 40px 40px;
  margin: 0 auto 50px auto;

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    grid-template-columns: 100%;
    grid-gap: 30px 0;
  }
`

const App = ({ data }) => {
  const [info, setInfo] = useState("")
  const [moreInfoNo, setMoreInfoNo] = useState(0)
  const changeInfo = () => {
    if (info !== "info") {
      setInfo("info")
    } else {
      setInfo("")
    }
  }
  const changeContact = () => {
    if (info !== "contact") {
      setInfo("contact")
    } else {
      setInfo("")
    }
  }
  const changeName = () => {
    setInfo("")
  }
  const changeMoreInfoNo = num => {
    console.log("hello")
    if (moreInfoNo === num) {
      setMoreInfoNo(0)
    } else {
      setMoreInfoNo(num)
    }
  }
  return (
    <>
      <Helmet
        meta={[
          { name: "description", content: "Udit Desai" },
          { name: "keywords", content: "developer, designer" },
        ]}
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `${favicon16}`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: `${favicon32}`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "64x64",
            href: `${favicon64}`,
          },
        ]}
      >
        <title>UDIT DESAI</title>
      </Helmet>
      <BackgroundTextContainer>
        <BackgroundText>PORTFOLIO</BackgroundText>
      </BackgroundTextContainer>
      <Topbar
        onClick={() => {
          setMoreInfoNo(0)
        }}
      >
        <TopBarLink info={info} onClick={changeName}>
          UDIT DESAI
        </TopBarLink>
        <TopBarLink1 info={info} onClick={changeInfo}>
          INFO
        </TopBarLink1>
        <TopBarLink2 info={info} onClick={changeContact}>
          CONTACT
        </TopBarLink2>
        <BlogLink to="/blog" info={info}>
          BLOG
        </BlogLink>
      </Topbar>
      <InfoContainer
        onClick={() => {
          setMoreInfoNo(0)
        }}
      >
        {info === "info" ? (
          <InfoText>
            Full-stack developer and designer based in Toronto, Canada. He
            currently studies computer engineering at the University of Toronto
            and is available for freelance web-development and design. This
            summer, he's working as a UX Developer at{" "}
            <DescriptionLink target="_blank" href="https://www.shopify.ca/">
              Shopify
            </DescriptionLink>
            . He has previously interned as a developer at{" "}
            <DescriptionLink target="_blank" href="https://www.hxouse.com/">
              HXOUSE
            </DescriptionLink>
            .
          </InfoText>
        ) : info === "contact" ? (
          <ContactWrapper>
            <ContactLink
              target="_blank"
              href="mailto:udit.desai3@gmail.com?subject=Hey Udit!"
            >
              Email
            </ContactLink>
            <ContactLink target="_blank" href="https://twitter.com/uydesai">
              Twitter
            </ContactLink>
            <ContactLink
              target="_blank"
              href="https://www.instagram.com/uydesai/?hl=en"
            >
              Instagram
            </ContactLink>
            <ContactLink
              target="_blank"
              href="https://www.linkedin.com/in/uditdesai/"
            >
              Linkedin
            </ContactLink>
            <ContactLink
              target="_blank"
              href="https://drive.google.com/file/d/1Y5MVbWvVe_IN2nTnxOTOcv0aGGiN8q3T/view?usp=sharing"
            >
              Resume
            </ContactLink>
          </ContactWrapper>
        ) : (
          <></>
        )}
      </InfoContainer>
      <ProjectGrid>
        <Project
          title="HXOUSE Website — HXOUSE"
          desc="Design + development"
          img={data.hxouse.childImageSharp.fluid}
          link="https://www.hxouse.com/"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 1}
          projectNo={1}
          bottomDesc="Immersive web experience for HXOUSE to represent the organization and gather interest for programs and events. Website designed in collaboration with XO records designers Ben Swantek and Drop. Developed using Gatsby, GSAP and three.js within a team of four."
        />
        <Project
          title="Andras Website — freelance"
          desc="Design + development"
          img={data.andras.childImageSharp.fluid}
          link="https://www.andrasii.com/"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 2}
          projectNo={2}
          bottomDesc="Portfolio website for Andras, a film and design studio in Toronto. Designed and built landing animations, page transitions, and layout using Figma, Gatsby, GSAP, and three.js within a team of three."
        />
        <Project
          title="HXOUSE E-commerce Store — HXOUSE"
          desc="Design + development"
          img={data.hxouseStore.childImageSharp.fluid}
          link="https://shop.hxouse.com/"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 3}
          projectNo={3}
          bottomDesc="E-commerce store for HXOUSE. Designed and developed custom Shopify theme and store from scratch using Figma, and Liquid."
        />
        <Project
          title="Jiazhangfilms.com — freelance"
          desc="Design + development"
          img={data.jiaZhang.childImageSharp.fluid}
          link="https://jiazhangfilms.com/"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 4}
          projectNo={4}
          bottomDesc="Portfolio website for photographer Jia Zhang. Designed and built portfolio using Figma, Gatsby, and GraphQL for querying images."
        />
        <Project
          title="Alyx x HXOUSE Growing Family Website — HXOUSE"
          desc="Development"
          img={data.alyx.childImageSharp.fluid}
          link="https://alyx.hxouse.com/"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 5}
          projectNo={5}
          bottomDesc="Event website for HXOUSE x Alyx Growing Family conference. Built using Gatsby within a team of two. Designed by Ben Swantek. Developed centre tilt animation using GSAP."
        />
        <Project
          title="Housekeeper — personal project"
          desc="Design + development"
          img={data.housekeeper.childImageSharp.fluid}
          link="https://github.com/uditdesai/housekeeper"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 6}
          projectNo={6}
          bottomDesc="Kanban board web application built for student households to manage housekeeping. Built using React, GraphQL and MongoDB."
        />
        <Project
          title="Paper Piano — hackathon project"
          desc="Development"
          img={data.pp.childImageSharp.fluid}
          link="https://devpost.com/software/paper-piano-8yzaw9"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 7}
          projectNo={7}
          bottomDesc="Developed a computer vision program that detects shapes drawn on paper using a computer webcam and a user's finger tapping on the shapes to play a sound. The user can draw several shapes and assign different sounds to create any instrument. Built using OpenCV within a team of two within 36 hours."
        />
        <Project
          title="Cue — hackathon project"
          desc="Design + development"
          img={data.cue.childImageSharp.fluid}
          link="https://devpost.com/software/cue-doisjy"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 8}
          projectNo={8}
          bottomDesc="Built a web tool for learning different languages or for overcoming learning disabilities which works by annotating user-read sentences onto the screen with helpful visual cues so the user can understand what they read. leveraged Google's Speech-to-text API and developed tool within a team of four in 36 hours."
        />
      </ProjectGrid>
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
    housekeeper: file(relativePath: { eq: "images/housekeeper.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pp: file(relativePath: { eq: "images/pp.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cue: file(relativePath: { eq: "images/cue.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jiaZhang: file(relativePath: { eq: "images/jiaZhang.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
