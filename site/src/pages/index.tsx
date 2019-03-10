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

import GitHubButton from "react-github-btn"

const GithubButtons = () => (
  <Header className="banner">
    <GitHubButton
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
    </GitHubButton>
  </Header>
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
        <div>
          <Header as="h2">blah</Header>
        </div>
      </Segment>
    </div>
  </div>
)

export default IndexPage
