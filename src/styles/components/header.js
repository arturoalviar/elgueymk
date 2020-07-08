import styled from '@emotion/styled'

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.header};
  position: relative;
  padding-top: ${props => props.theme.units.padding.sm};
  padding-bottom: ${props => props.theme.units.padding.sm};

  ${props => props.theme.maxMedia.md`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props.theme.units.header.mHeight};
    z-index: 9999;
  `}

  ${props => props.theme.minMedia.lg`
    padding: 0;
  `}
`

const LogoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: ${props => props.theme.remCalc(80)};

  a {
    display: block;
    padding-top: ${props => props.theme.remCalc(8)};
  }

  #logo {
    fill: currentColor;
    max-width: ${props => props.theme.remCalc(64)};
    width: 100%;
    &.is-active {
      fill: ${props => props.theme.colors.white};
    }
  }

  ${props => props.theme.maxMedia.md`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0;
    transform: translate(-50%, -50%);
    z-index: 9999;
  `};

  ${props => props.theme.minMedia.md`
    height: ${props.theme.remCalc(120)};
    width: 100%;
    a {
      padding-top: 0;
    }
    #logo {
      max-width: 120px;
    }
  `};
`

export { HeaderWrapper, LogoWrapper }
