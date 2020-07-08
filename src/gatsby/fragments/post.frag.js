import { graphql } from 'gatsby'

export const buildPostFragment = graphql`
  fragment BuildPost on PRISMIC_Build {
    title
    description
    _meta {
      tags
    }
    images {
      caption
      image
      imageSharp {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    keyboard {
      ... on PRISMIC_Keyboard {
        _meta {
          uid
          type
        }
        title
        images {
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 1100, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    keycapSets {
      kit
      keycapSet {
        ... on PRISMIC_KeycapSet {
          _meta {
            uid
            type
          }
          title
          alphas {
            image
            imageSharp {
              childImageSharp {
                fluid(maxWidth: 600, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          mods {
            image
            imageSharp {
              childImageSharp {
                fluid(maxWidth: 600, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    artisanKeycaps {
      artisanKeycap {
        ... on PRISMIC_ArtisanKeycap {
          _meta {
            uid
            type
          }
          title
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 600, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export const keyboardPostFragment = graphql`
  fragment KeyboardPost on PRISMIC_Keyboard {
    title
    description
    obtained
    own
    _meta {
      tags
    }
    images {
      caption
      image
      imageSharp {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    reference {
      ... on PRISMIC__ExternalLink {
        url
      }
    }
    features {
      ... on PRISMIC_KeyboardFeaturesList {
        primary {
          angle
          hotswap
          interface
          layout
          layoutVariant
          material
          rgb
          weight
        }
      }
    }
    plate {
      ... on PRISMIC_KeyboardPlateDetails {
        primary {
          thickness
          material
          integrated
        }
      }
    }
  }
`

export const keycapSetPostFragment = graphql`
  fragment KeycapSetPost on PRISMIC_KeycapSet {
    title
    description
    obtained
    own
    _meta {
      tags
    }
    images {
      caption
      image
      imageSharp {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    reference {
      ... on PRISMIC__ExternalLink {
        url
      }
    }
    kits {
      kit
      sold
    }
  }
`
