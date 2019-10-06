import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"

//SKILL TAG
const Skill = styled.p`
  width: 70px;
  text-align: center;
  font-family: "Heebo-Bold";
  font-size: 12px;
  color: black;
  background: white;
  padding: 4px 0 4px 0;
  border: 3px solid black;
  background: white;
  margin: 10px 0 0 0;
  @media (max-width: 500px) {
    font-size: 10px;
    width: 60px;
    padding: 3px 0 3px 0;
  }
`

const SkillTag = ({ name }) => {
  return <Skill>{name}</Skill>
}

export default SkillTag
