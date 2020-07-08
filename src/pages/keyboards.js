import React from 'react'
import { graphql } from 'gatsby'

import CardLayout from '@components/cardLayout'
import PageBanner from '@components/pageBanner'
import Container from '@components/container'
import Layout from '@components/layout'
import SEO from '@components/seo'

import { EmkPostsData } from '@types'

const KeyboardsPage = ({ data: { prismic } }) => {
  const keyboards = prismic.allKeyboards.edges
  const { content } = prismic.bannerContent

  return (
    <Layout>
      <SEO title="Keyboards" />
      <PageBanner title="Keyboards" content={content} />
      <Container size="lg">
        <CardLayout data={keyboards} />
      </Container>
    </Layout>
  )
}

KeyboardsPage.propTypes = {
  data: EmkPostsData('allKeyboards'),
}

export const KeyboardsQuery = graphql`
  query KeyboardsQuery {
    prismic {
      bannerContent(lang: "en-us", uid: "banner-content-keyboards") {
        content
      }
      allKeyboards(sortBy: obtained_DESC) {
        ...KeyboardEdges
      }
    }
  }
`

export default KeyboardsPage
