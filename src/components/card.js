import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import {
  CardBody,
  CardGradient,
  CardImageWrapper,
  CardWrapper,
  CardStandardWrapper,
} from '@styles/components/card'

const Card = ({
  title,
  subheading,
  customType,
  image,
  imageAlt,
  uid,
  variant,
}) => {
  switch (variant) {
    case 'standard':
      return (
        <CardStandardWrapper>
          <Link to={`/${customType}s/${uid}`}>
            {image && <Img fluid={image} alt={imageAlt} />}
          </Link>
          <div className="emk-card-content">
            <h2>{title.text}</h2>
          </div>
        </CardStandardWrapper>
      )
    case 'no-link':
      return (
        <CardStandardWrapper>
          {image && <Img fluid={image} alt={imageAlt} />}
          <div className="emk-card-content">
            <h2>{title.text}</h2>
          </div>
        </CardStandardWrapper>
      )
    default:
      return (
        <CardWrapper>
          <Link
            to={`/${customType}s/${uid}`}
            aria-label={`go to ${title.text} keyboard page`}
          >
            <CardImageWrapper>
              {image && <Img fluid={image} alt={imageAlt} />}
            </CardImageWrapper>
            {image && <CardGradient />}
            <CardBody>
              {subheading && <p>{subheading}</p>}
              <h2>{title.text}</h2>
            </CardBody>
          </Link>
        </CardWrapper>
      )
  }
}

Card.propTypes = {
  title: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  customType: PropTypes.string,
  image: PropTypes.object,
  imageAlt: PropTypes.string,
  variant: PropTypes.oneOf(['image', 'standard', 'no-link']),
}

Card.defaultProps = {
  variant: 'image',
}

export default Card
