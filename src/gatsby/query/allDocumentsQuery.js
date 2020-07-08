const gql = String.raw

const allDocumentsQuery = gql`
  query AllDocumentsQuery($after: String) {
    prismic {
      _allDocuments(
        type_in: ["build", "keycap-set", "keyboard"]
        after: $after
      ) {
        edges {
          node {
            _meta {
              tags
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

module.exports = allDocumentsQuery
