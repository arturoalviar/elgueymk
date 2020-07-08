import React from 'react'
import PropTypes from 'prop-types'

import Container from '@components/container'
import SpringTransition from '@components/springTransition'

import { FeaturedContainer, EntryHeading } from '@styles/pages/home'

const EntryBanner = ({ heading, children }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Container size="xl">
        <SpringTransition>
          <EntryHeading>
            <h2>{heading}</h2>
          </EntryHeading>
        </SpringTransition>
      </Container>
      <FeaturedContainer>
        <SpringTransition delay={150}>{children}</SpringTransition>
        <div className="entry-banner-texture"></div>
      </FeaturedContainer>
    </div>
  )
}

EntryBanner.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default EntryBanner
