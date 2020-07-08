import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { withPrefix } from 'gatsby'

const slideInFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const FeaturedContainer = styled.div`
  position: relative;
  max-width: ${props => props.theme.units.container.xlWidth};
  width: 100%;
  padding-left: ${props => props.theme.units.container.gutter};
  padding-right: ${props => props.theme.units.container.gutter};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.units.padding.lg};
  z-index: 1;
  ${props => props.theme.minMedia.lg`
    margin-bottom: ${props.theme.units.padding.xxl};
  `}
  .entry-banner-texture {
    animation: ${slideInFade} 0.65s ease-in-out;
    background-image: url(${props =>
      withPrefix(`dot-texture-${props.theme.mode}.svg`)});
    background-size: 16px;
    background-position: center;
    background-repeat: repeat;
    display: block;
    position: absolute;
    width: 228px;
    top: -28px;
    right: ${props => props.theme.units.padding.sm};
    z-index: -1;
    &::after {
      content: '';
      display: block;
      padding-bottom: 70%;
    }
    ${({ theme }) => theme.minMedia.sm`
      background-size: 24px;
      top: -${theme.remCalc(40)};
      width: 448px;
      right: .45rem;
      &::after {
        padding-bottom: 56.45%;
      }
    `}
    ${({ theme }) => theme.minMedia.md`
      background-size: 48px;
      top: -${theme.remCalc(80)};
      width: ${theme.remCalc(632)};
      right: 1rem;
    `}
    ${({ theme }) => theme.minMedia.lg`
      top: -${theme.remCalc(148)};
      width: ${theme.remCalc(720)};
      right: 0;
    `}
    ${({ theme }) => theme.minMedia.xxl`
      background-position: top left;
      top: -${theme.remCalc(210)};
      right: -${theme.remCalc(82)};
      width: ${theme.remCalc(848)};
    `}
  }
`

const FeaturedGrid = styled.div`
  margin-top: ${props => props.theme.units.padding.lg};
  margin-bottom: ${props => props.theme.units.padding.lg};
  & > div:not(:last-of-type) {
    margin-bottom: ${props => props.theme.units.padding.sm};
  }
  ${props => props.theme.minMedia.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${props.theme.units.grid.mdGap};
    margin-top: ${props.theme.units.padding.xl};
    margin-bottom: ${props.theme.units.padding.xxl};
    & > div:not(:last-of-type) {
      margin-bottom: 0;
    }
  `}
`

const FeaturedHeader = styled.div`
  .featured-header-button {
    display: none;
  }
  ${props => props.theme.minMedia.md`
    display: grid;
    grid-template-columns: 1fr 280px;
    grid-gap: ${props.theme.units.grid.mdGap};
    justify-content: space-between;
    align-items: flex-end;
    .featured-header-button {
      display: inline-flex;
      justify-content: flex-end;
      width: auto;
    }
  `}
`

const SeeMoreWrapper = styled.div`
  text-align: center;
  padding-bottom: ${props => {
    if (props.addPadding) {
      return `${props.theme.units.padding.lg}`
    }
  }};
  ${props => props.theme.minMedia.md`
    display: none;
  `}
`

const EntryHeading = styled.div`
  padding-top: ${({ theme }) => theme.units.padding.xxl};
  padding-bottom: ${({ theme }) => theme.units.padding.lg};
  padding-right: ${({ theme }) => theme.units.padding.lg};
  max-width: ${({ theme }) => theme.remCalc(840)};
  h2 {
    font-size: ${({ theme }) => theme.remCalc(30)};
    font-style: italic;
  }
  ${({ theme }) => theme.minMedia.sm`
    h2 {
      font-size: ${theme.remCalc(48)};
    }
  `}
  ${({ theme }) => theme.minMedia.md`
    padding-top: ${theme.remCalc(120)};
    padding-bottom: ${theme.units.padding.xxl};
    h2 {
      font-size: ${theme.remCalc(60)};
    }
  `}
  ${({ theme }) => theme.minMedia.lg`
    padding-top: ${theme.remCalc(180)};
    padding-bottom: ${theme.remCalc(120)};
    padding-right: 0;
  `}
  ${({ theme }) => theme.minMedia.xl`
    h2 {
      font-size: ${theme.remCalc(80)};
    }
  `}
`

export {
  FeaturedContainer,
  FeaturedGrid,
  FeaturedHeader,
  SeeMoreWrapper,
  EntryHeading,
  slideInFade,
}
