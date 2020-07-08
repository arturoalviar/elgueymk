import styled from '@emotion/styled'

const PostEntry = styled.article`
  margin-top: ${props => props.theme.units.padding.lg};
  h3 {
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.remCalc(18)};
  }
  ${props => props.theme.minMedia.lg`
    margin-top: ${props.theme.units.padding.xl};
  `}

  .emk-post-section {
    margin-top: ${props => props.theme.units.padding.lg};
    &:last-of-type {
      margin-bottom: ${props => props.theme.units.padding.lg};
    }
    ${props => props.theme.minMedia.lg`
      margin-top: ${props.theme.units.padding.xl};
      &:last-of-type {
        margin-bottom: ${props.theme.units.padding.xl};
      }
    `}
  }
`

const PostHeader = styled.div`
  margin-bottom: ${props => props.theme.units.padding.md};
  h2 {
    font-weight: bold;
    margin-bottom: ${props => props.theme.remCalc(10)};
  }
  ${({ theme }) => theme.minMedia.md`
    margin-bottom: ${theme.units.padding.sm};
  `}
`

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  span {
    color: ${props => props.theme.colors.lGray};
    font-family: 'Karla', sans-serif;
    font-size: ${props => props.theme.remCalc(10)};
    line-height: 1;
    margin: 0;
    &:not(:last-of-type) {
      margin-right: ${props => props.theme.remCalc(10)};
    }
  }
  ${({ theme }) => theme.minMedia.md`
    span{
      font-size: ${theme.remCalc(14)};
      &:not(:last-of-type) {
        margin-right: ${theme.remCalc(14)};
      }
    }
  `}
`

const PostEntryImageWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  margin-left: -${props => props.theme.units.container.gutter};
  width: calc(100% + ${props => props.theme.units.container.gutters});
  img {
    display: block;
    width: 100%;
  }
  ${({ theme }) => theme.minMedia.md`
    border: 1px solid ${theme.colors.gray};
  `}
`

const PostImageGalleryWrapper = styled.div`
  padding-top: ${props => props.theme.units.padding.md};

  ${props => props.theme.minMedia.sm`
    padding-top: ${props.theme.units.padding.lg};
  `};

  ${props => props.theme.minMedia.md`
    padding-top: ${props.theme.units.padding.xl};
  `};

  .gatsby-image-wrapper {
    &:not(:last-of-type) {
      margin-bottom: ${props => props.theme.units.padding.lg};
    }
    ${({ theme }) => theme.minMedia.md`
      &:not(:last-of-type) {
        margin-bottom: ${theme.units.padding.xl};
      }
    `}
  }
`

const PostImageWrapper = styled.figure`
  position: relative;
  padding: 0;
  margin: 0;
  &:not(:last-of-type) {
    margin-bottom: ${props => props.theme.units.padding.lg};
  }
  figcaption {
    border-left: 2px solid ${({ theme }) => theme.colors.primary};
    font-size: ${props => props.theme.remCalc(12)};
    font-style: italic;
    line-height: 1.5;
    margin-top: ${props => props.theme.remCalc(10)};
    padding-left: ${props => props.theme.remCalc(10)};
  }
  ${({ theme }) => theme.minMedia.lg`
    margin-left: -${theme.units.container.gutter};
    width: calc(100% + ${theme.units.container.gutters});
    &:not(:last-of-type) {
      margin-bottom: ${theme.units.padding.xl};
    }
    figcaption {
      font-size: ${theme.remCalc(14)};
      margin-top: ${theme.remCalc(18)};
    }
  `}
  ${({ theme }) => theme.minMedia.xxl`
    figcaption {
      border: 0;
      border-top: 2px solid ${theme.colors.primary};
      position: absolute;
      padding: 0;
      margin: 0;
      padding-top: ${theme.remCalc(15)};
      top: 0;
      right: 0;
      transform-origin: top left;
      transform: translateX(110%);
      width: 180px;
    }
  `}
}
`

const PostFooter = styled.div`
  margin-top: ${props => props.theme.units.padding.md};

  ${props => props.theme.maxMedia.sm`
    text-align:center;
  `}

  ${props => props.theme.minMedia.sm`
    display: grid;
    grid-template-columns: 1fr ${props.theme.remCalc(200)};
    grid-gap: ${props.theme.units.grid.mdGap};
  `}

  ${props => props.theme.minMedia.md`
    margin-top: ${props.theme.units.padding.xl}
  `}
`

const PostPanel = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.units.padding.sm};
  h4 {
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.remCalc(14)};
  }
  ${({ theme }) => theme.minMedia.md`
    margin-top: ${theme.units.padding.lg};
    padding: ${theme.units.padding.lg};
  `}
`

export {
  PostEntry,
  PostHeader,
  PostMeta,
  PostEntryImageWrapper,
  PostImageWrapper,
  PostImageGalleryWrapper,
  PostFooter,
  PostPanel,
}
