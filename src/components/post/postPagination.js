import React from 'react'
import PropTypes from 'prop-types'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import Button from '@components/button'

import {
  PostPaginationWrapper,
  PaginationLinkWrapper,
  PaginationReturnLink,
  PaginationLink,
  PaginationLinkBg,
} from '@styles/components/postPagination'

const PostPagination = ({ prevNode, nextNode, baseUrl }) => {
  const prevImage = prevNode.images[0].imageSharp
    ? prevNode.images[0].imageSharp.childImageSharp.fluid.src
    : ''
  const nextImage = nextNode.images[0].imageSharp
    ? nextNode.images[0].imageSharp.childImageSharp.fluid.src
    : ''
  return (
    <PostPaginationWrapper aria-label="Post pagination">
      <PaginationLinkWrapper>
        <PaginationLink
          to={`/${baseUrl}/${prevNode._meta.uid}`}
          aria-label={`previous post: ${prevNode.title[0].text}`}
        >
          <p className="pagination-link-label is-prev">
            <FiArrowLeft /> previous
          </p>
          <h3>{prevNode.title[0].text}</h3>
        </PaginationLink>
        <PaginationLinkBg image={prevImage} />
      </PaginationLinkWrapper>
      <PaginationLinkWrapper>
        <PaginationLink
          to={`/${baseUrl}/${nextNode._meta.uid}`}
          aria-label={`next post: ${nextNode.title[0].text}`}
        >
          <p className="pagination-link-label is-next">
            next <FiArrowRight />
          </p>
          <h3>{nextNode.title[0].text}</h3>
        </PaginationLink>
        <PaginationLinkBg image={nextImage} />
      </PaginationLinkWrapper>
      <PaginationReturnLink>
        <Button to={`/${baseUrl}`}>
          Back to all {baseUrl.split('-').join(' ')}
        </Button>
      </PaginationReturnLink>
    </PostPaginationWrapper>
  )
}

PostPagination.propTypes = {
  prevNode: PropTypes.object.isRequired,
  nextNode: PropTypes.object.isRequired,
  baseUrl: PropTypes.string.isRequired,
}

export default PostPagination
