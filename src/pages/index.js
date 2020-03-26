import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import favicon16 from "../assets/favicon16.png"
import favicon32 from "../assets/favicon32.png"
import favicon64 from "../assets/favicon64.png"

import Project from "../components/Project.js"

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

  @media (max-width: 600px) {
    margin: 30px 0 0 0;
    font-size: 16px;
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
    font-size: 16px;
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
    font-size: 16px;
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
      <Topbar>
        <TopBarLink onClick={changeName}>UDIT DESAI</TopBarLink>
        <TopBarLink1 info={info} onClick={changeInfo}>
          INFO
        </TopBarLink1>
        <TopBarLink2 info={info} onClick={changeContact}>
          CONTACT
        </TopBarLink2>
      </Topbar>
      <InfoContainer>
        {info === "info" ? (
          <InfoText>
            Full-stack developer and designer based in Toronto, Canada. He
            currently studies computer engineering at the University of Toronto
            and is available for freelance web-development and design. He has
            previously interned as a developer at HXOUSE.
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
          title="HXOUSE Website"
          desc="Design + development"
          img={data.hxouse.childImageSharp.fluid}
          link="https://www.hxouse.com/"
        />
        <Project
          title="Andras Website"
          desc="Design + development"
          img={data.andras.childImageSharp.fluid}
          link="https://www.andrasii.com/"
        />
        <Project
          title="HXOUSE E-commerce Store"
          desc="Design + development"
          img={data.hxouseStore.childImageSharp.fluid}
          link="https://shop.hxouse.com/"
        />
        <Project
          title="Alyx x HXOUSE Growing Family Website"
          desc="Development"
          img={data.alyx.childImageSharp.fluid}
          link="https://alyx.hxouse.com/"
        />
        <Project
          title="Housekeeper — personal project"
          desc="Design + development"
          img={data.housekeeper.childImageSharp.fluid}
          link="https://github.com/uditdesai/housekeeper"
        />
        <Project
          title="Paper Piano — personal project"
          desc="Development"
          img={data.pp.childImageSharp.fluid}
          link="https://devpost.com/software/paper-piano-8yzaw9"
        />
        <Project
          title="Cue — personal project"
          desc="Design + development"
          img={data.cue.childImageSharp.fluid}
          link="https://devpost.com/software/cue-doisjy"
        />
      </ProjectGrid>
    </>
  )
}

export default App

export const query = graphql`
  query {
    hxouse: file(relativePath: { eq: "hxouse.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    andras: file(relativePath: { eq: "andras.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hxouseStore: file(relativePath: { eq: "hxouseStore.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    alyx: file(relativePath: { eq: "alyx.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    housekeeper: file(relativePath: { eq: "housekeeper.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pp: file(relativePath: { eq: "pp.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cue: file(relativePath: { eq: "cue.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
