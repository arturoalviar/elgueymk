const createPostPages = ({
  edges,
  slugPrefix,
  customType,
  pageTemplate,
  createPage,
}) => {
  edges.forEach((edge, index) => {
    const { uid } = edge.node._meta
    const prevNode = index === 0 ? edges[edges.length - 1] : edges[index - 1]
    const nextNode = index === edges.length - 1 ? edges[0] : edges[index + 1]
    const { uid: prevUID } = prevNode.node._meta
    const { uid: nextUID } = nextNode.node._meta
    createPage({
      path: `/${slugPrefix}/${uid}`,
      component: pageTemplate,
      context: {
        uid,
        prevUID,
        nextUID,
        customType,
      },
    })
  })
}

const createTagsPage = ({ slug, pageTemplate, context, createPage }) => {
  createPage({
    path: `/${slug}`,
    component: pageTemplate,
    context,
  })
}

const createTagPage = ({ edges, slugPrefix, pageTemplate, createPage }) => {
  Object.keys(edges).forEach(tag => {
    createPage({
      path: `/${slugPrefix}/${tag}`,
      component: pageTemplate,
      context: {
        // used to filter tag icons
        tag,
        // used to filter posts
        tags: tag,
        // how many posts have this tag
        count: edges[tag],
      },
    })
  })
}

const sortObject = list => {
  return Object.keys(list)
    .sort()
    .reduce((acc, key) => {
      return { ...acc, [key]: list[key] }
    }, {})
}

const getAllTags = allDocs => {
  const tagList = {}
  // go through all doc and add each tag plus count to our taglist
  allDocs.forEach(edge => {
    const { tags } = edge.node._meta
    tags.forEach(tag => {
      if (!Object.prototype.hasOwnProperty.call(tagList, tag)) {
        tagList[tag] = 1
      } else {
        tagList[tag] += 1
      }
    })
  })

  const sortedTagList = sortObject(tagList)

  return sortedTagList
}

const getAllIcons = allIcons => {
  const iconList = {}

  allIcons.forEach(edge => {
    const { uid } = edge.node._meta
    const { color, imageSharp } = edge.node
    if (!Object.prototype.hasOwnProperty.call(iconList, uid)) {
      iconList[uid] = {
        uid,
        color,
        imageSharp,
      }
    }
  })

  return iconList
}

exports.createPostPages = createPostPages
exports.createTagsPage = createTagsPage
exports.createTagPage = createTagPage
exports.getAllTags = getAllTags
exports.getAllIcons = getAllIcons
