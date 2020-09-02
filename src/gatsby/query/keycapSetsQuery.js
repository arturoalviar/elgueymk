const gql = String.raw

const keycapSetsQuery = gql`
  query keycapSetsQuery($after: String) {
    prismic {
      allKeycapSets(sortBy: obtained_DESC, after: $after) {
        edges {
          node {
            title
            images {
              image
              imageSharp {
                childImageSharp {
                  fluid(maxWidth: 1100, quality: 90) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
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
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`

module.exports = keycapSetsQuery
