import styled from '@emotion/styled'

const TagBannerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${({ theme }) => theme.remCalc(120)};
  position: relative;
  margin-bottom: ${({ theme }) => theme.units.padding.lg};
  width: 100%;
  ${({ theme }) => theme.minMedia.lg`
    height: ${theme.remCalc(200)};
    margin-bottom: ${theme.units.padding.xl};
  `};
  .emk-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  h2 {
    font-weight: bold;
    line-height: 1;
    margin: 0;
  }
`

const TagBannerHeading = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 70px;
  height: 48px;
  ${props => props.theme.minMedia.md`
    padding-left: 100px;
    height: 64px;
  `};
`

const TagBannerIconWrapper = styled.div`
  border-radius: 50%;
  ${props => {
    if (props.color && props.image) {
      return `
        background-color: ${props.color};
        background-image: url(${props.image.publicURL});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      `
    }
    if (props.color) {
      return `background-color: ${props.color}`
    }
    if (props.image) {
      return `
        background-image: url(${props.image.publicURL});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      `
    } else {
      return `background-color: ${props.theme.colors.white}`
    }
  }};
  position: absolute;
  top: 50%;
  left: 0;
  width: 48px;
  height: 48px;
  transform: translateY(-50%);
  .default-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    stroke: ${props => props.theme.colors.black};
  }
  ${props => props.theme.minMedia.md`
    width: 64px;
    height: 64px;
    .default-icon {
      width: 32px;
      height: 32px;
    }
  `};
`

export { TagBannerWrapper, TagBannerHeading, TagBannerIconWrapper }
