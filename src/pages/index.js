import React from "react"
import Navbar from "../components/Navbar";
import RSDivider from "../components/RSDivider";
import LSDivider from "../components/LSDivider";
import Experience from "../components/Experience";
import Project from "../components/Project";

const App = (props) => {
    return (
        <div>
            <Navbar />
            <div className="header">
                <h1 className="header-text">FULL STACK</h1>
                <h1 className="header-text">DEVELOPER</h1>
            </div>
            <RSDivider text="SOME DETAIL" />
            <div className="about">
                <p className="about-text">I’m currently an undergraduate student studying computer engineering with certificates in AI and communication at the University of Toronto.</p>
                <p className="about-text">This summer, I’m working at <a href="/" className="about-span">HXOUSE</a>.</p>
                <p className="about-text">In the past I’ve developed webpages at <a href="/" className="about-span">Tangerine</a> and hosted hackathons and workshops through <a href="/" className="about-span">Cipher</a>, a non profit I founded.</p>
            </div>
            <LSDivider text="EXPERIENCE" />
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
            <RSDivider text="PROJECTS" />
            <div className="project-right">
                <Project
                    name="CLOUT JAR"
                    summary="A web application which allows easy betting on your Basketball teams with your favorite friends. Built using Node, Firebase, and NBA APIs."
                    skills={["HTML", "CSS", "JS", "Node", "Firebase"]}
                    margin={32}
                />
            </div>
            <div className="project-left">
                <Project
                    name="YELP CAMP"
                    summary="Yelp style web application for campsites built as a final project for a full-stack web-developer course. Built using Node, Express and MongoDB."
                    skills={["HTML", "CSS", "JS", "Node", "MongoDB"]}
                    margin={28}
                />
            </div>
            <div className="project-right">
                <Project
                    name="MAP GIS"
                    summary="Mapping application or GIS built as a course-long engineering project that consisted of UX/UI designed interface, a Dijkstra/A* algoritm and a TSM problem."
                    skills={["C++", "STDlib", "Open GL", "OSM API"]}
                    margin={45}
                />
            </div>
            <div className="project-left">
                <Project
                    name="RETRO BOOMBOX"
                    summary="Web application allowing users to find the top songs of a specific genre from any time in history. Built using Node along with Spotify and Billboard APIs."
                    skills={["HTML", "CSS", "JS", "Node", "Spotify API"]}
                    margin={25}
                />
            </div>
            <LSDivider text="CONTACT" />
            <div className="contact">
                <div className="contact-email">
                    <h3 className="contact-email-text">Email me at</h3>
                    <a href="/" className="contact-email-link">udit.desai3@gmail.com</a>
                </div>
                <div className="contact-social">
                    <div className="contact-social-inner">
                        <h3 className="contact-social-text">or contact me through</h3>
                        <a href="/" className="contact-social-link">Twitter,</a>
                        <a href="/" className="contact-social-link">Instagram,</a>
                        <a href="/" className="contact-social-link">Linkedin,</a>
                        <a href="/" className="contact-social-link">Github,</a>
                        <a href="/" className="contact-social-link">Medium</a>
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
