import React from 'react'
import { useTrail, animated, config } from 'react-spring'

import PageBanner from '@components/pageBanner'
import Container from '@components/container'
import Layout from '@components/layout'
import SEO from '@components/seo'
import { TagCard } from '@components/tag'

import { TagsGrid } from '@styles/pages/layout'

import { EmkTagsContext } from '@types'

const TagsPageTemplate = ({ pageContext }) => {
  const { tagList, tagIcons } = pageContext
  const tagListArray = Array.from(Object.keys(tagList))
  const TagCardsTrail = useTrail(tagListArray.length, {
    config: config.stiff,
    opacity: 1,
    from: {
      opacity: 0,
    },
  })

  return (
    <Layout>
      <SEO title="tags"></SEO>
      <PageBanner title="Tags" size="default" />
      <Container>
        <TagsGrid>
          {TagCardsTrail.map(({ opacity, ...rest }, index) => {
            const tagLabel = tagListArray[index]

            return (
              <animated.div
                style={{ ...rest, opacity }}
                key={`tag-${tagListArray[index]}-${index}`}
              >
                <TagCard
                  icon={tagIcons[tagLabel]}
                  label={tagLabel}
                  count={tagList[tagLabel]}
                />
              </animated.div>
            )
          })}
        </TagsGrid>
      </Container>
    </Layout>
  )
}

TagsPageTemplate.propTypes = {
  pageContext: EmkTagsContext,
}

export default TagsPageTemplate
