import React from 'react'
import PropTypes from 'prop-types'

import { ButtonA, ButtonLink } from '@styles/components/button'

const Button = ({ to, className, children, hasIcon, type, linksOut }) => {
  if (linksOut) {
    // use a tag for external links
    return (
      <ButtonA
        className={className}
        href={to}
        target={linksOut ? '_blank' : ''}
        rel={linksOut ? 'noopener nofoloow' : ''}
        type={type}
        hasIcon={hasIcon}
      >
        {children}
      </ButtonA>
    )
  }
  // use gatsby link for internal links
  return (
    <ButtonLink className={className} to={to} type={type} hasIcon={hasIcon}>
      {children}
    </ButtonLink>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  linksOut: PropTypes.bool,
  hasIcon: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'text']),
}

Button.defaultProps = {
  linksOut: false,
  hasIcon: false,
  type: 'default',
}

export default Button
