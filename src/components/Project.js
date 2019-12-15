import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, TimelineMax, Power0 } from "gsap"
import useWindowSize from "../hooks/useWindowSize"

import HXOUSEBanner from "../assets/HXOUSE.png"
import HXOUSEStory from "../assets/HXOUSE-story.png"
import HXOUSEPrograms from "../assets/HXOUSE-programs.png"
import HXOUSEEvents from "../assets/HXOUSE-events.png"
import HXOUSETenants from "../assets/HXOUSE-tenants.png"
import HXOUSEContact from "../assets/HXOUSE-contact.png"
import HXOUSEEventsDeep from "../assets/HXOUSE-events-deep.png"
import HXOUSETenantsDeep from "../assets/HXOUSE-tenants-deep.png"

import ALYXBanner from "../assets/ALYX.png"
import ALYXTilted from "../assets/ALYX-tilted.png"
import ALYXMobile1 from "../assets/ALYX-mobile-1.png"
import ALYXMobile2 from "../assets/ALYX-mobile-2.png"

import PIANOBanner from "../assets/PIANO-keys.png"
import PIANOKeysImage from "../assets/PIANO-keys-image.png"
import PIANORandom from "../assets/PIANO-random.png"
import PIANORandomImage from "../assets/PIANO-random-image.png"
import PIANONY from "../assets/PIANO-ny.png"
import PIANONYImage from "../assets/PIANO-ny-image.png"
import PIANOHands from "../assets/PIANO-hands.png"

import HOUSEKEEPERBanner from "../assets/HOUSEKEEPER-banner.png"
import HOUSEKEEPERLogin from "../assets/HOUSEKEEPER-login.png"
import HOUSEKEEPERSignup from "../assets/HOUSEKEEPER-signup.png"
import HOUSEKEEPERCreateTask from "../assets/HOUSEKEEPER-create-task.png"
import HOUSEKEEPEREditTask from "../assets/HOUSEKEEPER-edit-task.png"

import CUEBanner from "../assets/CUE-start.png"
import CUEListen from "../assets/CUE-listen.png"
import CUEReturn from "../assets/CUE-return.png"

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 50px 0;
`

const BannerImage = styled.img`
  width: 100%;
  margin-top: 40px;
  box-sizing: border-box;
  padding: 5px;
  border: 2px solid black;
`
const BannerDescContainer = styled.div`
  width: fit-content;
  margin: 20px 0 0 0;
  box-sizing: border-box;
  padding: 20px;
  border: 2px solid black;

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ContentTitle = styled.h1`
  font-family: "Roboto-Bold";
  color: black;
  font-size: 32px;
  margin: 50px 0 30px 0;
`

const ContentParagraph = styled.p`
  font-family: "Roboto-Regular";
  color: black;
  font-size: 16px;
  margin: 0 0 20px 0;
  line-height: 1.4;
`

const ContentLargeImage = styled.img`
  width: 100%;
  margin-top: 70px;
  box-sizing: border-box;
  padding: 5px;
  border: 2px solid black;
`

const ContentImageDescContainer = styled.div`
  width: 60%;
  margin: 20px 0 0 0;
  box-sizing: border-box;
  padding: 20px;
  border: 2px solid black;

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

const ContentImageSmall = styled.img`
  width: 47.5%;
  box-sizing: border-box;
  padding: 5px;
  border: 2px solid black;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`

const ContentEnd = styled.div`
  width: 100%;
  height: 120px;
`

const Project = ({ project }) => {
  // width and height of screen
  const { width, height } = useWindowSize()

  return (
    <>
      <Container id="projectContainer">
        {project === 1 && (
          <>
            <BannerContainer>
              <BannerImage src={HXOUSEBanner} />
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
              <ContentLargeImage src={HXOUSEStory} />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  A 3D scrolling experience through photographs describing
                  HXOUSE's story from start to now
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall src={HXOUSEPrograms} />
                <ContentImageSmall src={HXOUSEEvents} />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Rotating and floating cubes were a common theme on the site to
                  represent the structure of HXOUSE and create depth
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentLargeImage src={HXOUSETenants} />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  An example of a seperate 3D experience built solely for the
                  tenants page which interacts with the user's mouse
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall src={HXOUSEEventsDeep} />
                <ContentImageSmall src={HXOUSETenantsDeep} />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Content heavy sections of the new website
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentLargeImage src={HXOUSEContact} />
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
              <BannerImage src={ALYXBanner} />
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
              <ContentLargeImage src={ALYXTilted} />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  The tilt animation added onto the Alyx buckle image which
                  follows the user's cursor
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall src={ALYXMobile1} />
                <ContentImageSmall src={ALYXMobile2} />
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
              <BannerImage src={PIANOBanner} />
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
              <ContentLargeImage src={PIANOKeysImage} />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Piano keys drawn on a paper -- what the laptop sees before
                  determining the shapes and respective sounds
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall src={PIANORandomImage} />
                <ContentImageSmall src={PIANORandom} />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Random shapes drawn on paper and then scanned through the
                  laptop webcam
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentLargeImage src={PIANOHands} />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  User actually using the project to play a song using a piano
                  he drew
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall src={PIANONYImage} />
                <ContentImageSmall src={PIANONY} />
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
              <BannerImage src={HOUSEKEEPERBanner} />
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
                <ContentImageSmall src={HOUSEKEEPERLogin} />
                <ContentImageSmall src={HOUSEKEEPERSignup} />
              </ContentImageGallery>
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Login and signup screen for Housekeeper -- illustrations
                  adapted from unDraw
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentImageGallery>
                <ContentImageSmall src={HOUSEKEEPERCreateTask} />
                <ContentImageSmall src={HOUSEKEEPEREditTask} />
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
              <BannerImage src={CUEBanner} />
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
              <ContentLargeImage src={CUEListen} />
              <ContentImageDescContainer>
                <ContentImageDescText>
                  Cue screen when user speaks outloud
                </ContentImageDescText>
              </ContentImageDescContainer>
              <ContentLargeImage src={CUEReturn} />
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
