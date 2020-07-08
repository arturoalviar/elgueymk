import React from 'react'
import { graphql } from 'gatsby'

import CardLayout from '@components/cardLayout'
import PageBanner from '@components/pageBanner'
import Container from '@components/container'
import Layout from '@components/layout'
import SEO from '@components/seo'

import { EmkPostsData } from '@types'

const BuildsPage = ({ data: { prismic } }) => {
  const builds = prismic.allBuilds.edges
  const { content } = prismic.bannerContent

  return (
    <Layout>
      <SEO title="Builds" />
      <PageBanner title="Builds" content={content} />
      <Container size="lg">
        <CardLayout data={builds} />
      </Container>
    </Layout>
  )
}

BuildsPage.propTypes = {
  data: EmkPostsData('allBuilds'),
}

export const buildsQuery = graphql`
  query BuildsQuery {
    prismic {
      bannerContent(lang: "en-us", uid: "banner-content-builds") {
        content
      }
      allBuilds(sortBy: obtained_DESC) {
        ...BuildEdges
      }
    }
  }
`

export default BuildsPage
