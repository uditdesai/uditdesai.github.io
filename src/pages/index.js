import React, { useEffect } from "react"
import { TweenMax, TimelineMax } from "gsap/TweenMax"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import RSDivider from "../components/RSDivider"
import LSDivider from "../components/LSDivider"
import Experience from "../components/Experience"
import Project from "../components/Project"
import Skill from "../components/Skill"
import Cursor from "../components/Cursor"
import useWindowWidth from "../hooks/useWindowWidth"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"

const Container = styled.div`
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  border: 0;
`

const NavbarSection = styled.div``

const HeaderSection = styled.div`
  width: 85%;
  margin: 0;
  margin: auto;
  margin-top: 125px;
  @media (max-width: 800px) {
    margin-top: 100px;
  }
`

const HeaderText = styled.h1`
  color: #333333;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 165px;
  letter-spacing: 15px;
  margin: 0;
  width: 100%;
  @media (max-width: 1200px) {
    font-size: 130px;
    letter-spacing: 0;
  }
  @media (max-width: 800px) {
    font-size: 100px;
    letter-spacing: 0;
  }
  @media (max-width: 500px) {
    font-size: 45px;
    letter-spacing: 0;
  }
  @media (max-width: 350px) {
    font-size: 40px;
    letter-spacing: 0;
  }
`

const AboutSection = styled.div`
  width: 85%;
  margin: 0;
  margin: auto;
  margin-top: 100px;
  @media (max-width: 800px) {
    margin-top: 75px;
  }
`

const AboutText = styled.p`
  color: #333333;
  font-family: "PT Serif";
  font-weight: 400;
  font-size: 26px;
  width: 700px;
  line-height: 1.5;
  @media (max-width: 1200px) {
    width: 80%;
    font-size: 28px;
  }
  @media (max-width: 800px) {
    width: 80%;
    font-size: 25px;
  }
  @media (max-width: 500px) {
    width: 100%;
    font-size: 20px;
  }
`

const AboutLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: #333333;
  transition: all 0.25s ease;
  border-color: transparent;
  &:hover {
    border-bottom: 3px solid #333333;
  }
`

const ExperienceHxouse = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  margin-top: 175px;
  @media (max-width: 500px) {
    margin-top: 75px;
  }
  @media (max-width: 350px) {
    margin-top: 100px;
  }
`

const ExperienceTangerine = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 275px;
  @media (max-width: 500px) {
    margin-top: 175px;
  }
  @media (max-width: 350px) {
    margin-top: 225px;
  }
`

const ExperienceCipher = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  margin-top: 225px;
  @media (max-width: 500px) {
    margin-top: 250px;
    margin-bottom: 200px;
  }
  @media (max-width: 350px) {
    margin-top: 300px;
    margin-bottom: 250px;
  }
`

const ProjectRight = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  margin-top: 100px;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`

const ProjectLeft = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`

const SkillsSection = styled.div`
  margin: 0;
  margin: auto;
  margin-top: 100px;
  width: 85%;
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  grid-gap: 50px 50px;
  @media (max-width: 1200px) {
    grid-template-columns: 250px 250px;
    grid-gap: 75px 200px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 250px 250px;
    grid-gap: 50px 100px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 250px;
    grid-gap: 50px 50px;
  }
`

const SkillContainer = styled.div``

const ContactSection = styled.div`
  width: 85%;
  margin: 0;
  margin: auto;
  margin-top: 150px;
  @media (max-width: 800px) {
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    margin-top: 75px;
  }
`

const ContactEmailSection = styled.div``

const ContactEmailText = styled.h3`
  color: #333333;
  font-family: "Montserrat";
  font-size: 50px;
  font-weight: 700;
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 50px;
  }
  @media (max-width: 800px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`

