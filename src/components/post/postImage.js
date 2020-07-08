import React from 'react'
import Img from 'gatsby-image'

import { PostImageWrapper } from '@styles/templates/post'

const PostImage = ({ image }) => {
  const { caption } = image
  const { alt } = image.image
  const { fluid } = image.imageSharp.childImageSharp

  return (
    <PostImageWrapper>
      <Img fluid={fluid} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </PostImageWrapper>
  )
}

export default PostImage
