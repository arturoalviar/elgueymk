import { graphql } from 'gatsby'

export const buildEdgesFragment = graphql`
  fragment BuildEdges on PRISMIC_BuildConnectionConnection {
    edges {
      node {
        title
        images {
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 80) {
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

export const keyboardEdgesFragment = graphql`
  fragment KeyboardEdges on PRISMIC_KeyboardConnectionConnection {
    edges {
      node {
        title
        images {
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
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

export const keycapSetEdgesFragment = graphql`
  fragment KeycapSetEdges on PRISMIC_KeycapSetConnectionConnection {
    edges {
      node {
        title
        images {
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 80) {
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
