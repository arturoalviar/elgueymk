const gql = String.raw

const allBuildsQuery = gql`
  query AllBuildsQuery($after: String) {
    prismic {
      allBuilds(sortBy: meta_firstPublicationDate_DESC, after: $after) {
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

module.exports = allBuildsQuery
