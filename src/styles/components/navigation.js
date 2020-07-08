import styled from '@emotion/styled'
import { ContainerWrapper } from '@styles/pages/layout'

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  ${props => props.theme.minMedia.md`
    height: 60px;
  `}
`

const NavContainer = styled(ContainerWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  ${props => props.theme.minMedia.md`
    justify-content: center;
  `}

  .theme-controller-wrapper {
    position: absolute;
    top: 50%;
    right: ${props => props.theme.remCalc(18)};
    transform: translateY(-50%);
  }
`

const NavItems = styled.ul`
  display: none;
  margin: 0;
  padding: 0;
  ${props => props.theme.minMedia.md`
    display: flex;
    align-items: center;
  `};
  &.is-home {
    li a {
      color: currentColor;
    }
  }
`

const NavItem = styled.li`
  display: inline-flex;
  font-size: ${props => props.theme.remCalc(14)};
  font-weight: bold;
  margin: 0;
  margin-left: -1rem;
  text-transform: lowercase;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
  a {
    padding: 0.85rem;
    transition: color 0.2s ease;
  }
  ${props => props.theme.minMedia.sm`
    font-size: 1rem;
    a {
      color: ${props.theme.colors.lGray};
      position: relative;
      padding: 1rem;
      &:after {
        background: ${props.theme.colors.primary};
        border-radius: .35rem;
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        bottom: 6px;
        opacity: 0;
        width: 1rem;
        height: 3px;
        transform: translateX(-50%);
        transition: opacity .2s ease;
      }
      &.is-current {
        color: ${props.theme.colors.text};
        &:after {
          opacity: 1;
        }
      }
      &:hover {
        color: currentColor;
      }
    }
  `}
`

export { NavBar, NavContainer, NavItems, NavItem }
