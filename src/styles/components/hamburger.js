import styled from '@emotion/styled'

const ham = {
  w: '50px',
  h: '50px',
}

const HamburgerWrapper = styled.div`
  position: relative;
  width: ${ham.w};
  height: ${ham.h};
  z-index: 1001;
  ${props => props.theme.minMedia.md`
   display: none;
  `}
`

const HamburgerButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0;
  margin: 0;
  outline: 0;
  width: ${ham.w};
  height: ${ham.h};
  transform: translate(-50%, -50%);
  span:nth-of-type(1) {
    margin-top: -10px;
  }
  &.is-active {
    span {
      background: ${props => props.theme.colors.white};
      transition: margin 0.2s ease-in, opacity 0s ease-in 0.2s,
        transform 0.2s ease-out 0.25s;
    }
    span:nth-of-type(1) {
      margin-top: -4px;
      transform: rotate(45deg);
    }
    span:nth-of-type(2) {
      margin-top: -4px;
      transform: rotate(-45deg);
    }
  }
`

const HamburgerBar = styled.span`
  background: ${props => props.theme.colors.text};
  display: block;
  position: absolute;
  left: 0;
  top: calc(50% + 4px);
  height: 2px;
  width: 28px;
  transform: rotate(0deg);
  transition: transform 0.2s ease-in 0s, margin 0.2s ease-in 0.2s,
    opacity 0s ease-in 0.25s;
  z-index: 1;
`

export { HamburgerWrapper, HamburgerButton, HamburgerBar }
