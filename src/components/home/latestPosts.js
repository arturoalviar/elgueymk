import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import Button from '@components/button'
import Card from '@components/card'
import Container from '@components/container'
import EntryBanner from '@components/home/entryBanner'
import SpringTransition from '@components/springTransition'

import {
  FeaturedGrid,
  FeaturedHeader,
  SeeMoreWrapper,
} from '@styles/pages/home'
import { SectionHeading } from '@styles/typography'

import { EmkPostsPageEdge, EmkPostsPageEdges } from '@types'

const LatestPosts = ({
  heading,
  latestBuild,
  latestKeycapSets,
  latestKeyboards,
}) => {
  return (
    <>
      <EntryBanner heading={heading}>
        <Card
          title={latestBuild.title[0]}
          customType={latestBuild._meta.type}
          image={latestBuild.images[0].imageSharp.childImageSharp.fluid}
          uid={latestBuild._meta.uid}
          subheading="Latest Build"
        />
      </EntryBanner>
      <Container size="lg">
        <FeaturedHeader>
          <SectionHeading>Latest Keycap sets</SectionHeading>
          <Button
            className="featured-header-button"
            to="/keycap-sets"
            type="text"
            hasIcon
          >
            View all keycap sets
            <IoIosArrowForward />
          </Button>
        </FeaturedHeader>
        <FeaturedGrid>
          {latestKeycapSets.map((keycapSet, index) => {
            return (
              <SpringTransition key={`keycap-set-${index}`} delay={250}>
                <Card
                  title={keycapSet.node.title[0]}
                  customType={keycapSet.node._meta.type}
                  image={
                    keycapSet.node.images[0].imageSharp.childImageSharp.fluid
                  }
                  uid={keycapSet.node._meta.uid}
                />
              </SpringTransition>
            )
          })}
        </FeaturedGrid>
        <SeeMoreWrapper addPadding>
          <Button to="/keycap-sets">View all keycap sets</Button>
        </SeeMoreWrapper>
      </Container>
      <Container size="lg">
        <FeaturedHeader>
          <SectionHeading>Latest Keyboards</SectionHeading>
          <Button
            className="featured-header-button"
            to="/keyboards"
            type="text"
            hasIcon
          >
            View all keyboards
            <IoIosArrowForward />
          </Button>
        </FeaturedHeader>
        <FeaturedGrid>
          {latestKeyboards.map((keyboard, index) => {
            return (
              <SpringTransition key={`keyboard-${index}`} delay={500}>
                <Card
                  title={keyboard.node.title[0]}
                  customType={keyboard.node._meta.type}
                  image={
                    keyboard.node.images[0].imageSharp.childImageSharp.fluid
                  }
                  uid={keyboard.node._meta.uid}
                />
              </SpringTransition>
            )
          })}
        </FeaturedGrid>
        <SeeMoreWrapper>
          <Button to="/keyboards">View all keyboards</Button>
        </SeeMoreWrapper>
      </Container>
    </>
  )
}

LatestPosts.propTypes = {
  latestBuild: EmkPostsPageEdge,
  latestKeyboards: EmkPostsPageEdges,
  latestKeycapSets: EmkPostsPageEdges,
}

export default LatestPosts
