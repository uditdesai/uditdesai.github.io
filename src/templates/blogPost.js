import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import favicon16 from "../assets/favicon16.png"
import favicon32 from "../assets/favicon32.png"
import favicon64 from "../assets/favicon64.png"
import { Link } from "gatsby"

import Footer from "../components/footer.js"
import Navbar from "../components/Navbar.js"

const BlogContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 161px);
  margin: 0 auto 0 auto;

  @media (max-width: 600px) {
    width: calc(100% - 40px);
  }
`

const BackLink = styled(Link)`
  text-decoration: none;
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0 0 10px 0;
  color: black;
  cursor: pointer;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const BlogTitle = styled.p`
  font-family: "EBGaramond-Regular";
  font-size: 72px;
  margin: 0 0 10px 0;
  color: black;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 48px;
  }
`

const BlogDate = styled.p`
  font-family: "EBGaramond-Regular";
  font-size: 20px;
  margin: 0 0 60px 0;
  color: black;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const BlogParagraph = styled.p`
  width: 100%;
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0 0 20px 0;
  color: black;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const BlogQuote = styled.blockquote`
  width: calc(100% - 30px);
  font-family: "EBGaramond-Regular";
  font-size: 20px;
  margin: 30px 0 40px 0;
  color: #4f4f4f;
  padding-left: 30px;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const BlogSubTitle = styled.h2`
  width: 100%;
  font-family: "EBGaramond-Regular";
  font-size: 24px;
  margin: 30px 0 20px 0;
  color: black;
  font-weight: 400;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const BlogList = styled.li`
  width: calc(100% - 20px);
  font-family: "WorkSans-Regular";
  font-size: 18px;
  margin: 0 0 20px 0;
  color: black;
  padding-left: 20px;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const BlogListWrapper = styled.ul`
  list-style-position: outside;
`

const BlogPost = ({ data }) => {
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

  const post = data.markdownRemark

  const body = data.markdownRemark.html.split("<p>.</p>")

  const bodyParagraphs = body.map(p => {
    if (p.includes("<blockquote>")) {
      return <BlogQuote>"{p.replace(/<\/?[^>]+(>|$)/g, "")}"</BlogQuote>
    } else if (p.includes("<ul>")) {
      const pList = p.split("<li>div</li>")
      return (
        <BlogListWrapper>
          {pList.map(pL => {
            return <BlogList>{pL.replace(/<\/?[^>]+(>|$)/g, "")}</BlogList>
          })}
        </BlogListWrapper>
      )
    } else if (p.includes("<h2>")) {
      return <BlogSubTitle>{p.replace(/<\/?[^>]+(>|$)/g, "")}</BlogSubTitle>
    } else if (p.includes("<p>")) {
      return <BlogParagraph>{p.replace(/<\/?[^>]+(>|$)/g, "")}</BlogParagraph>
    }
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
      <Navbar></Navbar>
      <BlogContainer>
        <BackLink to="/blog"> {`<-`} Back to blog index</BackLink>
        <BlogTitle>{post.frontmatter.title}</BlogTitle>
        <BlogDate>{post.frontmatter.date}</BlogDate>
        {bodyParagraphs}
      </BlogContainer>
      <Footer></Footer>
    </>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
