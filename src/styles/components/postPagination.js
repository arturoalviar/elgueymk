import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { remCalc } from '@styles/mixins'

const PostPaginationWrapper = styled.div`
  margin-left: -${props => props.theme.units.container.gutter};
  width: calc(100% + ${props => props.theme.units.container.gutters});
  padding-top: ${props => props.theme.units.padding.lg};
  ${({ theme }) => theme.minMedia.sm`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${theme.units.grid.mdGap};
    padding-top: ${theme.units.padding.xl};
    margin-bottom: ${theme.units.padding.md};
  `}
`

const PaginationLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 56.45%;
  overflow: hidden;
`

const PaginationLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 15;
  .pagination-link-label {
    font-family: 'Karla', sans-serif;
    font-size: ${remCalc(12)};
    letter-spacing: 0.25em;
    position: relative;
    &.is-prev svg {
      left: -25px;
    }
    &.is-next svg {
      right: -20px;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      transition: transform 0.3s ease;
    }
  }
  h3 {
    font-size: ${remCalc(24)};
    ${props => props.theme.minMedia.md`
      font-size: ${remCalc(32)};
    `}
  }
  &:hover {
    .pagination-link-label {
      &.is-prev svg {
        transform: translate(-8px, -50%);
      }
      &.is-next svg {
        transform: translate(8px, -50%);
      }
    }
    & ~ div {
      filter: grayscale(0);
      &::after {
        ${props => props.theme.minMedia.md`
          box-shadow: inset 0 0 0 12px ${props.theme.colors.bg};
        `}
      }
    }
  }
`

const PaginationReturnLink = styled.div`
  padding-top: ${props => props.theme.units.padding.md};
  padding-left: ${props => props.theme.units.container.gutter};
  padding-right: ${props => props.theme.units.container.gutter};
  position: relative;
  width: 100%;
  grid-row: 2;
  grid-column: 1 / -1;
  text-align: center;
  a {
    display: block;
    padding: ${props => props.theme.units.padding.sm};
  }
  ${props => props.theme.minMedia.lg`
    padding-left: 0;
    padding-right: 0;
  `}
`

const PaginationLinkBg = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: grayscale(99%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  transition: filter 0.3s ease-in-out;
  &::before {
    background: rgba(0, 0, 0, 0.45);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  &::after {
    ${props => props.theme.minMedia.md`
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      transition: box-shadow 0.3s ease-in-out;
      z-index: 5;
    `};
  }
`

export {
  PostPaginationWrapper,
  PaginationLinkWrapper,
  PaginationReturnLink,
  PaginationLink,
  PaginationLinkBg,
}
