import React from 'react'
import PropTypes from 'prop-types'

import Container from '@components/container'
import TagIcon from './tagIcon'
import SpringTransition from '@components/springTransition'

import {
  TagBannerWrapper,
  TagBannerHeading,
} from '@styles/components/tagBanner'

const TagBanner = ({ tag, icon }) => {
  return (
    <SpringTransition y={-50} preset="stiff">
      <TagBannerWrapper>
        <Container>
          <TagBannerHeading>
            <TagIcon icon={icon} />
            <h2>{tag}</h2>
          </TagBannerHeading>
        </Container>
      </TagBannerWrapper>
    </SpringTransition>
  )
}

TagBanner.propTypes = {
  tag: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
}

export default TagBanner
