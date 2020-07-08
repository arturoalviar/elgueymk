const gql = String.raw

const allIconsQuery = gql`
  query AllIconsQuery($after: String) {
    prismic {
      allIcons(after: $after) {
        edges {
          node {
            _meta {
              uid
            }
            color
            imageSharp {
              publicURL
            }
            image
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

module.exports = allIconsQuery
