import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Logo from './logo'
import Navigation from './navigation'
import MobileNavigation from './mobileNavigation'

import { HeaderWrapper } from '@styles/components/header'

const Header = ({ location }) => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

  function toggleMenu() {
    setIsMobileMenuActive(!isMobileMenuActive)
  }

  useEffect(() => {
    setIsMobileMenuActive(false)
  }, [location.key])

  return (
    <StaticQuery
      query={`${headerQuery}`}
      render={data => {
        const { title } = data.site.siteMetadata

        return (
          <HeaderWrapper>
            <Navigation
              location={location}
              isMobileMenuActive={isMobileMenuActive}
              toggleMenu={toggleMenu}
            />
            <Logo title={title} isMobileMenuActive={isMobileMenuActive} />
            <MobileNavigation
              location={location}
              isMobileMenuActive={isMobileMenuActive}
              toggleMenu={toggleMenu}
            />
          </HeaderWrapper>
        )
      }}
    ></StaticQuery>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
}

const headerQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Header
