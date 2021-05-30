import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Book from "../components/book"
import SEO from "../components/seo"

const listOfBooks = [
  {
    title: "A life on our planet",
    author: "David Attenborough",
    year: "2020",
    length: 272,
    type: "non-fiction",
    color: "#56CCF2",
  },
  {
    title: "A Tree Grows in Brooklyn",
    author: "Betty Smith",
    year: "1943",
    length: 496,
    type: "fiction",
    color: "#BB6BD9",
  },
  {
    title: "Being Mortal",
    author: "Atul Gawande",
    year: "2014",
    length: 282,
    type: "non-fiction",
    color: "#EB5757",
  },
  {
    title: "Broad Band",
    author: "Claire L. Evans",
    year: "2018",
    length: 288,
    type: "non-fiction",
    color: "#27AE60",
  },
  {
    title: "Interpreter of Maladies",
    author: "Jhumpa Lahiri",
    year: "1999",
    length: 198,
    type: "fiction",
    color: "#F2C94C",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: "2011",
    length: 512,
    type: "non-fiction",
    color: "#6FCF97",
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    year: "2011",
    length: 627,
    type: "non-fiction",
    color: "#E0E0E0",
  },
  {
    title: "Moneyball",
    author: "Michael Lewis",
    year: "2003",
    length: 317,
    type: "non-fiction",
    color: "#2F80ED",
  },
  {
    title: "The art of gathering",
    author: "Priya Parker",
    year: "2018",
    length: 320,
    type: "non-fiction",
    color: "#9B51E0",
  },
  {
    title: "Greenlights",
    author: "Matthew McConaughey",
    year: "2020",
    length: 308,
    type: "non-fiction",
    color: "#27AE60",
  },
  {
    title: "Shoe Dog",
    author: "Phil Knight",
    year: "2016",
    length: 400,
    type: "non-fiction",
    color: "#F2994A",
  },
  {
    title: "Family Trust",
    author: "Kathy Wang",
    year: "2018",
    length: 387,
    type: "fiction",
    color: "#EB5757",
  },
  {
    title: "The Emperor of All Maladies",
    author: "Siddhartha Mukherjee",
    year: "2010",
    length: 571,
    type: "non-fiction",
    color: "#56CCF2",
  },
  {
    title: "Breathe",
    author: "James Nestor",
    year: "2020",
    length: 214,
    type: "non-fiction",
    color: "#F2C94C",
  },
]

const Header = styled.header`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 50px 0 0 30px;
  background: linear-gradient(180deg, #eb5757 0%, rgba(250, 250, 250, 50) 70%);

  @media (max-width: 500px) {
    height: fit-content;
    padding: 20px 0 0 15px;
  }
`

const Name = styled.h1`
  color: black;
  font-family: "VioletSans-Regular", sans-serif;
  font-size: 42px;
  margin: 0;
  letter-spacing: 2px;

  @media (max-width: 500px) {
    font-size: 28px;
    letter-spacing: 1px;
  }
`

const Main = styled.main`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding: 0 30px 0 30px;

  @media (min-width: 1800px) {
    max-width: 950px;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }

  @media (max-width: 500px) {
    padding: 0 15px 0 15px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`

const Content = styled.p`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 20px;
  line-height: 1.25;
  margin: 0 0 30px 0;
  width: 100%;

  @media (min-width: 1800px) {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  &:last-child {
    margin: 0;
  }
`

const InlineLink = styled(Link)`
  color: #b71c1c;
  text-decoration: underline;
`

const ExternalLink = styled.a`
  color: #b71c1c;
  text-decoration: underline;
`

const Region = styled.div`
  display: flex;
  flex-direction: column;
`

const TextLabel = styled.p`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 20px;
  line-height: 1.25;
  margin: 0 0 20px 0;
  width: 100%;

  @media (min-width: 1800px) {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`

const SymbolLabelWrapper = styled.div`
  display: flex;
  align-items: center;
`

const SymbolLabel = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
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

const SymbolText = styled.p`
  color: black;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 20px;
  line-height: 1.25;
  margin: 0;
  margin-left: 10px;

  @media (min-width: 1800px) {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
`
const BooksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  box-sizing: border-box;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 40px 15px;
  }
`

const Books = () => {
  return (
    <>
      <SEO title="Good Books by Udit" />
      <Header>
        <Name>GOOD BOOKS</Name>
      </Header>
      <Main>
        <Content>
          <InlineLink to="/">By Udit</InlineLink>
        </Content>
        <Content>
          A list of books I enjoyed reading and would recommend to others. It’s
          a mix of fiction and non-fiction in no particular order, and labelled
          based on the following:
        </Content>
        <Region>
          <TextLabel>Length: Height</TextLabel>
          <SymbolLabelWrapper>
            <SymbolLabel>
              <Symbol></Symbol>
              <SymbolText>Non-fiction</SymbolText>
            </SymbolLabel>
            <SymbolLabel>
              <SymbolCircle></SymbolCircle>
              <SymbolText>Fiction</SymbolText>
            </SymbolLabel>
          </SymbolLabelWrapper>
        </Region>
      </Main>
      <BooksWrapper>
        {listOfBooks.map(book => {
          return (
            <Book
              key={book.title}
              title={book.title}
              color={book.color}
              year={book.year}
              author={book.author}
              type={book.type}
              length={book.length}
            />
          )
        })}
      </BooksWrapper>
      <Footer>
        <Content>Last updated: May 30, 2021</Content>
        <Content>
          Design inspired by{" "}
          <ExternalLink
            href="https://readymag.com/repponen/designbooks/books/"
            target="_blank"
            rel="noreferrer"
          >
            readymag
          </ExternalLink>
        </Content>
        <Content>
          <InlineLink to="/">Back to Udit</InlineLink>
        </Content>
      </Footer>
    </>
  )
}

export default Books
