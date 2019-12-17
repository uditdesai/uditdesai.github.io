import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.div`
  width: calc(100% - 350px - 150px);
  margin: 0 0 0 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    width: calc(100% - 40px);
    margin: 50px 0 0 0;
    padding: 0 20px 0 20px;
  }
`

const BannerContainer = styled.div`
  width: 80%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 50px 0;
`

const BannerImage = styled(Img)`
  width: 100%;
  margin-top: 40px;
  box-sizing: border-box;
  border: 3px solid black;
`
const BannerDescContainer = styled.div`
  width: fit-content;
  margin: 20px 0 0 0;
  box-sizing: border-box;
  padding: 20px;
  border: 3px solid black;

  @media (max-width: 800px) {
    width: 100%;
  }
`

const BannerDescTitle = styled.h1`
  font-family: "Roboto-Bold";
  color: black;
  font-size: 24px;
  margin: 0 0 20px 0;
`
const BannerDescSubTitle = styled.p`
  font-family: "Roboto-Bold";
  color: black;
  font-size: 14px;
  margin: 0 0 10px 0;
`
const BannerDescLink = styled.a`
  text-decoration: none;
  font-family: "Roboto-Bold";
  color: black;
  font-size: 14px;
  margin: 0 0 10px 0;
`
const BannerDescSemiTitle = styled.p`
  font-family: "Roboto-Bold";
  color: black;
  font-size: 12px;
  margin: 20px 0 0 0;
`

const ContentContainer = styled.div`
  width: 80%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ContentParagraph = styled.p`
  font-family: "Roboto-Regular";
  color: black;
  font-size: 16px;
  margin: 0 0 20px 0;
  line-height: 1.4;
`

const ContentLargeImage = styled(Img)`
  width: 100%;
  margin-top: 70px;
  box-sizing: border-box;
  border: 3px solid black;
`

const ContentImageDescContainer = styled.div`
  width: 60%;
  margin: 20px 0 0 0;
  box-sizing: border-box;
  padding: 20px;
  border: 3px solid black;

  @media (max-width: 800px) {
    width: 100%;
  }
`

const ContentImageDescText = styled.p`
  font-family: "Roboto-Bold";
  color: black;
  font-size: 14px;
  margin: 0 0 0 0;
`

const ContentImageGallery = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px 0 0 0;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const ContentImageSmall = styled(Img)`
  width: 47.5%;
  box-sizing: border-box;
  border: 3px solid black;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`

const ContentEnd = styled.div`
  width: 100%;
  height: 120px;
