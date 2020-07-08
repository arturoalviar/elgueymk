import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Hamburger from './hamburger'
import ThemeController from '@components/themeController'

import {
  NavBar,
  NavContainer,
  NavItems,
  NavItem,
} from '@styles/components/navigation'

const navItems = [
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/builds',
    label: 'Builds',
  },
  {
    to: '/keyboards',
    label: 'Keyboards',
  },
  {
    to: '/keycap-sets',
    label: 'Keycaps',
  },
  {
    to: '/tags',
    label: 'Tags',
  },
]

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: 'is-current' } : {}
}

const Navigation = ({ location, isMobileMenuActive, toggleMenu }) => {
  const currentURL = location.pathname ? location.pathname : ''

  return (
    <NavBar>
      <NavContainer>
        <NavItems className={currentURL === '/' ? 'is-home' : ''}>
          {navItems.map((item, index) => (
            <NavItem key={`nav-item-${index}`}>
              <Link to={item.to} getProps={isPartiallyActive}>
                {item.label}
              </Link>
            </NavItem>
          ))}
        </NavItems>
        <Hamburger
          isMobileMenuActive={isMobileMenuActive}
          toggleMenu={toggleMenu}
        />
        <ThemeController />
      </NavContainer>
    </NavBar>
  )
}

Navigation.propTypes = {
  isMobileMenuActive: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export { navItems, isPartiallyActive }
export default Navigation
