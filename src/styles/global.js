import { css } from '@emotion/core'

import typographyStyles from '@styles/typography'

const globalStyles = theme => css`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.text};
    font-family: 'Lora', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
      Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  main {
    background: ${theme.colors.bg};
    position: relative;
    padding-bottom: ${theme.units.padding.lg};
    margin-top: ${theme.units.header.mHeight};
    z-index: 2;
    ${theme.minMedia.md`
      margin-top: 0;
    `}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ${typographyStyles}
`

export default globalStyles
