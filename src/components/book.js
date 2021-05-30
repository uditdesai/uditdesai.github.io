import React from "react"
import styled from "styled-components"

const BookContainer = styled.div`
  min-height: 150px;
  height: ${props => `${props.length * 0.5 + 50}px`};
  background-color: ${props => props.color};
  display: grid;
  grid-template-columns: 70% calc(30% - 20px);
  grid-gap: 20px;
  box-sizing: border-box;
  padding: 10px 30px;

  @media (max-width: 500px) {
    padding: 10px 15px;
  }
`

const BookTitle = styled.h2`
  color: black;
  font-family: "VioletSans-Regular", sans-serif;
  font-size: 42px;
  margin: 0;
  letter-spacing: 2px;
  align-self: center;
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 28px;
    letter-spacing: 1px;
  }
`

const BookDetailsWrapper = styled.div`
  height: fit-content;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const BookDetail = styled.p`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 14px;
  line-height: 1.25;
  margin: 0;
  margin-bottom: 10px;
  text-align: right;

  &:first-of-type {
    margin-top: 10px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 1800px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`

const Symbol = styled.div`
  width: 25px;
  height: 25px;
  background-color: black;
`

const SymbolCircle = styled(Symbol)`
  border-radius: 100%;
`

const Book = ({ title, color, length, author, year, type }) => {
  return (
    <BookContainer color={color} length={length}>
      <BookTitle>{title}</BookTitle>
      <BookDetailsWrapper>
        {type === "fiction" ? <SymbolCircle></SymbolCircle> : <Symbol></Symbol>}
        <BookDetail>{author}</BookDetail>
        <BookDetail>{year}</BookDetail>
      </BookDetailsWrapper>
    </BookContainer>
  )
}

export default Book
