import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import Footer from '@components/footer'

const Layout = ({ children }) => {
  const footerRef = useRef(null)

  useEffect(() => {
    const footerHeight = footerRef.current.offsetHeight
    document.body.style.paddingBottom = `${footerHeight}px`
  }, [])

  return (
    <div>
      <main>{children}</main>
      <Footer ref={footerRef} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
