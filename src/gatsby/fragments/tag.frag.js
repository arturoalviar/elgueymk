import { graphql } from 'gatsby'

export const iconByTagFragment = graphql`
  fragment IconByTag on PRISMIC_Icon {
    _meta {
      uid
    }
    color
    image
    imageSharp {
      publicURL
    }
  }
`

export const allPostsWithTagFragment = graphql`
  fragment AllPostsWithTag on PRISMIC__DocumentConnection {
    edges {
      node {
        ... on PRISMIC_Keyboard {
          title
          images {
            image
            imageSharp {
              childImageSharp {
                fluid(maxWidth: 192, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          _meta {
            type
            uid
          }
        }
        ... on PRISMIC_KeycapSet {
          title
          images {
            image
            imageSharp {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          _meta {
            type
            uid
          }
        }
        ... on PRISMIC_Build {
          title
          images {
            image
            imageSharp {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          _meta {
            type
            uid
          }
        }
      }
    }
  }
`
