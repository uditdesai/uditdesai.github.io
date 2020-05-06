import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import favicon16 from "../assets/favicon16.png"
import favicon32 from "../assets/favicon32.png"
import favicon64 from "../assets/favicon64.png"
import { Link } from "gatsby"

import copy from "../copy.js"

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
  font-size: 450px;
  color: #f2f2f2;
  pointer-events: none;
  margin: 0;
  word-wrap: break-word;

  @media (max-width: 1000px) {
    font-size: 320px;
  }

  @media (max-width: 600px) {
    font-size: 200px;
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

const NameLink = styled(Link)`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 40px 50px 0 0;
  color: black;
  cursor: pointer;
  text-decoration: none;

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

const BlogIndex = styled.div`
  width: calc(100% - 80px);
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 0;
  margin: 0 auto 50px auto;

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    grid-template-columns: 150px 1fr;
    grid-gap: 0;
  }
`

const BlogLegend = styled.p`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0 0 40px 0;
  color: black;
  text-decoration: none;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const BlogEntry = styled(Link)`
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0 0 30px 0;
  color: black;
  text-decoration: none;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const BlogDate = styled(BlogEntry)``

const BlogTitle = styled(BlogEntry)``

const Blog = ({ data }) => {
  const [info, setInfo] = useState("blog")
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
  const changeBlog = () => {
    setInfo("blog")
  }

  const blogEntries = data.allMarkdownRemark.edges.map(({ node }) => {
    return (
      <>
        <BlogDate to={node.fields.slug}>{node.frontmatter.date}</BlogDate>
        <BlogTitle to={node.fields.slug}>{node.frontmatter.title}</BlogTitle>
      </>
    )
  })

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
        <title>UDIT DESAI | BLOG</title>
      </Helmet>
      <BackgroundTextContainer>
        <BackgroundText>BLOG</BackgroundText>
      </BackgroundTextContainer>
      <Topbar>
        <NameLink info={info} to="/">
          UDIT DESAI
        </NameLink>
        <TopBarLink1 info={info} onClick={changeInfo}>
          INFO
        </TopBarLink1>
        <TopBarLink2 info={info} onClick={changeContact}>
          CONTACT
        </TopBarLink2>
        <TopBarLink onClick={changeBlog} info={info}>
          BLOG
        </TopBarLink>
      </Topbar>
      <InfoContainer>
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
              href="https://drive.google.com/file/d/1kGMe9NRln_ljcbcxHOAO5006hVWmNmEZ/view?usp=sharing"
            >
              Resume
            </ContactLink>
          </ContactWrapper>
        ) : (
          <></>
        )}
      </InfoContainer>
      <BlogIndex>
        <BlogLegend>DATE</BlogLegend>
        <BlogLegend>TITLE</BlogLegend>

        {blogEntries}
      </BlogIndex>
    </>
  )
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
