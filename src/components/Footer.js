import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BackToTop = styled.button`
  text-decoration: none;
  font-family: "WorkSans-Regular";
  font-size: 18px;
  color: black;
  margin: 100px 25px 40px 25px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  outline: none;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }
`

const Navbar = ({}) => {
  const topFunction = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }
  return (
    <Container>
      <BackToTop onClick={topFunction}>BACK TO TOP</BackToTop>
    </Container>
  )
}

export default Navbar
