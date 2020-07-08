import { css } from '@emotion/core'
import styled from '@emotion/styled'

const SocialIcons = styled.ul`
  display: flex;
  flex-flow: row;
  align-items: center;
  margin: 0;
  padding: 0;
  li {
    display: inline-flex;
    padding: 0;
    margin: 0;
    line-height: 1;
    ${props => {
      if (props.size === 'large') {
        return css`
          font-size: ${props.theme.remCalc(24)};
        `
      }
    }};
    a {
      padding: ${props => props.theme.units.padding.sm};
    }
  }
`

export { SocialIcons }
