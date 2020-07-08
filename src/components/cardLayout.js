import React from 'react'
import PropTypes from 'prop-types'
import { useTrail, animated, config } from 'react-spring'

import Card from '@components/card'

import { GridPageLayout } from '@styles/pages/layout'

import { EmkPostsPageEdges } from '@types'

const CardLayout = ({ data, hasTypeSubheading }) => {
  const CardsTrail = useTrail(data.length, {
    config: config.stiff,
    y: 0,
    opacity: 1,
    from: {
      opacity: 0,
      y: 50,
    },
  })

  return (
    <GridPageLayout>
      {CardsTrail.map(({ y, opacity, ...rest }, index) => {
        const { title, images, _meta } = data[index].node
        const image = images[0].imageSharp
          ? images[0].imageSharp.childImageSharp.fluid
          : null
        const imageAlt = images[0].image.alt
          ? images[0].image.alt
          : title[0].text
        const subheading = hasTypeSubheading ? _meta.type : ''

        return (
          <animated.div
            key={`animated-${_meta.type}-${index}`}
            style={{ ...rest, y, opacity }}
          >
            <Card
              title={title[0]}
              subheading={subheading}
              customType={_meta.type}
              image={image}
              imageAlt={imageAlt}
              uid={_meta.uid}
            />
          </animated.div>
        )
      })}
    </GridPageLayout>
  )
}

CardLayout.propTypes = {
  hasTypeSubheading: PropTypes.bool,
  data: EmkPostsPageEdges,
}

CardLayout.defaultProps = {
  hasTypeSubheading: false,
}

export default CardLayout
