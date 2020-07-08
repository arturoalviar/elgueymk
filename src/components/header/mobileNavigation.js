import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useSpring, useTrail, animated, config } from 'react-spring'

import { navItems, isPartiallyActive } from './navigation'

import useBreakpoints from '@hooks/useBreakpoints'
import useDisableScroll from '@hooks/useDisableScroll'

import {
  MobileNavTransition,
  MobileNavItems,
  MobileNavItem,
} from '@styles/components/mobileNavigation'

const MobileNavigation = ({ location, isMobileMenuActive, toggleMenu }) => {
  const mobileNavTransitionProps = useSpring({
    transform: isMobileMenuActive ? 'translate(0, 0)' : 'translate(-100%, 0)',
    config: config.stiff,
  })

  const navItemsTrail = useTrail(navItems.length, {
    config: config.wobbly,
    opacity: isMobileMenuActive ? 1 : 0,
    y: isMobileMenuActive ? 0 : 30,
    from: { opacity: 0, y: 30 },
  })

  const MobileNavItemAnimated = animated(MobileNavItem)

  useBreakpoints({
    breakpoint: 'md',
    state: isMobileMenuActive,
    onResize: toggleMenu,
  })

  useDisableScroll(isMobileMenuActive)

  const currentURL = location.pathname ? location.pathname : ''

  return (
    <MobileNavTransition style={mobileNavTransitionProps}>
      <MobileNavItems className={currentURL === '/' ? 'is-home' : ''}>
        {navItemsTrail.map(({ y, ...rest }, index) => {
          const { to, label } = navItems[index]
          return (
            <MobileNavItemAnimated
              key={`mobile-nav-item-${index}`}
              style={{
                ...rest,
                transform: y.to(y => `translate3d(0,${y}px,0)`),
              }}
            >
              <Link to={to} getProps={isPartiallyActive}>
                {label}
              </Link>
            </MobileNavItemAnimated>
          )
        })}
      </MobileNavItems>
    </MobileNavTransition>
  )
}

MobileNavigation.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMobileMenuActive: PropTypes.bool.isRequired,
}

export default MobileNavigation
