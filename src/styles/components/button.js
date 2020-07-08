import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import theme from '@styles/theme'
import { remCalc } from '@styles/mixins'

const defaultButtonStyles = css`
  display: inline-flex;
  font-size: ${remCalc(16)};
  font-family: 'Karla', sans-serif;
  font-weight: bold;
  justify-content: center;
  align-self: center;
  min-width: ${remCalc(130)};
  padding: ${remCalc(12)} ${remCalc(18)};
  text-align: center;
  text-transform: lowercase;
`

const iconButtonStyles = props => {
  if (props.hasIcon) {
    return css`
      position: relative;
      padding-right: ${remCalc(24)};
      svg,
      .button-icon {
        fill: currentColor;
        position: absolute;
        top: 50%;
        right: 0;
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease-in-out;
        transform: translate3d(0, -50%, 0);
      }
      &:hover {
        svg {
          transform: translate3d(10px, -50%, 0);
        }
      }
    `
  }
}

const primaryButtonStyles = css`
  background: ${theme.colors.primary};
  border-radius: 0.35em;
  color: ${theme.colors.white};
  transition: background 0.3s ease-in-out;
  &:hover {
    background: ${theme.colors.primaryHover};
  }
`

const textButtonStyles = css`
  color: ${theme.colors.primary};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: currentColor;
  }
`

const typeButtonStyles = props => {
  switch (props.type) {
    case 'text':
      return textButtonStyles
    default:
      return primaryButtonStyles
  }
}

const ButtonA = styled.a`
  ${defaultButtonStyles}
  ${typeButtonStyles}
  ${iconButtonStyles}
`

// eslint-disable-next-line
const ButtonLink = styled(({ type, hasIcon, ...props }) => <Link {...props} />)`
  ${defaultButtonStyles}
  ${typeButtonStyles}
  ${iconButtonStyles}
`

export { ButtonA, ButtonLink }
