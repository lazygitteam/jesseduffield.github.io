import * as React from "react"
import { Link } from "gatsby"
import HeaderMenu from "../components/HeaderMenu/HeaderMenu"
import { withLayout, LayoutProps, menuItems } from "../components/Layout"
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react"

import demo1 from "data/images/demo1"

import GitHubButton from "react-github-btn"

const IndexPage = ({ location }: LayoutProps) => (
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={location.pathname}
        items={menuItems}
        inverted
      />
      <img src={demo1} />
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
        href="https://github.com/jesseduffield/lazygit/archive/master.zip"
        data-icon="octicon-cloud-download"
        data-size="large"
        aria-label="Download jesseduffield/lazygit on GitHub"
      >
        Download
      </GitHubButton>
      <Container text>
        <Header inverted as="h1">
          lazygit
        </Header>
        <Header inverted as="h2">
          A simple terminal UI for git, written in Go
        </Header>
        <Button primary size="huge">
          Get started!
        </Button>
        <script src="https://asciinema.org/a/14.js" id="asciicast-14" async />
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid
        columns="3"
        textAlign="center"
        divided
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard" />A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eaque at quae cupiditate aspernatur quibusdam! Distinctio quod
              non, harum dolorum earum molestias, beatae expedita aliquam
              dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard" />A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eaque at quae cupiditate aspernatur quibusdam! Distinctio quod
              non, harum dolorum earum molestias, beatae expedita aliquam
              dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard" />A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eaque at quae cupiditate aspernatur quibusdam! Distinctio quod
              non, harum dolorum earum molestias, beatae expedita aliquam
              dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
)

export default withLayout(IndexPage)