`

const Project = ({ project, data }) => {
  return (
    <>
      <Container id="projectContainer">
        {project === 1 && (
          <>
            <BannerContainer>
              <BannerImage fluid={data.hxousebanner.childImageSharp.fluid} />
              <BannerDescContainer>
                <BannerDescTitle>HXOUSE Website, 2019</BannerDescTitle>
                <BannerDescSubTitle>
                  Role: Design + Development
                </BannerDescSubTitle>
                <BannerDescLink href="https://www.hxouse.com" target="_blank">
                  Link: hxouse.com
                </BannerDescLink>
                <BannerDescSemiTitle>
                  Digital web experience
                </BannerDescSemiTitle>
              </BannerDescContainer>
            </BannerContainer>
            <ContentContainer>
              <ContentParagraph>
                HXOUSE is a Toronto-based, globally focused think-center.
                Serving its community as an incubator and accelerator, it helps
                to foster innovation and opportunity for creative entrepreneurs.
              </ContentParagraph>
              <ContentParagraph>
                It was founded by La Mar Taylor, the creative director behind
                The Weeknd and XO. He wanted to build a place for Toronto
                creatives to grow, create, and collaborate within Toronto, a
                place that wasn't available to him when he was starting his
                career.
              </ContentParagraph>
              <ContentLargeImage
                fluid={data.hxousestory.childImageSharp.fluid}
              />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  A 3D scrolling experience through photographs describing
                  HXOUSE's story from start to now
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall
                  fluid={data.hxouseprograms.childImageSharp.fluid}
                />
                <ContentImageSmall
                  fluid={data.hxouseevents.childImageSharp.fluid}
                />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Rotating and floating cubes were a common theme on the site to
                  represent the structure of HXOUSE and create depth
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentLargeImage
                fluid={data.hxousetenants.childImageSharp.fluid}
              />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  An example of a seperate 3D experience built solely for the
                  tenants page which interacts with the user's mouse
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall
                  fluid={data.hxouseeventsdeep.childImageSharp.fluid}
                />
                <ContentImageSmall
                  fluid={data.hxousetenantsdeep.childImageSharp.fluid}
                />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Content heavy sections of the new website
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentLargeImage
                fluid={data.hxousecontact.childImageSharp.fluid}
              />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Even the contact page was given a 3D environment making the
                  user feel as if they are within a cube on scroll
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentEnd></ContentEnd>
            </ContentContainer>
          </>
        )}
        {project === 2 && (
          <>
            <BannerContainer>
              <BannerImage fluid={data.alyxbanner.childImageSharp.fluid} />
              <BannerDescContainer>
                <BannerDescTitle>
                  Alyx x HXOUSE Growing Family Website, 2019
                </BannerDescTitle>
                <BannerDescSubTitle>Role: Development</BannerDescSubTitle>
                <BannerDescLink
                  href="https://www.alyx.hxouse.com"
                  target="_blank"
                >
                  Link: alyx.hxouse.com
                </BannerDescLink>
                <BannerDescSemiTitle>
                  Digital web experience
                </BannerDescSemiTitle>
              </BannerDescContainer>
            </BannerContainer>
            <ContentContainer>
              <ContentParagraph>
                HXOUSE partnered with Alyx to host the first-ever fashion and
                sustainability conference in Toronto. This was groundbreaking
                for Toronto and fashion in general because Toronto has never had
                to oppurtunity to learn from an acclaimed fashion house the
                caliber of Alyx and fashion houses have never opened up about
                their practices before.
              </ContentParagraph>
              <ContentParagraph>
                The conference named Growing Family was a huge success and held
                panels and workshops with industry leaders in fashion, film and
                design such as Matthew Williams, Nick Knight, and OK-RM.
              </ContentParagraph>
              <ContentLargeImage
                fluid={data.alyxtilted.childImageSharp.fluid}
              />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  The tilt animation added onto the Alyx buckle image which
                  follows the user's cursor
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall
                  fluid={data.alyxmobile1.childImageSharp.fluid}
                />
                <ContentImageSmall
                  fluid={data.alyxmobile2.childImageSharp.fluid}
                />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Adapted mobile design for the website
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentEnd></ContentEnd>
            </ContentContainer>
          </>
        )}
        {project === 3 && (
          <>
            <BannerContainer>
              <BannerImage fluid={data.ppkeys.childImageSharp.fluid} />
              <BannerDescContainer>
                <BannerDescTitle>Paper Piano, 2019</BannerDescTitle>
                <BannerDescSubTitle>
                  Role: Ideation + Development
                </BannerDescSubTitle>
                <BannerDescLink
                  href="https://devpost.com/software/paper-piano-8yzaw9"
                  target="_blank"
                >
                  Link: Devpost
                </BannerDescLink>
                <BannerDescSemiTitle>
                  Computer vision hackathon project
                </BannerDescSemiTitle>
              </BannerDescContainer>
            </BannerContainer>
            <ContentContainer>
              <ContentParagraph>
                Paper Piano is an easy and zero-cost way to play instruments
                using just paper, yourself, and a laptop with a webcam. Draw
                shapes and assign different sounds to different shapes. Play
                music by tapping these shapes. Create a piano by drawing thin
                rectangles or a drumkit by drawing circles. Create your own DJ
                soundboard using the full paper.
              </ContentParagraph>
              <ContentParagraph>
                The project was created for Hack the North 2019 and won the
                hacker's choice prize. I wanted to create a project that was
                both solving some type of problem (expensive instruments) and
                that was fun and incorporated music.
              </ContentParagraph>
              <ContentLargeImage
                fluid={data.ppkeysimage.childImageSharp.fluid}
              />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Piano keys drawn on a paper -- what the laptop sees before
                  determining the shapes and respective sounds
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall
                  fluid={data.pprandomimage.childImageSharp.fluid}
                />
                <ContentImageSmall
                  fluid={data.pprandom.childImageSharp.fluid}
                />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Random shapes drawn on paper and then scanned through the
                  laptop webcam
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentLargeImage fluid={data.pphands.childImageSharp.fluid} />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  User actually using the project to play a song using a piano
                  he drew
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall
                  fluid={data.ppnyimage.childImageSharp.fluid}
                />
                <ContentImageSmall fluid={data.ppny.childImageSharp.fluid} />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  The algorithm thinking the Yankees logo is a circle --
                  algorithm clearly was not perfect but it works
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentEnd></ContentEnd>
            </ContentContainer>
          </>
        )}
        {project === 4 && (
          <>
            <BannerContainer>
              <BannerImage fluid={data.hkbanner.childImageSharp.fluid} />
              <BannerDescContainer>
                <BannerDescTitle>Housekeeper, 2019</BannerDescTitle>
                <BannerDescSubTitle>
                  Role: Design + Development
                </BannerDescSubTitle>
                <BannerDescLink
                  href="https://github.com/uditdesai/housekeeper"
                  target="_blank"
                >
                  Link: Github Repository
                </BannerDescLink>
                <BannerDescSemiTitle>
                  Full-stack personal project
                </BannerDescSemiTitle>
              </BannerDescContainer>
            </BannerContainer>
            <ContentContainer>
              <ContentParagraph>
                Housekeeper is a kanban board for a student household. It allows
                housemates within a house to create tasks that need to be
                completed, assign tasks to themselves, and keep track of what
                chores are left to be completed.
              </ContentParagraph>
              <ContentImageGallery>
                <ContentImageSmall fluid={data.hklogin.childImageSharp.fluid} />
                <ContentImageSmall
                  fluid={data.hksignup.childImageSharp.fluid}
                />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Login and signup screen for Housekeeper -- illustrations
                  adapted from unDraw
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall
                  fluid={data.hkcreatetask.childImageSharp.fluid}
                />
                <ContentImageSmall
                  fluid={data.hkedittask.childImageSharp.fluid}
                />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Modals for creating a new task and viewing a created task
                  where the user can assign it to themselves, delete it or
                  complete it
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentEnd></ContentEnd>
            </ContentContainer>
          </>
        )}
        {project === 5 && (
          <>
            <BannerContainer>
              <BannerImage fluid={data.cuestart.childImageSharp.fluid} />
              <BannerDescContainer>
                <BannerDescTitle>Cue, 2019</BannerDescTitle>
                <BannerDescSubTitle>
                  Role: Design + Development
                </BannerDescSubTitle>
                <BannerDescLink
                  href="https://devpost.com/software/cue-doisjy"
                  target="_blank"
                >
                  Link: Devpost
                </BannerDescLink>
                <BannerDescSemiTitle>
                  Full-stack hackathon project
                </BannerDescSemiTitle>
              </BannerDescContainer>
            </BannerContainer>
            <ContentContainer>
              <ContentParagraph>
                Cue is an online tool for learning new languages or overcoming
                learning disabilities. It transcribes what a user reads outloud
                and prints it on the user's screen with visual cues and
                color-coded key words to help users understand what they read.
              </ContentParagraph>
              <ContentParagraph>
                It was built for MHacks 2019 where the theme was social good.
              </ContentParagraph>
              <ContentLargeImage fluid={data.cuelisten.childImageSharp.fluid} />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Cue screen when user speaks outloud
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentLargeImage fluid={data.cuereturn.childImageSharp.fluid} />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Transcribed speech onto the screen color-coded with visual
                  cues
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentEnd></ContentEnd>
            </ContentContainer>
          </>
        )}
      </Container>
    </>
  )
}

export default Project
