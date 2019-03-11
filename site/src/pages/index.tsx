import * as React from "react"
import { withState } from "recompose"

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
// import demoVid from "./demo_vid_1.webm"

import fastStagingVid from "./web_demo_fast_staging.webm"
import deletingVid from "./web_demo_deleting.webm"
import openPrVid from "./web_demo_pull_request.webm"
import lineStagingVid from "./web_demo_staging_by_lines.webm"
import amendVid from "./web_demo_amending.webm"
import ignoreVid from "./web_demo_ignore.webm"
import mergingVid from "./web_demo_merging.webm"
import rebasingVid from "./web_demo_rebasing_real.webm"
import interactiveRebaseVid from "./web_demo_interactive_rebasing.webm"
import cherryPickVid from "./web_demo_cherry_picking.webm"
import oldCommitsVid from "./web_demo_old_commit_files.webm"
import mouseVid from "./web_demo_clicks.webm"

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

const examples = [
  {
    bubbleText: "stage a file in a single keystroke",
    description: "",
    path: fastStagingVid,
  },
  {
    bubbleText: "get a file out of my way",
    description: "",
    path: deletingVid,
  },
  {
    bubbleText:
      "rebase onto master without stashing anything or leaving my current branch",
    description: "",
    path: rebasingVid,
  },
  {
    bubbleText: "open a pull request from my terminal",
    description: "",
    path: openPrVid,
  },
  {
    bubbleText: "stage a file line-by-line",
    description: "",
    path: lineStagingVid,
  },
  {
    bubbleText: "amend an old commit with new changes",
    description: "",
    path: amendVid,
  },
  {
    bubbleText: "ignore a file in one keystroke",
    description: "",
    path: ignoreVid,
  },
  { bubbleText: "resolve merge conflicts", description: "", path: mergingVid },
  {
    bubbleText: "interactive rebase without manually editing a TODO file",
    description: "",
    path: interactiveRebaseVid,
  },
  {
    bubbleText: "cherry pick commits from one branch to another",
    description: "",
    path: cherryPickVid,
  },
  {
    bubbleText: "checkout an old version of a file",
    description: "",
    path: oldCommitsVid,
  },
  {
    bubbleText: "stage and unstage files with my mouse",
    description: "",
    path: mouseVid,
  },
]

const LeftBubble = ({
  children,
  onClick,
  className,
  active,
}: {
  children: string
  className?: string
  onClick: () => void
  active?: boolean,
}) => (
  <div
    className={cx("bubble-left", "hvr-bubble-float-left", { active })}
    onClick={onClick}
  >
    <p className={cx("speech", className)}>{children}</p>
  </div>
)

const IndexPage = ({
  currentVid,
  setCurrentVid,
}: {
  currentVid: string
  setCurrentVid: (vid: string) => void,
}) => (
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
            {examples.map((example) => (
              <LeftBubble
                key={example.path}
                onClick={() => setCurrentVid(example.path)}
                active={currentVid === example.path}
              >
                {example.bubbleText}
              </LeftBubble>
            ))}
          </div>

          <div className="video-container">
            <Container className="image">
              <ReactPlayer
                url={currentVid}
                playing
                muted
                loop
                className="video"
                width={838}
                height={522}
              />
            </Container>
          </div>
        </div>

        <div>
          <Header as="h2">
            This website is a work in progress. Copyright 2019 Jesse Duffield
          </Header>
        </div>
      </Segment>
    </div>
  </div>
)

export default withState("currentVid", "setCurrentVid", fastStagingVid)(
  IndexPage,
)
