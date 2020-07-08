const gql = String.raw

const allKeyboardsQuery = gql`
  query AllKeyboardsQuery($after: String) {
    prismic {
      allKeyboards(sortBy: obtained_DESC, after: $after) {
        edges {
          node {
            _meta {
              uid
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

module.exports = allKeyboardsQuery
