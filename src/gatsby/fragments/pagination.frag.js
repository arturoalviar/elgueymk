import { graphql } from 'gatsby'

export const keycapSetPaginationInfo = graphql`
  fragment KeycapSetPaginationInfo on PRISMIC_KeycapSet {
    title
    _meta {
      uid
    }
    images {
      image
      imageSharp {
        childImageSharp {
          fluid(maxWidth: 720, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const keyboardPaginationInfo = graphql`
  fragment KeyboardPaginationInfo on PRISMIC_Keyboard {
    title
    _meta {
      uid
    }
    images {
      image
      imageSharp {
        childImageSharp {
          fluid(maxWidth: 720, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const keycapSetPostPaginationFragment = graphql`
  fragment KeycapSetPostPagination on PRISMIC {
    prevNode: keycapSet(uid: $prevUID, lang: "en-us") {
      ...KeycapSetPaginationInfo
    }
    nextNode: keycapSet(uid: $nextUID, lang: "en-us") {
      ...KeycapSetPaginationInfo
    }
  }
`

export const keyboardPostPaginationFragment = graphql`
  fragment KeyboardPostPagination on PRISMIC {
    prevNode: keyboard(uid: $prevUID, lang: "en-us") {
      ...KeyboardPaginationInfo
    }
    nextNode: keyboard(uid: $nextUID, lang: "en-us") {
      ...KeyboardPaginationInfo
    }
  }
`
