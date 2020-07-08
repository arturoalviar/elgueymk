import React from 'react'
import PropTypes from 'prop-types'

import { ContainerWrapper } from '@styles/pages/layout'

const Container = ({ className, size, children }) => {
  return (
    <ContainerWrapper size={size} className={`emk-container ${className}`}>
      {children}
    </ContainerWrapper>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'lg', 'xl']),
}

Container.defaultProps = {
  className: '',
  size: 'default',
}

export default Container
