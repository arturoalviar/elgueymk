import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { TagWrapper } from '@styles/components/tags'

const Tag = ({ label, children }) => {
  return (
    <TagWrapper>
      <Link to={`/tags/${label}`}>{children}</Link>
    </TagWrapper>
  )
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Tag
