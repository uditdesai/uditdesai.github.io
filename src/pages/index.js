import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import RSDivider from "../components/RSDivider"
import LSDivider from "../components/LSDivider"
import Experience from "../components/Experience"
import Project from "../components/Project"
import Skill from "../components/Skill"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import { TweenMax, TimelineMax } from "gsap/TweenMax"
import { Helmet } from "react-helmet"

const App = props => {
  let scrollTotal = 0
  let scrollPosY = 0

  useEffect(() => {
    console.log(document.body.scrollHeight - window.innerHeight)

    setTimeout(() => {
      window.removeEventListener("scroll", noScroll)
    }, 3000)
    const noScroll = () => {
      window.scrollTo(0, 0)
    }
    window.addEventListener("scroll", noScroll)

    const scrollTL = new TimelineMax({ paused: true })
    const autoTL = new TimelineMax()

    TweenMax.set(`#filler`, { opacity: 1 })

    TweenMax.set("#about1", { x: -800, autoAlpha: 0.5 })
    TweenMax.set("#about2", { x: -800, autoAlpha: 0.5 })
    TweenMax.set("#about3", { x: -800, autoAlpha: 0.5 })
    TweenMax.set("#about4", { x: -800, autoAlpha: 0.5 })

    // TweenMax.set('#hxouse', { x: -900 });
    // TweenMax.set('#tangerine', { x: 900 });
    // TweenMax.set('#cipher', { x: -900 });

    TweenMax.set("#project1", { x: -800 })
    TweenMax.set("#project2", { x: 800 })
    TweenMax.set("#project3", { x: -800 })
    TweenMax.set("#project4", { x: 800 })

    autoTL.set("#navbar", { y: -300, autoAlpha: 0 })
    autoTL.set("#fullstack", { autoAlpha: 0 })
    autoTL.set("#developer", { autoAlpha: 0 })
    autoTL.to(`#cover`, 0.3, { autoAlpha: 0 }, "0")
    autoTL.to(`#navbar`, 1, { y: 0, autoAlpha: 1 }, "0")
    autoTL.to(`#fullstack`, 2, { autoAlpha: 1 }, "1")
    autoTL.to(`#developer`, 2, { autoAlpha: 1 }, "1")

    scrollTL.to("#fullstack", 8, { x: 700, autoAlpha: 1 }, "0")
    scrollTL.to("#developer", 8, { x: -700, autoAlpha: 1 }, "0")

    scrollTL.to("#about1", 4, { x: 0, autoAlpha: 1 }, "4")
    scrollTL.to("#about2", 4, { x: 0, autoAlpha: 1 }, "5")
    scrollTL.to("#about3", 4, { x: 0, autoAlpha: 1 }, "6")
    scrollTL.to("#about4", 4, { x: 0, autoAlpha: 1 }, "7")

    scrollTL.to("#hxouse", 15, { x: 1200, y: -100 }, "23")
    scrollTL.to("#tangerine", 15, { x: -1200, y: -100 }, "33")
    scrollTL.to("#cipher", 15, { x: 1200, y: -100 }, "43")

    scrollTL.to("#project1", 15, { x: 1200, y: -100 }, "50")
    scrollTL.to("#project2", 15, { x: -1200, y: -100 }, "60")
    scrollTL.to("#project3", 15, { x: 1200, y: -100 }, "70")
    scrollTL.to("#project4", 15, { x: 1200, y: -100 }, "80")

    // scrollTL.add("space", "+=50");
    // scrollTL.to('#filler', 1, { opacity: 1 }, "space");

    const handleScroll = () => {
      scrollTotal = document.body.scrollHeight - window.innerHeight
      scrollPosY = window.scrollY
      const posPercent = Math.abs(scrollPosY / scrollTotal)
      console.log(posPercent)
      scrollTL.progress(posPercent)
    }

    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div class="viewport">
      <Helmet>
        <title>Udit Desai</title>
      </Helmet>
      <div className="cover" id="cover"></div>
      <div id="navbar">
        <Navbar />
      </div>
      <div className="header">
        <h1 className="header-text" id="fullstack">
          <span className="l">F</span>
          <span className="l">U</span>
          <span className="l">L</span>
          <span className="l">L</span>
          <span className="l"> </span>
          <span className="l">S</span>
          <span className="l">T</span>
          <span className="l">A</span>
          <span className="l">C</span>
          <span className="l">K</span>
        </h1>
        <h1 className="header-text" id="developer">
          <span className="l">D</span>
          <span className="l">E</span>
          <span className="l">V</span>
          <span className="l">E</span>
          <span className="l">L</span>
          <span className="l">O</span>
          <span className="l">P</span>
          <span className="l">E</span>
          <span className="l">R</span>
        </h1>
      </div>
      <RSDivider text="SOME DETAIL" hoverText="ABOUT ME!" />
      <div className="about">
        <p className="about-text" id="about1">
          I’m currently an undergraduate student studying computer engineering
          with certificates in AI and communication at the University of
          Toronto.
        </p>
        <p className="about-text" id="about2">
          This summer, I’m working at{" "}
          <a href="https://hxouse.com/" className="about-span">
            HXOUSE
          </a>
          .
        </p>
        <p className="about-text" id="about3">
          In the past I’ve developed webpages at{" "}
          <a
            href="https://www.tangerine.ca/en/index.html"
            className="about-span"
          >
            Tangerine
          </a>{" "}
          and hosted hackathons and workshops through{" "}
          <a
            href="https://www.facebook.com/projectcipher"
            className="about-span"
          >
            Cipher
          </a>
          , a non profit I founded.
        </p>
        <p className="about-text" id="about4">
          Check out my experience and work below or on my{" "}
          <a
            href="https://drive.google.com/file/d/1t5UnaVPL3HoxOMG1N_A36pX1UAQx5Ihu/view?usp=sharing"
            className="about-span"
          >
            resume
          </a>{" "}
          for more detail.
        </p>
      </div>
      <LSDivider text="EXPERIENCE" hoverText="GREAT" />
      <div className="experience-hxouse" id="hxouse">
        <Experience
          company="HXOUSE"
          position="Intern"
          summary="HXOUSE is a next-generation incubator and accelator established by La Mar Taylor, the creative director behind The Weeknd/XO brand. I develop new programming as well as develop technical projects."
          image="https://i.imgur.com/c226Gmt.png"
          width={60}
          top={10}
        />
      </div>
      <div className="experience-tangerine" id="tangerine">
        <Experience
          company="TANGERINE"
          position="Frontend Dev Intern"
          summary="Tangerine is a Canadian direct bank with a focus on online banking. I worked on developing and testing webpages for marketing campaigns targetting 1,000,000+ clients along with working on the main Tangerine website."
          image="https://i.imgur.com/08NF4ei.png"
          width={100}
          top={-65}
        />
      </div>
      <div className="experience-cipher" id="cipher">
        <Experience
          company="CIPHER"
          position="Founder"
          summary="Cipher is a registered non-profit I founded that introduces computer programming to high school students. I raised over $60,000 through grants and sponsorship to host three hackathons, two conferences, and 50+ workshops."
          image="https://i.imgur.com/m3f5Ps5.png"
          width={60}
          top={10}
        />
      </div>
      <RSDivider text="PROJECTS" hoverText="ON THE SIDE" />
      <div className="project-right" id="project1">
        <Project
          name="CLOUT JAR"
          summary="A web application which allows easy betting on your Basketball teams with your favorite friends. Built using Node, Firebase, and NBA APIs."
          skills={["HTML", "CSS", "JS", "Node", "Firebase"]}
          github="https://github.com/uditdesai/clout-jar"
          margin={17}
        />
      </div>
      <div className="project-left" id="project2">
        <Project
          name="YELP CAMP"
          summary="Yelp style web application for campsites built as a final project for a full-stack web-developer course. Built using Node, Express and MongoDB."
          skills={["HTML", "CSS", "JS", "Node", "MongoDB"]}
          github="https://github.com/uditdesai/YelpCamp"
          margin={14}
        />
      </div>
      <div className="project-right" id="project3">
        <Project
          name="MAP GIS"
          summary="Mapping application or GIS built as a course-long engineering project that consisted of UX/UI designed interface, a Dijkstra/A* algoritm and a TSM problem."
          skills={["C++", "STDlib", "Open GL", "OSM API"]}
          github="https://github.com/uditdesai/map-app"
          margin={25}
        />
      </div>
      <div className="project-left" id="project4">
        <Project
          name="RETRO BOOMBOX"
          summary="Web application allowing users to find the top songs of a specific genre from any time in history. Built using Node along with Spotify and Billboard APIs."
          skills={["HTML", "CSS", "JS", "Node", "Spotify API"]}
          github="https://github.com/uditdesai/jukebox"
          margin={12}
        />
      </div>
      <LSDivider text="SKILLS" hoverText="MY" />
      <div className="skillsGrid">
        <Skill
          section="LANGUAGES"
          skills={["HTML", "CSS", "JAVASCRIPT", "C++/C", "PYTHON"]}
        />
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
        <Skill
          section="TOOLS"
          skills={["JIRA", "ASANA", "OPENTEXT", "VSCODE"]}
        />
        <Skill
          section="DESIGN"
          skills={["FIGMA", "SKETCH", "PHOTOSHOP", "WIREFRAMES"]}
        />
      </div>
      <RSDivider text="CONTACT" hoverText="ME" />
      <div className="contact">
        <div className="contact-email">
          <h3 className="contact-email-text">Email me at</h3>
          <a
            href="mailto:udit.desai3@gmail.com?subject=Hey Udit!"
            className="contact-email-link"
          >
            udit.desai3@gmail.com
          </a>
        </div>
        <div className="contact-social">
          <div className="contact-social-inner">
            <h3 className="contact-social-text">or contact me through</h3>
            <div className="contact-link-container">
              <a
                href="https://twitter.com/uydesai"
                className="contact-social-link"
              >
                Twitter,
              </a>
            </div>
            <div className="contact-link-container">
              <a
                href="https://www.instagram.com/uydesai/?hl=en"
                className="contact-social-link"
              >
                Instagram,
              </a>
            </div>
            <div className="contact-link-container">
              <a
                href="https://www.linkedin.com/in/uditdesai"
                className="contact-social-link"
              >
                Linkedin,
              </a>
            </div>
            <div className="contact-link-container">
              <a
                href="https://github.com/uditdesai"
                className="contact-social-link"
              >
                Github,
              </a>
            </div>
            <div className="contact-link-container">
              <a
                href="https://medium.com/@uydesai"
                className="contact-social-link"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
        <div className="contact-internship">
          <h4 className="contact-internship-text">
            CURRENTLY LOOKING FOR AN 8-16 MONTH INTERNSHIP STARTING SUMMER 2020
            :)
          </h4>
        </div>
      </div>
      <Navbar />
      <div id="filler" className="bottom"></div>
    </div>
  )
}

export default App
