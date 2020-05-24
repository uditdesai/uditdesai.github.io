import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  width: 100%;
  margin: 0 auto 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    justify-content: space-between;
  }
`

const NavbarLink = styled(Link)`
  text-decoration: none;
  font-family: "WorkSans-Regular";
  font-size: 18px;
  color: black;
  margin: 40px 25px 0 25px;

  &::selection {
    background: #222222;
    color: #f2f2f2;
  }

  @media (max-width: 600px) {
    margin: 40px 0 0 0;
  }
`

const Navbar = ({}) => {
  return (
    <Container>
      <NavbarLink to="/">UDIT DESAI</NavbarLink>
      <NavbarLink to="/info">INFO</NavbarLink>
      <NavbarLink to="/blog">BLOG</NavbarLink>
    </Container>
  )
}

export default Navbar
