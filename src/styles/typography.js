import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { minMedia } from '@styles/breakpoints'
import { remCalc } from '@styles/mixins'

const typographyStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: ${remCalc(28)};
    font-weight: bold;
    line-height: 1;
    margin-bottom: 0.45em;
    ${minMedia.sm`
      font-size: ${remCalc(38)};
    `};
    ${minMedia.md`
      font-size: ${remCalc(50)};
    `};
    ${minMedia.lg`
      font-size: ${remCalc(68)};
    `};
  }

  h2 {
    font-size: ${remCalc(24)};
    font-weight: normal;
    line-height: 1.2;
    margin-bottom: 0.5em;
    ${minMedia.sm`
      font-size: ${remCalc(28)};
    `};
    ${minMedia.md`
      font-size: ${remCalc(38)};
    `};
    ${minMedia.lg`
      font-size: ${remCalc(50)};
    `};
  }

  h3 {
    font-size: ${remCalc(20)};
    font-weight: normal;
    line-height: 1.3;
    margin-bottom: 0.45em;
    ${minMedia.sm`
      font-size: ${remCalc(24)};
    `};
    ${minMedia.md`
      font-size: ${remCalc(28)};
    `};
    ${minMedia.lg`
      font-size: ${remCalc(38)};
    `};
  }

  h4 {
    font-size: ${remCalc(18)};
    font-weight: normal;
    line-height: 1.4;
    margin-bottom: 0.65em;
    ${minMedia.sm`
      font-size: ${remCalc(20)};
    `};
    ${minMedia.md`
      font-size: ${remCalc(24)};
    `};
    ${minMedia.lg`
      font-size: ${remCalc(28)};
    `};
  }

  p {
    font-size: ${remCalc(16)};
    line-height: 1.625;
    margin-bottom: ${remCalc(16)};
    ${minMedia.md`
      font-size: ${remCalc(18)};
      margin-bottom: ${remCalc(18)};
    `};
    ${minMedia.lg`
      font-size: ${remCalc(20)};
      margin-bottom: ${remCalc(24)};
    `};
  }

  li {
    font-size: ${remCalc(16)};
    line-height: 1.625;
    margin-bottom: ${remCalc(16)};
    ${minMedia.md`
        font-size: ${remCalc(18)};
        margin-bottom: ${remCalc(18)};
      `};
    ${minMedia.lg`
        font-size: ${remCalc(20)};
        margin-bottom: ${remCalc(20)};
      `};
  }
`

const SectionHeading = styled.h2`
  font-size: ${remCalc(22)};
  font-weight: normal;
  line-height: 1;
  margin-bottom: ${remCalc(14)};
  position: relative;
  &::after {
    background: ${props => props.theme.colors.text};
    content: '';
    position: absolute;
    left: 0;
    bottom: -${remCalc(14)};
    width: 20px;
    height: 1px;
  }
  ${minMedia.md`
    font-size: ${remCalc(28)};
    margin-bottom: ${remCalc(20)};
    &::after {
      width: 32px;
      bottom: -${remCalc(21)};
    }
  `}
`

export default typographyStyles

export { SectionHeading }
