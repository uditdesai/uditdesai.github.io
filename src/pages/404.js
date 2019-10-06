import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../assets/logo.jpg"
import { TweenMax, TimelineMax } from "gsap/all"

//PARENT CONTAINER FOR WHOLE SITE
const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CreditLogo = styled.img`
  width: 100px;
`

const App = () => {
  useEffect(() => {
    TweenMax.to("#container", 2, { autoAlpha: 1 })
  }, [])

  return (
    <Container id="container">
      <Link to="/">
        <CreditLogo src={Logo}></CreditLogo>
      </Link>
    </Container>
  )
}

export default App
