import React from 'react'
import PropTypes from 'prop-types'

import {
  HamburgerWrapper,
  HamburgerButton,
  HamburgerBar,
} from '@styles/components/hamburger'

const Hamburger = ({ isMobileMenuActive, toggleMenu }) => {
  const currentClass = isMobileMenuActive ? 'is-active' : ''

  function handleClick(event) {
    event.preventDefault()
    toggleMenu()
  }

  return (
    <HamburgerWrapper className={currentClass}>
      <HamburgerButton className={currentClass} onClick={handleClick}>
        <HamburgerBar />
        <HamburgerBar />
      </HamburgerButton>
    </HamburgerWrapper>
  )
}

Hamburger.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMobileMenuActive: PropTypes.bool.isRequired,
}

export default Hamburger
