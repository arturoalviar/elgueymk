import styled from '@emotion/styled'

const KeycapSetsGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.units.grid.smGap};
  justify-content: center;
  ${props => props.theme.minMedia.sm`
    grid-template-columns: repeat(${props.cols}, 1fr);
    grid-gap: ${props.theme.units.grid.mdGap};
  `}
`

export { KeycapSetsGrid }
