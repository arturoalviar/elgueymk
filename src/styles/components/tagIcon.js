import { css } from '@emotion/core'
import styled from '@emotion/styled'

const sizes = {
  sm: {
    sm: 24,
    lg: 36,
  },
  lg: {
    sm: 48,
    lg: 64,
  },
  defaultIcon: {
    sm: {
      sm: 16,
      lg: 16,
    },
    lg: {
      sm: 24,
      lg: 36,
    },
  },
}

const setDefaultIconSizes = ({ theme, size }) => {
  return css`
    .default-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      stroke: ${theme.colors.black};
      width: ${theme.remCalc(sizes.defaultIcon[size].sm)};
      height: ${theme.remCalc(sizes.defaultIcon[size].sm)};
      ${theme.minMedia.md`
      width: ${theme.remCalc(sizes.defaultIcon[size].lg)};
      height: ${theme.remCalc(sizes.defaultIcon[size].lg)};
    `};
    }
  `
}

const setSizes = ({ theme, size }) => {
  return css`
    width: ${theme.remCalc(sizes[size].sm)};
    height: ${theme.remCalc(sizes[size].sm)};
    ${theme.minMedia.md`
      width: ${theme.remCalc(sizes[size].lg)};
      height: ${theme.remCalc(sizes[size].lg)};
    `};
  `
}

const TagBannerIconWrapper = styled.div`
  ${({ color, image, theme }) => {
    if (color && image) {
      return `
        background-color: ${color};
        background-image: url(${image.publicURL});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      `
    }
    if (color) {
      return `background-color: ${color}`
    }
    if (image) {
      return `
        background-image: url(${image.publicURL});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      `
    } else {
      return `background-color: ${theme.colors.white}`
    }
  }};

  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  ${props => setSizes(props)};
  ${props => !props.image && setDefaultIconSizes(props)};
`

export { TagBannerIconWrapper }
