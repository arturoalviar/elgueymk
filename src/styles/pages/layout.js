import styled from '@emotion/styled'

const ContainerWrapper = styled.div`
  max-width: ${props => {
    switch (props.size) {
      case 'lg':
        return props.theme.units.container.lgWidth
      case 'xl':
        return props.theme.units.container.xlWidth
      default:
        return props.theme.units.container.mdWidth
    }
  }};
  padding-left: ${props => props.theme.units.container.gutter};
  padding-right: ${props => props.theme.units.container.gutter};
  margin-left: auto;
  margin-right: auto;
  &.emk-about-container {
    h3:not(:first-of-type) {
      padding-top: ${({ theme }) => theme.units.padding.lg};
    }
  }
`

const GridPageLayout = styled.div`
  margin-top: ${props => props.theme.units.padding.sm};
  margin-bottom: ${props => props.theme.units.padding.sm};
  & > div {
    margin-bottom: ${props => props.theme.units.padding.md};
  }
  ${props => props.theme.minMedia.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${props.theme.units.grid.mdGap};
    & > div {
      margin-bottom: 0;
      &:first-of-type {
        grid-column: 1/-1;
      }
    }
  `};
`

const TagsGrid = styled.div`
  margin-bottom: 2rem;

  a {
    display: block;
  }

  ${props => props.theme.minMedia.sm`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${props.theme.units.grid.mdGap};
  `};
  ${props => props.theme.minMedia.md`
    grid-template-columns: repeat(3, 1fr);
  `};
`

export { ContainerWrapper, GridPageLayout, TagsGrid }
