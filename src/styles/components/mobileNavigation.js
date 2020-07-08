import styled from '@emotion/styled'
import { animated } from 'react-spring'

const MobileNavTransition = styled(animated.div)`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`

const MobileNavItems = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  padding-top: ${props => props.theme.remCalc(80)};
  list-style: none;
  width: 100%;
  &.is-home {
    li a {
      color: currentColor;
    }
  }
`

const MobileNavItem = styled.li`
  font-size: ${props => props.theme.remCalc(20)};
  line-height: 2;
  text-transform: lowercase;
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: ${props => props.theme.remCalc(20)};
  }
  a {
    color: ${({ theme }) => theme.colors.lGray};
    display: block;
    position: relative;
    padding: ${props => props.theme.remCalc(18)} 0;
    padding-left: ${props => props.theme.remCalc(32)};
    &:after {
      background: ${({ theme }) => theme.colors.primary};
      content: '';
      display: block;
      position: absolute;
      bottom: 5px;
      left: ${props => props.theme.remCalc(32)};
      width: 1rem;
      height: 3px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &.is-current {
      color: currentColor;
      &:after {
        opacity: 1;
      }
    }
  }
`

export { MobileNavTransition, MobileNavItems, MobileNavItem }