const ContactEmailLink = styled.a`
  text-decoration: none;
  color: #333333;
  font-family: "Montserrat";
  font-size: 50px;
  font-weight: 700;
  margin: 0;
  transition: all 0.25s ease;
  border-color: transparent;
  padding-bottom: 1px;
  @media (max-width: 1200px) {
    font-size: 50px;
  }
  @media (max-width: 800px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
  &:hover {
    border-bottom: 4px solid #333333;
  }
`

const ContactSocialSection = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px) {
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    justify-content: flex-start;
    margin-top: 50px;
  }
`

const ContactSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ContactSocialText = styled.h3`
  color: #333333;
  font-family: "Montserrat";
  font-size: 50px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 30px;
  @media (max-width: 1200px) {
    font-size: 50px;
  }
  @media (max-width: 800px) {
    font-size: 40px;
    margin-bottom: 15px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`

const ContactSocialLinkContainer = styled.div`
  margin-top: 10px;
  @media (max-width: 500px) {
    margin-top: 0px;
  }
`

const ContactSocialLink = styled.a`
  text-decoration: none;
  color: #333333;
  font-family: "Montserrat";
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  transition: all 0.25s ease;
  border-color: transparent;
  padding-bottom: 1px;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 800px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
  &:hover {
    border-bottom: 4px solid #333333;
  }
`

const ContactInternshipSection = styled.div`
  margin-top: 150px;
  margin-bottom: 200px;
  width: 90%;
  @media (max-width: 800px) {
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    margin-top: 50px;
    margin-bottom: 100px;
  }
`

const ContactInternshipText = styled.h4`
  color: #333333;
  font-family: "Montserrat";
  font-size: 65px;
  font-weight: 700;
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 800px) {
    font-size: 45px;
  }
  @media (max-width: 500px) {
    font-size: 32px;
  }
