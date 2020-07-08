import React from 'react'
import { graphql } from 'gatsby'

import Button from '@components/button'
import CardLayout from '@components/cardLayout'
import Container from '@components/container'
import Layout from '@components/layout'
import SEO from '@components/seo'
import { TagBanner } from '@components/tag'

import { EmkTagPageData, EmkTagPageContext } from '@types'

const TagPage = ({ pageContext, data: { prismic } }) => {
  const tagList = prismic.tagList.edges
  const icon = prismic.bannerIcon ? prismic.bannerIcon : {}
  const { tags: currentTag } = pageContext
  return (
    <Layout>
      <SEO title={currentTag}></SEO>
      <TagBanner tag={currentTag} icon={icon} />
      <Container>
        <CardLayout data={tagList} hasTypeSubheading />
        <div style={{ textAlign: 'center' }}>
          <Button to="/tags">Back to all tags</Button>
        </div>
      </Container>
    </Layout>
  )
}

TagPage.propTypes = {
  pageContext: EmkTagPageContext,
  data: EmkTagPageData,
}

export default TagPage

export const TagPageQuery = graphql`
  query TagPageQuery($tags: [String!], $tag: String!) {
    prismic {
      tagList: _allDocuments(
        tags: $tags
        sortBy: meta_firstPublicationDate_DESC
      ) {
        ...AllPostsWithTag
      }
      bannerIcon: icon(lang: "en-us", uid: $tag) {
        ...IconByTag
      }
    }
  }
`
