import React from 'react'
import { graphql } from 'gatsby'

import LatestPosts from '@components/home/latestPosts'
import Layout from '@components/layout'
import SEO from '@components/seo'

import { EmkHomePageData } from '@types'

const HomePage = ({ data: { prismic } }) => {
  const latestKeycapSets = prismic.allKeycapSets.edges
  const latestKeyboards = prismic.allKeyboards.edges
  const latestBuild = prismic.allBuilds.edges[0].node
  const { content } = prismic.bannerContent

  return (
    <Layout>
      <SEO title="Home" />
      <LatestPosts
        heading={content}
        latestBuild={latestBuild}
        latestKeycapSets={latestKeycapSets}
        latestKeyboards={latestKeyboards}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: EmkHomePageData,
}

export const hompageQuery = graphql`
  query HomepageQuery {
    prismic {
      bannerContent(lang: "en-us", uid: "banner-content-home") {
        content
      }
      allBuilds(sortBy: meta_firstPublicationDate_DESC, first: 1) {
        ...AllBuildsHome
      }
      allKeycapSets(sortBy: obtained_DESC, first: 2) {
        ...AllKeycapSetsHome
      }
      allKeyboards(sortBy: obtained_DESC, first: 2) {
        ...AllKeyboardsHome
      }
    }
  }
`

export default HomePage