`

const BottomSection = styled.div`
  margin-top: 100px;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`

const App = () => {
  let scrollTotal = 0
  let scrollPosY = 0

  const width = useWindowWidth()
  useEffect(() => {
    const tl = new TimelineMax({ paused: true })

    TweenMax.set("#fullstack", { x: -200 })
    TweenMax.set("#developer", { x: 200 })
    TweenMax.set("#about1", { x: -775 })
    TweenMax.set("#about2", { x: -775 })
    TweenMax.set("#about3", { x: -775 })
    TweenMax.set("#about4", { x: -775 })
    TweenMax.set("#hxouse", { x: -800 })
    TweenMax.set("#tangerine", { x: 800 })
    TweenMax.set("#cipher", { x: -800 })
    TweenMax.set("#project1", { x: -700, autoAlpha: 0 })
    TweenMax.set("#project2", { x: 700, autoAlpha: 0 })
    TweenMax.set("#project3", { x: -700, autoAlpha: 0 })
    TweenMax.set("#project4", { x: 700, autoAlpha: 0 })
    TweenMax.set("#skill1", { y: 350, autoAlpha: 0 })
    TweenMax.set("#skill2", { y: 350, autoAlpha: 0 })
    TweenMax.set("#skill3", { y: 350, autoAlpha: 0 })
    TweenMax.set("#skill4", { y: 350, autoAlpha: 0 })
    TweenMax.set("#twitterLink", { y: 100, autoAlpha: 0 })
    TweenMax.set("#igLink", { y: 100, autoAlpha: 0 })
    TweenMax.set("#linkedinLink", { y: 100, autoAlpha: 0 })
    TweenMax.set("#githubLink", { y: 100, autoAlpha: 0 })
    TweenMax.set("#mediumLink", { y: 100, autoAlpha: 0 })

    if (width > 800) {
      tl.to("#fullstack", 7, { x: 800 }, "0")
      tl.to("#developer", 7, { x: -800 }, "0")
      tl.to("#about1", 1, { x: 0 }, "0")
      tl.to("#about2", 2.25, { x: 0 }, "0")
      tl.to("#about3", 3.5, { x: 0 }, "0")
      tl.to("#about4", 4.75, { x: 0 }, "0")
      tl.to("#hxouse", 8, { x: 500 }, "3")
      tl.to("#tangerine", 8, { x: -500 }, "5")
      tl.to("#cipher", 8, { x: 500 }, "7")
      tl.to("#project1", 6, { x: 0, autoAlpha: 1 }, "11")
      tl.to("#project2", 6, { x: 0, autoAlpha: 1 }, "13")
      tl.to("#project3", 6, { x: 0, autoAlpha: 1 }, "15")
      tl.to("#project4", 6, { x: 0, autoAlpha: 1 }, "17")
      tl.to("#skill1", 3, { y: 0, autoAlpha: 1 }, "20")
      tl.to("#skill2", 3, { y: 0, autoAlpha: 1 }, "21")
      tl.to("#skill3", 3, { y: 0, autoAlpha: 1 }, "22")
      tl.to("#skill4", 3, { y: 0, autoAlpha: 1 }, "23")
      tl.to("#twitterLink", 2, { y: 0, autoAlpha: 1 }, "26")
      tl.to("#igLink", 2, { y: 0, autoAlpha: 1 }, "27")
      tl.to("#linkedinLink", 2, { y: 0, autoAlpha: 1 }, "28")
      tl.to("#githubLink", 2, { y: 0, autoAlpha: 1 }, "29")
      tl.to("#mediumLink", 2, { y: 0, autoAlpha: 1 }, "30")
    } else {
      tl.to("#fullstack", 8, { x: 800 }, "0")
      tl.to("#developer", 8, { x: -800 }, "0")
      tl.to("#about1", 1, { x: 0 }, "0")
      tl.to("#about2", 2.25, { x: 0 }, "0")
      tl.to("#about3", 3.5, { x: 0 }, "0")
      tl.to("#about4", 4.75, { x: 0 }, "0")
      tl.to("#hxouse", 4, { x: 0 }, "3")
      tl.to("#tangerine", 4, { x: 0 }, "5")
      tl.to("#cipher", 4, { x: 0 }, "7")
      tl.to("#project1", 4, { x: 0, autoAlpha: 1 }, "10")
      tl.to("#project2", 4, { x: 0, autoAlpha: 1 }, "12")
      tl.to("#project3", 4, { x: 0, autoAlpha: 1 }, "14")
      tl.to("#project4", 4, { x: 0, autoAlpha: 1 }, "16")
      tl.to("#skill1", 3, { y: 0, autoAlpha: 1 }, "20")
      tl.to("#skill2", 3, { y: 0, autoAlpha: 1 }, "21")
      tl.to("#skill3", 3, { y: 0, autoAlpha: 1 }, "22")
      tl.to("#skill4", 3, { y: 0, autoAlpha: 1 }, "23")
      tl.to("#twitterLink", 2, { y: 0, autoAlpha: 1 }, "26")
      tl.to("#igLink", 2, { y: 0, autoAlpha: 1 }, "27")
      tl.to("#linkedinLink", 2, { y: 0, autoAlpha: 1 }, "28")
      tl.to("#githubLink", 2, { y: 0, autoAlpha: 1 }, "29")
      tl.to("#mediumLink", 2, { y: 0, autoAlpha: 1 }, "30")
    }

    const handleScroll = () => {
      scrollTotal = document.body.scrollHeight - window.innerHeight
      scrollPosY = window.scrollY

      const posPercent = Math.abs(scrollPosY / scrollTotal)
      console.log(posPercent)
      tl.progress(posPercent)
    }
    window.addEventListener("scroll", handleScroll)
  })

  return (
    <Container>
      <Cursor></Cursor>
      <Helmet>
        <title>Udit Desai</title>
      </Helmet>
      <ScrollAnimation
        animateIn="fadeInDown"
        animateOnce={true}
        offset={25}
        duration={2}
      >
        <NavbarSection id="navbar">
          <Navbar />
        </NavbarSection>
      </ScrollAnimation>
      <HeaderSection>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          offset={25}
          duration={2}
        >
          <HeaderText id="fullstack">FULLSTACK</HeaderText>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          offset={25}
          duration={2}
        >
          <HeaderText id="developer">DEVELOPER</HeaderText>
        </ScrollAnimation>
      </HeaderSection>
      <RSDivider text="SOME DETAIL" hoverText="ABOUT ME!" />
      <AboutSection>
        <AboutText id="about1">
          I’m currently an undergraduate student studying computer engineering
          with certificates in AI and communication at the University of
          Toronto.
        </AboutText>
        <AboutText id="about2">
          This summer, I’m working at{" "}
          <AboutLink href="https://hxouse.com/">HXOUSE</AboutLink>.
        </AboutText>
        <AboutText id="about3">
          In the past I’ve developed webpages at{" "}
          <AboutLink href="https://www.tangerine.ca/en/index.html">
            Tangerine
          </AboutLink>{" "}
          and hosted hackathons and workshops through{" "}
          <AboutLink href="https://www.facebook.com/projectcipher">
            Cipher
          </AboutLink>
          , a non profit I founded.
        </AboutText>
        <AboutText id="about4">
          Check out my experience and work below or on my{" "}
          <AboutLink href="https://drive.google.com/file/d/1t5UnaVPL3HoxOMG1N_A36pX1UAQx5Ihu/view?usp=sharing">
            resume
          </AboutLink>{" "}
          for more detail.
        </AboutText>
      </AboutSection>
      <LSDivider text="EXPERIENCE" hoverText="GREAT" />
      <ExperienceHxouse id="hxouse">
        <Experience
          company="HXOUSE"
          position="Intern"
          summary="HXOUSE is a next-generation incubator and accelator established by La Mar Taylor, the creative director behind The Weeknd/XO brand. I develop new programming as well as develop technical projects."
          image="https://i.imgur.com/c226Gmt.png"
          width={60}
          top={10}
        />
      </ExperienceHxouse>
      <ExperienceTangerine id="tangerine">
        <Experience
          company="TANGERINE"
          position="Frontend Dev Intern"
          summary="Tangerine is a Canadian direct bank with a focus on online banking. I worked on developing and testing webpages for marketing campaigns targetting 1,000,000+ clients along with working on the main Tangerine website."
          image="https://i.imgur.com/08NF4ei.png"
          width={100}
          top={-65}
        />
      </ExperienceTangerine>
      <ExperienceCipher id="cipher">
        <Experience
          company="CIPHER"
          position="Founder"
          summary="Cipher is a registered non-profit I founded that introduces computer programming to high school students. I raised over $60,000 through grants and sponsorship to host three hackathons, two conferences, and 50+ workshops."
          image="https://i.imgur.com/m3f5Ps5.png"
          width={60}
          top={10}
        />
      </ExperienceCipher>
      <RSDivider text="PROJECTS" hoverText="ON THE SIDE" />
      <ProjectRight id="project1">
        <Project
          name="CLOUT JAR"
          summary="A web application which allows easy betting on your Basketball teams with your favorite friends. Built using Node, Firebase, and NBA APIs."
          skills={[
            "HTML",
            "CSS",
            "Javascript",
            "Node.js",
            "Express.js",
            "Pug",
            "Firebase",
            "Sketch",
            "NBA API",
          ]}
          github="https://github.com/uditdesai/clout-jar"
          margin={17}
        />
      </ProjectRight>
      <ProjectLeft id="project2">
        <Project
          name="YELP CAMP"
          summary="Yelp style web application for campsites built as a final project for a full-stack web-developer course. Built using Node, Express and MongoDB."
          skills={[
            "HTML",
            "CSS",
            "Javascript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Password",
            "Bootstrap",
          ]}
          github="https://github.com/uditdesai/YelpCamp"
          margin={14}
        />
      </ProjectLeft>
      <ProjectRight id="project3">
        <Project
          name="MAP GIS"
          summary="Mapping application or GIS built as a course-long engineering project that consisted of UX/UI designed interface, a Dijkstra/A* algoritm and a TSM problem."
          skills={["C++", "STDlib", "Open GL", "OSM API", "Dijkstra", "A*"]}
          github="https://github.com/uditdesai/map-app"
          margin={25}
        />
      </ProjectRight>
      <ProjectLeft id="project4">
        <Project
          name="RETRO BOOMBOX"
          summary="Web application allowing users to find the top songs of a specific genre from any time in history. Built using Node along with Spotify and Billboard APIs."
          skills={[
            "HTML",
            "CSS",
            "Javascript",
            "Node.js",
            "Spotify API",
            "BillBoard API",
          ]}
          github="https://github.com/uditdesai/jukebox"
          margin={12}
        />
      </ProjectLeft>
      <LSDivider text="SKILLS" hoverText="MY" />
      <SkillsSection>
        <SkillContainer id="skill1">
          <Skill
            section="LANGUAGES"
            skills={["HTML", "CSS", "JAVASCRIPT", "C++/C", "PYTHON"]}
          />
        </SkillContainer>
        <SkillContainer id="skill2">
          <Skill
            section="TECHNOLOGIES"
            skills={[
              "NODE.JS",
              "EXPRESS",
              "REACT",
              "GATSBY.JS",
              "NEXT.JS",
              "MONGODB",
              "FIREBASE",
              "GIT",
              "HEROKU",
            ]}
          />
        </SkillContainer>
        <SkillContainer id="skill3">
          <Skill
            section="TOOLS"
            skills={["JIRA", "ASANA", "OPENTEXT", "VSCODE"]}
          />
        </SkillContainer>
        <SkillContainer id="skill4">
          <Skill
            section="DESIGN"
            skills={["FIGMA", "SKETCH", "PHOTOSHOP", "WIREFRAMES"]}
          />
        </SkillContainer>
      </SkillsSection>
      <RSDivider text="CONTACT" hoverText="ME" />
      <ContactSection>
        <ContactEmailSection>
          <ContactEmailText>Email me at</ContactEmailText>
          <ContactEmailLink
            id="email"
            href="mailto:udit.desai3@gmail.com?subject=Hey Udit!"
          >
            udit.desai3@gmail.com
          </ContactEmailLink>
        </ContactEmailSection>
        <ContactSocialSection>
          <ContactSocialContainer>
            <ContactSocialText>or contact me through</ContactSocialText>
            <ContactSocialLinkContainer id="twitterLink">
              <ContactSocialLink href="https://twitter.com/uydesai">
                Twitter,
              </ContactSocialLink>
            </ContactSocialLinkContainer>
            <ContactSocialLinkContainer id="igLink">
              <ContactSocialLink href="https://www.instagram.com/uydesai/?hl=en">
                Instagram,
              </ContactSocialLink>
            </ContactSocialLinkContainer>
            <ContactSocialLinkContainer id="linkedinLink">
              <ContactSocialLink href="https://www.linkedin.com/in/uditdesai">
                Linkedin,
              </ContactSocialLink>
            </ContactSocialLinkContainer>
            <ContactSocialLinkContainer id="githubLink">
              <ContactSocialLink href="https://github.com/uditdesai">
                Github,
              </ContactSocialLink>
            </ContactSocialLinkContainer>
            <ContactSocialLinkContainer id="mediumLink">
              <ContactSocialLink href="https://medium.com/@uydesai">
                Medium
              </ContactSocialLink>
            </ContactSocialLinkContainer>
          </ContactSocialContainer>
        </ContactSocialSection>
        <ContactInternshipSection>
          <ContactInternshipText>
            CURRENTLY LOOKING FOR AN 4-8 MONTH INTERNSHIP STARTING SUMMER 2020
            :)
          </ContactInternshipText>
        </ContactInternshipSection>
      </ContactSection>
      <Navbar />
      <BottomSection></BottomSection>
    </Container>
  )
}

export default App
