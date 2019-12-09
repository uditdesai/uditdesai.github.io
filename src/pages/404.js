import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../assets/logo.jpg"
import { TweenMax, TimelineMax } from "gsap"
import favicon16 from "../assets/favicon16.png"
import favicon32 from "../assets/favicon32.png"
import favicon64 from "../assets/favicon64.png"
import { Helmet } from "react-helmet"

//PARENT CONTAINER FOR WHOLE SITE
const DiffContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`
const CreditLogo = styled.img`
  width: 100px;
`

const App = () => {
  useEffect(() => {
    TweenMax.to("#container404", 2, { opacity: 1 })
  }, [])

  return (
    <>
      <Helmet
        meta={[
          { name: "description", content: "Udit Desai - Developer" },
          { name: "keywords", content: "developer" },
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
      ></Helmet>
      <DiffContainer id="container404">
        <Link to="/">
          <CreditLogo src={Logo}></CreditLogo>
        </Link>
      </DiffContainer>
    </>
  )
}

export default App
