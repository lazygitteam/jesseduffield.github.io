import React from 'react'

import { Link } from 'gatsby'

import GitHubButton from 'react-github-btn'

export default () => (
  <div>
    <Link to="/about/">Contact</Link>
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
  </div>
)
