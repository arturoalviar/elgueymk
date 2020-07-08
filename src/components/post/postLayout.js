import React from 'react'
import Img from 'gatsby-image'

import Button from '@components/button'
import Container from '@components/container'
import Layout from '@components/layout'
import { PostImage, PostPagination } from '@components/post'
import SpringTransition from '@components/springTransition'
import SEO from '@components/seo'
import { Tags } from '@components/tag'

import {
  PostEntryImageWrapper,
  PostImageGalleryWrapper,
  PostFooter,
} from '@styles/templates/post'

import { EmkPostLayoutData } from '@types'

const PostLayout = ({
  title,
  prevNode,
  nextNode,
  baseUrl,
  bannerImage,
  images,
  tags,
  reference,
  children,
}) => {
  return (
    <Layout>
      <SEO title={title} image={bannerImage} />
      <Container size="xl">
        {bannerImage && (
          <SpringTransition preset="molasses" y={-20}>
            <PostEntryImageWrapper>
              <Img fluid={bannerImage} alt={title} />
            </PostEntryImageWrapper>
          </SpringTransition>
        )}
      </Container>
      <Container>
        <>
          <SpringTransition preset="slow" y={50}>
            {children}
            {!!images.length && (
              <PostImageGalleryWrapper>
                {images.map((image, index) => (
                  <PostImage key={`post-image-${index}`} image={image} />
                ))}
              </PostImageGalleryWrapper>
            )}
          </SpringTransition>
          <PostFooter>
            <Tags tags={tags} />
            {reference && (
              <Button to={reference.url} linksOut>
                More info
              </Button>
            )}
          </PostFooter>
          <PostPagination
            prevNode={prevNode}
            nextNode={nextNode}
            baseUrl={baseUrl}
          />
        </>
      </Container>
    </Layout>
  )
}

PostLayout.propTypes = EmkPostLayoutData

export default PostLayout
