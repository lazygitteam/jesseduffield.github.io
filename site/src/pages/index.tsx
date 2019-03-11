import * as React from "react"

import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react"

import cx from "classnames"

import demo from "./demo.png"
import demoRetina from "./demo@2x.png"
import demoVid from "./demo_vid_1.webm"

import RetinaImage from "react-retina-image"
import ReactPlayer from "react-player"

// import GitHubButton from "react-github-btn"
import { text } from "@storybook/addon-knobs"

const GithubButtons = () => (
  <Header className="banner">
    {/* <GitHubButton
      href="https://github.com/jesseduffield/lazygit"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star jesseduffield/lazygit on GitHub"
    >
      Star
    </GitHubButton>
    <GitHubButton
      href="https://github.com/jesseduffield"
      data-size="large"
      data-show-count="true"
      aria-label="Follow @jesseduffield on GitHub"
    >
      Follow @jesseduffield
    </GitHubButton>
    <GitHubButton
      href="https://github.com/jesseduffield/lazygit/releases"
      data-icon="octicon-cloud-download"
      data-size="large"
      aria-label="Download jesseduffield/lazygit on GitHub"
    >
      Download
    </GitHubButton> */}
  </Header>
)

const LeftBubble = ({ children }: { children: string }) => (
  <div className="bubble-left">
    <p className="speech">{children}</p>
  </div>
)

const IndexPage = () => (
  <div className="background">
    <div className="container">
      <Segment>
        <GithubButtons />

        <div>
          <Header as="h1">lazygit</Header>
        </div>
        <div>
          <Header as="h2">A simple terminal UI for git, written in Go</Header>
        </div>
        <Container className="image">
          <RetinaImage src={[demo, demoRetina]} />
        </Container>

        <div className="bubble">
          <p className="speech big">I want to...</p>
        </div>

        <div className="use-case-container">
          <div className="bubble-container">
            <LeftBubble>stage a file in a single keystroke</LeftBubble>
            <LeftBubble>get a file out of my way</LeftBubble>
            <LeftBubble>
              rebase onto master without stashing anything or leaving my current
              branch
            </LeftBubble>
            <LeftBubble>open a pull request from my terminal</LeftBubble>
            <LeftBubble>stage a file line-by-line</LeftBubble>
            <LeftBubble>amend an old commit with new changes</LeftBubble>
            <LeftBubble>ignore a file in one keystroke</LeftBubble>
            <LeftBubble>resolve merge conflicts</LeftBubble>
            <LeftBubble>
              interactive rebase without manually editing a TODO file
            </LeftBubble>
            <LeftBubble>
              cherry pick commits from one branch to another
            </LeftBubble>
            <LeftBubble>checkout an old version of a file</LeftBubble>
          </div>

          <div className="video-container">
            <Container className="image">
              <ReactPlayer
                url={demoVid}
                playing
                muted
                loop
                className="video"
                width={null}
                height={null}
              />
            </Container>
          </div>
        </div>

        <div>
          <Header as="h2">blah</Header>
        </div>
      </Segment>
    </div>
  </div>
)

export default IndexPage
