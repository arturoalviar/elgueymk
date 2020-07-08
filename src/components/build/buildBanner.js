import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Container from '@components/container'

import {
  BuildBannerContent,
  BuildBannerImage,
  BuildBannerWrapper,
} from '@styles/components/buildBanner'

const BuildBanner = ({ image, children }) => {
  return (
    <BuildBannerWrapper>
      <BuildBannerImage>
        <Img fluid={image} alt={image.alt} />
      </BuildBannerImage>
      <BuildBannerContent>
        <Container>{children}</Container>
      </BuildBannerContent>
    </BuildBannerWrapper>
  )
}

BuildBanner.propTypes = {
  image: PropTypes.object,
  children: PropTypes.node,
}

export default BuildBanner
