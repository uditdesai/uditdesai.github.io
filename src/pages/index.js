import React from "react"
import Navbar from "../components/Navbar";
import RSDivider from "../components/RSDivider";
import LSDivider from "../components/LSDivider";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Skill from "../components/Skill";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Helmet } from "react-helmet";

const App = (props) => {
    return (
        <div>
            <Helmet>
                <title>Udit Desai</title>
            </Helmet>
            <ScrollAnimation animateIn="fadeInDown" animateOnce={true} offset={25} duration={3}>
                <Navbar />
            </ScrollAnimation>
            <div className="header">
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce={true} offset={25} duration={2}>
                    <h1 className="header-text">
                        <span className="l">F</span><span className="l">U</span><span className="l">L</span>
                        <span className="l">L</span><span className="l"> </span><span className="l">S</span>
                        <span className="l">T</span><span className="l">A</span><span className="l">C</span>
                        <span className="l">K</span>
                    </h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce={true} offset={25} duration={2}>
                    <h1 className="header-text">
                        <span className="l">D</span><span className="l">E</span><span className="l">V</span>
                        <span className="l">E</span><span className="l">L</span><span className="l">O</span>
                        <span className="l">P</span><span className="l">E</span><span className="l">R</span>
                    </h1>
                </ScrollAnimation>
            </div>
            <RSDivider text="SOME DETAIL" hoverText="ABOUT ME!" />
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={125}>
                <div className="about">
                    <p className="about-text">I’m currently an undergraduate student studying computer engineering with certificates in AI and communication at the University of Toronto.</p>
                    <p className="about-text">This summer, I’m working at <a href="https://hxouse.com/" className="about-span">HXOUSE</a>.</p>
                    <p className="about-text">In the past I’ve developed webpages at <a href="https://www.tangerine.ca/en/index.html" className="about-span">Tangerine</a> and hosted hackathons and workshops through <a href="https://www.facebook.com/projectcipher" className="about-span">Cipher</a>, a non profit I founded.</p>
                    <p className="about-text"> Check out my experience and work below or on my <a href="https://drive.google.com/file/d/1t5UnaVPL3HoxOMG1N_A36pX1UAQx5Ihu/view?usp=sharing" className="about-span">resume</a> for more detail.</p>
                </div>
            </ScrollAnimation>
            <LSDivider text="EXPERIENCE" hoverText="GREAT" />
            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce={true} offset={50} duration={1.25}>
                <div className="experience-hxouse">
                    <Experience
                        company="HXOUSE"
                        position="Intern"
                        summary="HXOUSE is a next-generation incubator and accelator established by La Mar Taylor, the creative director behind The Weeknd/XO brand. I develop new programming as well as develop technical projects."
                        image="https://i.imgur.com/c226Gmt.png"
                        width={60}
                        top={10}
                    />
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce={true} offset={50} duration={1.25}>
                <div className="experience-tangerine">
                    <Experience
                        company="TANGERINE"
                        position="Frontend Dev Intern"
                        summary="Tangerine is a Canadian direct bank with a focus on online banking. I worked on developing and testing webpages for marketing campaigns targetting 1,000,000+ clients along with working on the main Tangerine website."
                        image="https://i.imgur.com/08NF4ei.png"
                        width={100}
                        top={-65}
                    />
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce={true} offset={50} duration={1.25}>
                <div className="experience-cipher">
                    <Experience
                        company="CIPHER"
                        position="Founder"
                        summary="Cipher is a registered non-profit I founded that introduces computer programming to high school students. I raised over $60,000 through grants and sponsorship to host three hackathons, two conferences, and 50+ workshops."
                        image="https://i.imgur.com/m3f5Ps5.png"
                        width={60}
                        top={10}
                    />
                </div>
            </ScrollAnimation>
            <RSDivider text="PROJECTS" hoverText="ON THE SIDE" />
            <div className="project-right">
                <ScrollAnimation animateIn="fadeIn" animateOnce={false} offset={25} duration={2}>
                    <Project
                        name="CLOUT JAR"
                        summary="A web application which allows easy betting on your Basketball teams with your favorite friends. Built using Node, Firebase, and NBA APIs."
                        skills={["HTML", "CSS", "JS", "Node", "Firebase"]}
                        github="https://github.com/uditdesai/clout-jar"
                        margin={17}
                    />
                </ScrollAnimation>
            </div>
            <div className="project-left">
                <ScrollAnimation animateIn="fadeIn" animateOnce={false} offset={25} duration={2}>
                    <Project
                        name="YELP CAMP"
                        summary="Yelp style web application for campsites built as a final project for a full-stack web-developer course. Built using Node, Express and MongoDB."
                        skills={["HTML", "CSS", "JS", "Node", "MongoDB"]}
                        github="https://github.com/uditdesai/YelpCamp"
                        margin={14}
                    />
                </ScrollAnimation>
            </div>
            <div className="project-right">
                <ScrollAnimation animateIn="fadeIn" animateOnce={false} offset={25} duration={2}>
                    <Project
                        name="MAP GIS"
                        summary="Mapping application or GIS built as a course-long engineering project that consisted of UX/UI designed interface, a Dijkstra/A* algoritm and a TSM problem."
                        skills={["C++", "STDlib", "Open GL", "OSM API"]}
                        github="https://github.com/uditdesai/map-app"
                        margin={25}
                    />
                </ScrollAnimation>
            </div>
            <div className="project-left">
                <ScrollAnimation animateIn="fadeIn" animateOnce={false} offset={25} duration={2}>
                    <Project
                        name="RETRO BOOMBOX"
                        summary="Web application allowing users to find the top songs of a specific genre from any time in history. Built using Node along with Spotify and Billboard APIs."
                        skills={["HTML", "CSS", "JS", "Node", "Spotify API"]}
                        github="https://github.com/uditdesai/jukebox"
                        margin={12}
                    />
                </ScrollAnimation>
            </div>
            <LSDivider text="SKILLS" hoverText="MY" />
            <div className="skillsGrid">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={125} duration={1}>
                    <Skill
                        section="LANGUAGES"
                        skills={["HTML", "CSS", "JAVASCRIPT", "C++/C", "PYTHON"]}
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={125} duration={1.5}>
                    <Skill
                        section="TECHNOLOGIES"
                        skills={["NODE.JS", "EXPRESS", "REACT", "GATSBY.JS", "NEXT.JS", "MONGODB", "FIREBASE", "GIT", "HEROKU"]}
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={125} duration={2}>
                    <Skill
                        section="TOOLS"
                        skills={["JIRA", "ASANA", "OPENTEXT", "VSCODE"]}
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={125} duration={2.5}>
                    <Skill
                        section="DESIGN"
                        skills={["FIGMA", "SKETCH", "PHOTOSHOP", "WIREFRAMES"]}
                    />
                </ScrollAnimation>
            </div>
            <RSDivider text="CONTACT" hoverText="ME" />
            <div className="contact">
                <div className="contact-email">
                    <h3 className="contact-email-text">Email me at</h3>
                    <a href="mailto:udit.desai3@gmail.com?subject=Hey Udit!" className="contact-email-link">udit.desai3@gmail.com</a>
                </div>
                <div className="contact-social">
                    <div className="contact-social-inner">
                        <h3 className="contact-social-text">or contact me through</h3>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={125}>
                            <div className="contact-link-container"><a href="https://twitter.com/uydesai" className="contact-social-link">Twitter,</a></div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={125}>
                            <div className="contact-link-container"><a href="https://www.instagram.com/uydesai/?hl=en" className="contact-social-link">Instagram,</a></div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={125}>
                            <div className="contact-link-container"><a href="https://www.linkedin.com/in/uditdesai" className="contact-social-link">Linkedin,</a></div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={125}>
                            <div className="contact-link-container"><a href="https://github.com/uditdesai" className="contact-social-link">Github,</a></div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={125}>
                            <div className="contact-link-container"><a href="https://medium.com/@uydesai" className="contact-social-link">Medium</a></div>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="contact-internship">
                    <h4 className="contact-internship-text">CURRENTLY LOOKING FOR AN 8-16 MONTH INTERNSHIP STARTING SUMMER 2020 :)</h4>
                </div>
            </div>
            <Navbar />
            <div className="bottom"></div>
        </div>

    )
}

export default App;
