import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax } from "gsap/all"

//SKILL TAG
const Skill = styled.p`
  font-family: "Heebo-Bold";
  font-size: 16px;
  color: black;
  background: white;
  padding: 6px 14px 6px 14px;
  border: 3px solid black;
  background: white;
  margin: 15px 25px 0 0;
  @media (max-width: 1100px) {
    margin: 15px 15px 0 0;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
    padding: 4px 12px 4px 12px;
  }
  @media (max-width: 900px) {
    margin: 15px 10px 0 0;
  }
`

const SkillTag = ({ name }) => {
  return <Skill>{name}</Skill>
}

export default SkillTag
