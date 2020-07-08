import {
  shape,
  bool,
  object,
  node,
  number,
  string,
  arrayOf,
  objectOf,
} from 'prop-types'

const PrismicMeta = shape({
  uid: string,
  type: string,
  tags: arrayOf(string),
})

const PrismicTitle = arrayOf(
  shape({
    type: string,
    text: string,
    spans: arrayOf(string),
  })
)

const PrismicDescription = arrayOf(
  shape({
    type: string,
    text: string,
    spans: arrayOf(
      shape({
        start: number,
        end: number,
        type: string,
        data: object,
      })
    ),
  })
)

const PrismicImage = shape({
  dimensions: shape({
    width: number,
    height: number,
  }),
  alt: string,
  url: string,
})

const EmkImageSharp = shape({
  childImageSharp: shape({
    fluid: object,
  }),
})

const PrismicImages = arrayOf(
  shape({
    image: PrismicImage,
    imageSharp: EmkImageSharp,
  })
)

const EmkPaginationNode = shape({
  _meta: PrismicMeta,
  title: PrismicTitle,
  images: PrismicImages,
})

// for single page post
const EmkPostPageEdge = shape({
  _meta: PrismicMeta,
  title: PrismicTitle,
  description: PrismicDescription,
  images: PrismicImages,
  // custom types
  features: arrayOf(
    shape({
      feature: string,
    })
  ),
  kits: arrayOf(
    shape({
      kit: string,
      sold: bool,
    })
  ),
  obtained: string,
  own: bool,
  reference: shape({
    url: string,
  }),
})

const EmkPostLayoutData = {
  title: string,
  baseUrl: string,
  bannerImage: object,
  images: PrismicImages,
  tags: arrayOf(string),
  reference: shape({
    url: string,
  }),
  prevNode: EmkPaginationNode,
  nextNode: EmkPaginationNode,
  children: node.isRequired,
}

const EmkPostData = postType => {
  return shape({
    prismic: shape({
      [postType]: EmkPostPageEdge,
      prevNode: EmkPaginationNode,
      nextNode: EmkPaginationNode,
    }),
  })
}

// for collection of posts
const EmkPostsPageEdge = shape({
  _meta: PrismicMeta,
  title: PrismicTitle,
  description: PrismicDescription,
  images: PrismicImages,
})

const EmkPostsPageEdges = arrayOf(EmkPostsPageEdge)

const EmkPostsData = postType => {
  return shape({
    prismic: shape({
      bannerContent: shape({
        content: string,
      }),
      [postType]: shape({
        edges: arrayOf(
          shape({
            node: EmkPostsPageEdge,
          })
        ),
      }),
    }),
  })
}

const EmkHomePageData = shape({
  prismic: shape({
    allBuilds: shape({
      edges: EmkPostsPageEdges,
    }),
    allKeyboards: shape({
      edges: EmkPostsPageEdges,
    }),
    allKeycapSets: shape({
      edges: EmkPostsPageEdges,
    }),
  }),
})

const EmkAboutData = shape({
  prismic: shape({
    about: shape({
      title: PrismicTitle,
      description: PrismicDescription,
      image: PrismicImage,
      imageSharp: EmkImageSharp,
    }),
  }),
})

// Single tag page types
const EmkTagPageData = shape({
  prismic: shape({
    tagList: shape({
      edges: arrayOf(
        shape({
          node: shape({
            title: PrismicTitle,
            images: PrismicImages,
            _meta: PrismicMeta,
          }),
        })
      ),
    }),
    bannerIcon: shape({
      meta: PrismicMeta,
      color: string,
      image: PrismicImage,
    }),
  }),
})

const EmkTagPageContext = shape({
  tags: string,
})

const EmkTagsContext = shape({
  tagList: objectOf(number),
})

export {
  EmkPostsPageEdge,
  EmkPostsPageEdges,
  EmkHomePageData,
  EmkAboutData,
  EmkTagPageData,
  EmkTagPageContext,
  EmkTagsContext,
  EmkPostLayoutData,
  EmkPostData,
  EmkPostsData,
  EmkPaginationNode,
}
