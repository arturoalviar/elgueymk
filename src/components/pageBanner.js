import React from 'react'
import PropTypes from 'prop-types'

import SpringTransition from '@components/springTransition'

import {
  PageBannerWrapper,
  PageBannerTitle,
  PageBannerContent,
} from '@styles/components/pageBanner'

const PageBanner = ({ title, content, size }) => {
  return (
    <PageBannerWrapper size={size}>
      <SpringTransition x={-100} y={0} delay="150" preset="stiff">
        <PageBannerTitle>
          <h1>{title}</h1>
        </PageBannerTitle>
      </SpringTransition>
      {content && (
        <SpringTransition x={100} y={0} delay="150" preset="stiff">
          <PageBannerContent>
            <p>{content}</p>
          </PageBannerContent>
        </SpringTransition>
      )}
    </PageBannerWrapper>
  )
}

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  size: PropTypes.oneOf(['default', 'lg', 'xl']),
}

PageBanner.defaultProps = {
  size: 'xl',
}

export default PageBanner
