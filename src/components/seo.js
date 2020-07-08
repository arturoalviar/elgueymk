import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title, image }) {
  return (
    <StaticQuery
      query={`${detailsQuery}`}
      render={data => {
        const { siteURL } = data.site.siteMetadata
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaImage = image
          ? image.src
          : data.image.childImageSharp.fixed.src

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              // OpenGraph metadata
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:image`,
                content: `${siteURL}${metaImage}`,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              // twitter card metadata
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: `${siteURL}${metaImage}`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.author,
              },
            ].concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteURL
      }
    }
    image: file(name: { eq: "elgueymk-logo" }) {
      childImageSharp {
        id
        fixed(width: 600) {
          src
        }
      }
    }
  }
`

export default SEO
