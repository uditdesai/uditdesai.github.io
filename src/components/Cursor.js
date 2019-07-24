import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { TweenMax } from "gsap/TweenMax"

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #6fcf97;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  margin: 0;
  padding: 0;
  z-index: 999;
  pointer-events: none;
`

const Cursor = () => {
  useEffect(() => {
    document.addEventListener("mousemove", e => {
      TweenMax.to("#circle", 0.4, { x: e.pageX - 21, y: e.pageY - 21 })
    })
  })
  return <Circle id="circle"></Circle>
}

export default Cursor
