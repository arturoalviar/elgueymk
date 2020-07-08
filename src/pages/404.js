import React from 'react'

import Button from '@components/button'
import Container from '@components/container'
import Layout from '@components/layout'
import SEO from '@components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <div style={{ paddingTop: '5rem', textAlign: 'center' }}>
        <h1 style={{ lineHeight: '1.2', textTransform: 'uppercase' }}>
          This page does not exist just like endgame.
        </h1>
        <Button to="/">Back to homepage</Button>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
