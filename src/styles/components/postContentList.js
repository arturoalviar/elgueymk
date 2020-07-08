import styled from '@emotion/styled'

const PostContentList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.units.grid.smGap};
  flex-flow: wrap row;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: inline-flex;
    align-items: center;
    font-family: 'Karla', sans-serif;
    font-size: ${({ theme }) => theme.remCalc(12)};
    margin: 0;
    span {
      display: inline-flex;
      padding-right: ${({ theme }) => theme.remCalc(8)};
    }
    &.is-sold {
      text-decoration: line-through;
      opacity: 0.35;
    }
  }
  ${({ theme }) => theme.minMedia.sm`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${({ theme }) => theme.minMedia.md`
    grid-template-columns: repeat(4, 1fr);
    li {
      font-size: ${theme.remCalc(14)};
      span {
        padding-right: ${theme.remCalc(10)};
      }
    }
  `}

  ${({ theme }) => theme.minMedia.lg`
    li {
      font-size: ${theme.remCalc(16)};
    }
  `}
`

const KeyboardFeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.units.grid.smGap};
  flex-flow: wrap row;
  list-style: none;
  margin: 0;
  padding: 0;
  h5 {
    color: ${({ theme }) => theme.colors.lGray};
    font-weight: 600;
    font-size: ${({ theme }) => theme.remCalc(9)};
    letter-spacing: 1px;
    margin-bottom: ${({ theme }) => theme.remCalc(4)};
  }
  li,
  p {
    font-family: 'Karla', sans-serif;
    font-size: ${({ theme }) => theme.remCalc(12)};
    margin: 0;
  }
  ${({ theme }) => theme.minMedia.md`
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${theme.units.grid.mdGap} ${theme.units.grid.smGap};
    h5 {
      font-size: ${theme.remCalc(11)};
    }
    li, p {
      font-size: ${theme.remCalc(15)};
    }
  `}
`

export { PostContentList, KeyboardFeaturesList }
