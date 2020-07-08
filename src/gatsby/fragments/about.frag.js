import { graphql } from 'gatsby'

export const aboutFragment = graphql`
  fragment AboutPage on PRISMIC_About {
    title
    description
    image
    imageSharp {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
