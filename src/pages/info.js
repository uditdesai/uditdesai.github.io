import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import favicon16 from "../assets/favicon16.png"
import favicon32 from "../assets/favicon32.png"
import favicon64 from "../assets/favicon64.png"
import { Link } from "gatsby"

import Footer from "../components/Footer.js"
import Navbar from "../components/Navbar.js"

const Wrapper = styled.div`
  width: fit-content;
  min-height: calc(100vh - 161px);
  display: flex;
  justify-content: center;
  margin: 0 auto 0 auto;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const BioSection = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 150px 0 0;

  @media (max-width: 1050px) {
    width: 400px;
    margin: 0 100px 0 0;
  }

  @media (max-width: 800px) {
    width: calc(100% - 40px);
    margin: 0 auto 40px auto;
  }
`

const SectionTitle = styled.h4`
  font-family: "EBGaramond-Regular";
  color: black;
  width: 100%;
  margin: 0 0 30px 0;
  font-size: 24px;
  font-weight: 400;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const BioContent = styled.p`
  font-family: "WorkSans-Regular";
  color: black;
  width: 100%;
  margin: 0 0 25px 0;
  font-size: 16px;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const BioLink = styled.a`
  text-decoration: none;
  color: black;
  font-family: "WorkSans-Regular";
  font-size: 16px;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const ContactSection = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0;

  @media (max-width: 800px) {
    width: calc(100% - 40px);
    margin: 0 auto 0 auto;
  }
`

const ContactLink = styled.a`
  text-decoration: none;
  color: black;
  font-family: "WorkSans-Regular";
  margin: 0 0 20px 0;
  font-size: 14px;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const Info = ({}) => {
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
      <Wrapper>
        <BioSection>
          <SectionTitle>Bio</SectionTitle>
          <BioContent>
            {
              "I’m a developer and designer studying computer engineering at the University of Toronto. Right now I’m interning as a UX Developer at "
            }
            <BioLink target="_blank" href="https://www.shopify.com/">
              Shopify
            </BioLink>
            {". In the past I’ve worked as a software developer at "}
            <BioLink target="_blank" href="https://www.hxouse.com/">
              HXOUSE
            </BioLink>
            {"."}
          </BioContent>
          <BioContent>
            I also take on select freelance projects for local creatives and
            brands that most often are in the shape of a creative and
            well-designed portfolio and/or e-commerse website.
          </BioContent>
          <BioContent>
            At University, I’m focused on the area of software and I’m pursuing
            certificates in artificial intelligence and communication. I also
            act a web designer for The Cannon (UofT Engineering School’s
            newspaper) and the University of Toronto Hyperloop team.
          </BioContent>
          <BioContent>
            {"In the past, during high school, I cofounded "}
            <BioLink
              target="_blank"
              href="https://www.facebook.com/projectcipher"
            >
              Cipher
            </BioLink>
            {
              ", a non-profit organization with the goal of introducing programming to high school students through creating a community. We hosted one-day conferences, workshops, and hackathons."
            }
          </BioContent>
          <BioContent>
            I like to run, play Animal Crossing, watch great television
            (subjective), listen to music, and I'm deeply interested in health
            and fashion.
          </BioContent>
        </BioSection>
        <ContactSection>
          <SectionTitle>Contact</SectionTitle>
          <ContactLink
            target="_blank"
            href="mailto:udit.desai3@gmail.com?subject=Hey Udit!"
          >
            Email -> udit.desai3@gmail.com
          </ContactLink>
          <ContactLink target="_blank" href="https://github.com/uditdesai">
            Github -> uditdesai
          </ContactLink>
          <ContactLink
            target="_blank"
            href="https://www.linkedin.com/in/uditdesai/"
          >
            Linkedin -> uditdesai
          </ContactLink>
          <ContactLink target="_blank" href="https://twitter.com/uydesai">
            Twitter -> uydesai
          </ContactLink>
          <ContactLink
            target="_blank"
            href="https://www.instagram.com/uydesai/?hl=en"
          >
            Instagram -> uydesai
          </ContactLink>
          <ContactLink
            target="_blank"
            href="https://drive.google.com/file/d/1kGMe9NRln_ljcbcxHOAO5006hVWmNmEZ/view?usp=sharing"
          >
            Resume -> pdf
          </ContactLink>
        </ContactSection>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Info
