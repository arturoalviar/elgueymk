import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { KeyboardFeatures, PostLayout } from '@components/post'

import { PostEntry, PostHeader, PostMeta } from '@styles/templates/post'

import { EmkPostData } from '@types'

const KeyboardPost = ({
  data: {
    prismic: { keyboard, prevNode, nextNode },
  },
}) => {
  const {
    title,
    description,
    features,
    plate,
    obtained,
    own,
    reference,
    _meta,
  } = keyboard
  const { tags } = _meta
  const keyboardImages = [...keyboard.images]
  const firstImage = keyboardImages.shift()
  const bannerImage = firstImage.imageSharp
    ? firstImage.imageSharp.childImageSharp.fluid
    : ''
  const obtainedDate = new Date(obtained)

  return (
    <PostLayout
      title={title[0].text}
      prevNode={prevNode}
      nextNode={nextNode}
      baseUrl="keyboards"
      bannerImage={bannerImage}
      images={keyboardImages}
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
        <div className="emk-post-content">{RichText.render(description)}</div>
        <KeyboardFeatures
          features={features[0].primary}
          plate={plate[0].primary}
        />
      </PostEntry>
    </PostLayout>
  )
}

KeyboardPost.propTypes = {
  data: EmkPostData('keyboard'),
}

export const keyboardPostQuery = graphql`
  query KeyboardPostQuery($uid: String!, $prevUID: String!, $nextUID: String!) {
    prismic {
      keyboard(uid: $uid, lang: "en-us") {
        ...KeyboardPost
      }
      ...KeyboardPostPagination
    }
  }
`

export default KeyboardPost
