import styled from '@emotion/styled'

const TagCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.65rem;
  font-size: 1.125rem;
  font-family: 'Karla', sans-serif;
  position: relative;
  padding: ${props => props.theme.units.padding.md};
  padding-left: ${props => props.theme.remCalc(48)};
  margin-bottom: ${props => props.theme.units.padding.md};
  ${props => props.theme.minMedia.md`
    padding: ${props.theme.units.padding.lg};
    padding-left: ${props.theme.remCalc(60)};
    margin-bottom: 0;
  `}
  .emk-tag-icon {
    left: ${props => props.theme.remCalc(10)};
  }
`

export { TagCardWrapper }
