import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import Container from '@components/container'
import Layout from '@components/layout'
import SEO from '@components/seo'
import SpringTransition from '@components/springTransition'
import { EmkAboutData } from '@types'

const AboutPage = ({ data: { prismic } }) => {
  const { title, description, imageSharp } = prismic.about

  return (
    <Layout>
      <Container className="emk-about-container">
        <SEO title="About" />
        <SpringTransition y={0}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
            {title[0].text}
          </h2>
          <Img
            fluid={imageSharp.childImageSharp.fluid}
            style={{ marginBottom: '2rem' }}
          />
          <div
            style={{
              maxWidth: '80ch',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <RichText render={description} />
          </div>
        </SpringTransition>
      </Container>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: EmkAboutData,
}

export const aboutQuery = graphql`
  query AboutQuery {
    prismic {
      about(lang: "en-us", uid: "about") {
        ...AboutPage
      }
    }
  }
`

export default AboutPage
