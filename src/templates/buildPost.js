import React from 'react'
import { graphql } from 'gatsby'

import { BuildBanner, BuildKeyboards, BuildKeycapSets } from '@components/build'
import Container from '@components/container'
import Layout from '@components/layout'
import SEO from '@components/seo'
import SpringTransition from '@components/springTransition'
import { Tags } from '@components/tag'

import { PostEntry } from '@styles/templates/post'

import { EmkPostData } from '@types'

const BuildPost = ({ data: { prismic } }) => {
  const buildItem = prismic.build
  const {
    title,
    description,
    _meta,
    images,
    keyboard,
    keycapSets,
    artisanKeycaps,
  } = buildItem
  const { tags } = _meta

  return (
    <Layout>
      <SEO
        title={title[0].text}
        image={images[0].imageSharp.childImageSharp.fluid}
      />
      <SpringTransition y={0} preset={'molasses'}>
        <BuildBanner image={images[0].imageSharp.childImageSharp.fluid}>
          <SpringTransition y={-100}>
            <h1>{title[0].text}</h1>
          </SpringTransition>
        </BuildBanner>
      </SpringTransition>
      <SpringTransition>
        <Container>
          <PostEntry>
            {description.map((item, index) => (
              <p key={`description-p-${index}`}>{item.text}</p>
            ))}
            <BuildKeyboards keyboard={keyboard} />
            <BuildKeycapSets
              keycapSets={keycapSets}
              artisanKeycaps={artisanKeycaps}
            />
          </PostEntry>
          <Tags tags={tags} center />
        </Container>
      </SpringTransition>
    </Layout>
  )
}

BuildPost.propTypes = {
  data: EmkPostData('build'),
}

export const buildPostQuery = graphql`
  query BuildPostQuery($uid: String!) {
    prismic {
      build(uid: $uid, lang: "en-us") {
        ...BuildPost
      }
    }
  }
`

export default BuildPost
