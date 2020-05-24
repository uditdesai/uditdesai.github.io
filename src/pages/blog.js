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

const Wrapper = styled.div`
  min-height: calc(100vh - 161px);
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto 0 auto;

  @media (max-width: 600px) {
    width: calc(100% - 40px);
  }
`

const BlogIndexTitle = styled.h4`
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

const BlogDate = styled.p`
  text-decoration: none;
  font-family: "WorkSans-Regular";
  font-size: 14px;
  margin: 0 0 10px 0;
  color: black;
  font-weight: 400;
  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const BlogTitle = styled(Link)`
  text-decoration: none;
  font-family: "WorkSans-Regular";
  color: black;
  font-weight: 400;
  font-size: 18px;
  margin: 0 0 25px 0;
  max-width: 400px;
  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const Blog = ({ data }) => {
  const blogEntries = data.allMarkdownRemark.edges.map(({ node }) => {
    return (
      <>
        <BlogDate to={node.fields.slug}>{node.frontmatter.date}</BlogDate>
        <BlogTitle to={node.fields.slug}>{node.frontmatter.title} -></BlogTitle>
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
      <Navbar></Navbar>
      <Wrapper>
        <BlogIndexTitle>Blog Index</BlogIndexTitle>
        {blogEntries}
      </Wrapper>
      <Footer></Footer>
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
