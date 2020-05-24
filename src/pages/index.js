import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import favicon16 from "../assets/favicon16.png"
import favicon32 from "../assets/favicon32.png"
import favicon64 from "../assets/favicon64.png"
import { Link } from "gatsby"

import Project from "../components/Project.js"
import Footer from "../components/footer.js"
import Navbar from "../components/Navbar.js"

const Title = styled.h1`
  font-family: "EBGaramond-Regular";
  color: black;
  width: 1000px;
  margin: 0 auto 100px auto;
  font-size: 120px;
  font-weight: 400;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }

  @media (max-width: 1050px) {
    width: 800px;
    font-size: 100px;
  }

  @media (max-width: 800px) {
    width: calc(100% - 40px);
    font-size: 100px;
  }

  @media (max-width: 600px) {
    font-size: 48px;
  }
`

const ProjectGridTitle = styled.h4`
  font-family: "EBGaramond-Regular";
  color: black;
  width: 1000px;
  margin: 0 auto 30px auto;
  font-size: 24px;
  font-weight: 400;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }

  @media (max-width: 1050px) {
    width: 800px;
  }

  @media (max-width: 800px) {
    width: calc(100% - 40px);
  }
`

const ProjectGrid = styled.div`
  width: calc(1000px);
  display: grid;
  grid-template-columns: calc(50% - 20px) calc(50% - 20px);
  grid-gap: 40px 40px;
  margin: 0 auto 0 auto;

  @media (max-width: 1050px) {
    width: 800px;
  }

  @media (max-width: 800px) {
    width: calc(100% - 40px);
    grid-template-columns: 100%;
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
          { property: "og:image", content: "https://i.imgur.com/9dELn7k.png" },
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
      <Navbar />
      <Title>I’m a developer and designer living in Toronto.</Title>
      <ProjectGridTitle>Selected Works</ProjectGridTitle>
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
          title="Alyx Growing Family Website — HXOUSE"
          desc="Development"
          img={data.alyx.childImageSharp.fluid}
          link="https://alyx.hxouse.com/"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 5}
          projectNo={5}
          bottomDesc="Event website for HXOUSE x Alyx Growing Family conference. Built using Gatsby within a team of two. Designed by Ben Swantek. Developed centre tilt animation using GSAP."
        />
        <Project
          title="Helpathon — hackathon project"
          desc="Design + development"
          img={data.helpathon.childImageSharp.fluid}
          link="https://github.com/uditdesai/Helpathon"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 6}
          projectNo={6}
          bottomDesc="Hackathon planning web app which allows hackathon organizers to create and manage application forms and applicants, budget, prizes, etc. As well, it allows students to search for hackathons and apply directly through the web app. Built and designed using Figma, React, and Firestore."
        />
        <Project
          title="Housekeeper — personal project"
          desc="Design + development"
          img={data.housekeeper.childImageSharp.fluid}
          link="https://github.com/uditdesai/housekeeper"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 7}
          projectNo={7}
          bottomDesc="Kanban board web application built for student households to manage housekeeping. Built using React, GraphQL and MongoDB."
        />
        <Project
          title="Wedding site — personal project"
          desc="Design + development"
          img={data.wedding.childImageSharp.fluid}
          link="https://github.com/uditdesai/wedding"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 8}
          projectNo={8}
          bottomDesc="Wedding website built to showcase wedding events, provide information to guests, and handle RSVPs. Built a custom Google Sheets based RSVP system to manage and track invitations and guestlist using Gatsby and GraphQL."
        />
        <Project
          title="Paper Piano — hackathon project"
          desc="Development"
          img={data.pp.childImageSharp.fluid}
          link="https://devpost.com/software/paper-piano-8yzaw9"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 9}
          projectNo={9}
          bottomDesc="Developed a computer vision program that detects shapes drawn on paper using a computer webcam and a user's finger tapping on the shapes to play a sound. The user can draw several shapes and assign different sounds to create any instrument. Built using OpenCV within a team of two within 36 hours."
        />
        <Project
          title="Cue — hackathon project"
          desc="Design + development"
          img={data.cue.childImageSharp.fluid}
          link="https://devpost.com/software/cue-doisjy"
          changeMoreInfoNo={changeMoreInfoNo}
          moreInfo={moreInfoNo === 10}
          projectNo={10}
          bottomDesc="Built a web tool for learning different languages or for overcoming learning disabilities which works by annotating user-read sentences onto the screen with helpful visual cues so the user can understand what they read. leveraged Google's Speech-to-text API and developed tool within a team of four in 36 hours."
        />
      </ProjectGrid>
      <Footer />
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
    wedding: file(relativePath: { eq: "images/wedding.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    helpathon: file(relativePath: { eq: "images/helpathon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
