import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { PostLayout, PostKeycapSetKits } from '@components/post'

import { PostEntry, PostHeader, PostMeta } from '@styles/templates/post'

import { EmkPostData } from '@types'

const KeycapSetPost = ({
  data: {
    prismic: { keycapSet, prevNode, nextNode },
  },
}) => {
  const {
    title,
    description,
    obtained,
    own,
    reference,
    _meta,
    kits,
  } = keycapSet
  const { tags } = _meta
  const keycapSetImages = [...keycapSet.images]
  const firstImage = keycapSetImages.shift()
  const bannerImage = firstImage.imageSharp
    ? firstImage.imageSharp.childImageSharp.fluid
    : ''
  const obtainedDate = new Date(obtained)

  return (
    <PostLayout
      title={title[0].text}
      prevNode={prevNode}
      nextNode={nextNode}
      baseUrl="keycap-sets"
      bannerImage={bannerImage}
      images={keycapSetImages}
      tags={tags}
      reference={reference}
    >
      <PostEntry>
        <PostHeader>
          <h2>{title[0].text}</h2>
          <PostMeta>
            <span>
              Obtained on:{' '}
              {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
                obtainedDate
              )}
            </span>
            <span> | </span>
            <span>{own ? 'Currently own' : 'No longer own'}</span>
          </PostMeta>
        </PostHeader>
        <div className="emk-post-content">
          {RichText.render(description)}
          {kits && <PostKeycapSetKits list={kits} />}
        </div>
      </PostEntry>
    </PostLayout>
  )
}

KeycapSetPost.propTypes = {
  data: EmkPostData('keycapSet'),
}

export const keycapSetPostQuery = graphql`
  query KeycapSetPostQuery(
    $uid: String!
    $prevUID: String!
    $nextUID: String!
  ) {
    prismic {
      keycapSet(uid: $uid, lang: "en-us") {
        ...KeycapSetPost
      }
      ...KeycapSetPostPagination
    }
  }
`

export default KeycapSetPost
