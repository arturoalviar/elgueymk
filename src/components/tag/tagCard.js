import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import TagIcon from './tagIcon'

import { TagCardWrapper } from '@styles/components/tagCard'

const TagCard = ({ icon, count, label }) => {
  return (
    <Link to={`/tags/${label}`} aria-label={`page for tag: ${label}`}>
      <TagCardWrapper>
        <TagIcon icon={icon} size="sm" />
        {label} ({count})
      </TagCardWrapper>
    </Link>
  )
}

TagCard.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.object,
  label: PropTypes.string.isRequired,
}

TagCard.defaultProps = {
  icon: {},
}

export default TagCard
