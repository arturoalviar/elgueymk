import React from 'react'
import PropTypes from 'prop-types'
import { FiHash } from 'react-icons/fi'

import { TagBannerIconWrapper } from '@styles/components/tagIcon'

const renderDefaultIcon = icon => {
  if (!icon.imageSharp) {
    return <FiHash className="default-icon" />
  }
}

const TagIcon = ({ icon, size }) => {
  return (
    <TagBannerIconWrapper
      className="emk-tag-icon"
      color={icon.color}
      image={icon.imageSharp}
      size={size}
    >
      {renderDefaultIcon(icon)}
    </TagBannerIconWrapper>
  )
}

TagIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['sm', 'lg']),
}

TagIcon.defaultProps = {
  size: 'lg',
}

export default TagIcon
