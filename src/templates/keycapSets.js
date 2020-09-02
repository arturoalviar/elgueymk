import React from 'react'
import { graphql } from 'gatsby'

import CardLayout from '@components/cardLayout'
import PageBanner from '@components/pageBanner'
import Container from '@components/container'
import Layout from '@components/layout'
import SEO from '@components/seo'

const KeycapSetsPage = ({ pageContext, data: { prismic } }) => {
  const { keycapSets } = pageContext
  const { content } = prismic.bannerContent

  return (
    <Layout>
      <SEO title="Keycap Sets" />
      <PageBanner title="Keycap Sets" content={content} />
      <Container size="lg">
        <CardLayout data={keycapSets} />
      </Container>
    </Layout>
  )
}

export const keycapSetsQuery = graphql`
  query KeycapSetQuery {
    prismic {
      bannerContent(lang: "en-us", uid: "banner-content-keycap-sets") {
        content
      }
    }
  }
`

export default KeycapSetsPage
