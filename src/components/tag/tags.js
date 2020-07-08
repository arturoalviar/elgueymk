import React from 'react'
import PropTypes from 'prop-types'

import Tag from './tag'

import { TagsWrapper } from '@styles/components/tags'

const Tags = ({ tags, center }) => {
  return (
    <TagsWrapper center={center}>
      {tags.map((tag, index) => (
        <Tag key={`tag-${index}`} label={tag}>
          <span>#</span>
          {tag}
        </Tag>
      ))}
    </TagsWrapper>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  center: PropTypes.bool,
}

Tags.defaultProps = {
  center: false,
}

export default Tags
