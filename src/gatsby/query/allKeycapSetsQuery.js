const gql = String.raw

const allKeycapSetsQuery = gql`
  query AllKeycapSetsQuery($after: String) {
    prismic {
      allKeycapSets(sortBy: obtained_DESC, after: $after) {
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

module.exports = allKeycapSetsQuery
