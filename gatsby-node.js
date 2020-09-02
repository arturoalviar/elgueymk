const {
  allDocumentsQuery,
  allBuildsQuery,
  allKeyboardsQuery,
  allKeycapSetsQuery,
  allIconsQuery,
  keycapSetsQuery,
} = require('./src/gatsby/query')

const {
  createPostPages,
  createEMKPage,
  createTagPage,
  getAllTags,
  getAllIcons,
} = require('./src/gatsby/gatsbyNodeUtils')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const keyboardPostTemplate = require.resolve(
    './src/templates/keyboardPost.js'
  )
  const keycapSetTemplate = require.resolve('./src/templates/keycapSetPost.js')
  const keycapSetsTemplate = require.resolve('./src/templates/keycapSets.js')
  const buildPostTemplate = require.resolve('./src/templates/buildPost.js')
  const tagsPageTemplate = require.resolve('./src/templates/tags.js')
  const tagTemplate = require.resolve('./src/templates/tag.js')

  const prismicRecursiveFetch = async ({ query, field, endCursor = '' }) => {
    const currentQuery = await wrapper(graphql(query, { after: endCursor }))
    const {
      hasNextPage,
      endCursor: currentEndCursor,
    } = currentQuery.data.prismic[field].pageInfo
    const { edges } = currentQuery.data.prismic[field]

    if (hasNextPage) {
      return edges.concat(
        await prismicRecursiveFetch({
          query,
          field,
          endCursor: currentEndCursor,
        })
      )
    }

    return edges
  }

  const allDocs = await prismicRecursiveFetch({
    query: allDocumentsQuery,
    field: '_allDocuments',
  })

  const allIcons = await prismicRecursiveFetch({
    query: allIconsQuery,
    field: 'allIcons',
  })

  const buildList = await prismicRecursiveFetch({
    query: allBuildsQuery,
    field: 'allBuilds',
  })

  const keycapList = await prismicRecursiveFetch({
    query: allKeycapSetsQuery,
    field: 'allKeycapSets',
  })

  const keyboardList = await prismicRecursiveFetch({
    query: allKeyboardsQuery,
    field: 'allKeyboards',
  })

  const keycapSets = await prismicRecursiveFetch({
    query: keycapSetsQuery,
    field: 'allKeycapSets',
  })

  const allTags = getAllTags(allDocs)
  const allTagIcons = getAllIcons(allIcons)

  // create page that displays all tags
  createEMKPage({
    slug: 'tags',
    pageTemplate: tagsPageTemplate,
    context: {
      tagList: allTags,
      tagIcons: allTagIcons,
    },
    createPage,
  })

  // create a page for each tag
  createTagPage({
    edges: allTags,
    slugPrefix: 'tags',
    pageTemplate: tagTemplate,
    createPage,
  })

  // create build posts
  createPostPages({
    edges: buildList,
    slugPrefix: 'builds',
    customType: 'allBuilds',
    pageTemplate: buildPostTemplate,
    createPage,
  })

  // create keyboard posts
  createPostPages({
    edges: keyboardList,
    slugPrefix: 'keyboards',
    customType: 'allKeyboards',
    pageTemplate: keyboardPostTemplate,
    createPage,
  })

  // create keycap set posts
  createPostPages({
    edges: keycapList,
    slugPrefix: 'keycap-sets',
    customType: 'allKeycapSets',
    pageTemplate: keycapSetTemplate,
    createPage,
  })

  // create page that displays all tags
  createEMKPage({
    slug: 'keycap-sets',
    pageTemplate: keycapSetsTemplate,
    context: {
      keycapSets,
    },
    createPage,
  })
}
