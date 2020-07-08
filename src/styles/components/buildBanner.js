import styled from '@emotion/styled'

const BuildBannerWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  position: relative;
  max-width: 2560px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  z-index: 1;
`

const BuildBannerImage = styled.div`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    display: block;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`

const BuildBannerContent = styled.div`
  margin-top: ${props => props.theme.remCalc(30)};
  width: 100%;
  z-index: 10;
  ${props => props.theme.minMedia.sm`
    position: absolute;
    left: 0;
    bottom: ${props.theme.units.padding.lg};
    margin: 0;
    h1 {
      color: ${props.theme.colors.white};
    }
  `};
  h1 {
    line-height: 1.2;
    margin: 0;
  }
`

export { BuildBannerImage, BuildBannerWrapper, BuildBannerContent }
