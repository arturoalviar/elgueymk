import { graphql } from 'gatsby'

export const allBuildsFragment = graphql`
  fragment AllBuildsHome on PRISMIC_BuildConnectionConnection {
    edges {
      node {
        title
        description
        images {
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _meta {
          uid
          type
        }
      }
    }
  }
`

export const allKeycapSetsFragment = graphql`
  fragment AllKeycapSetsHome on PRISMIC_KeycapSetConnectionConnection {
    edges {
      node {
        title
        images {
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _meta {
          uid
          type
        }
      }
    }
  }
`

export const allKeyboardsFragment = graphql`
  fragment AllKeyboardsHome on PRISMIC_KeyboardConnectionConnection {
    edges {
      node {
        title
        images {
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _meta {
          uid
          type
        }
      }
    }
  }
`
