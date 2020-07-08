import styled from '@emotion/styled'

const TagsWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-bottom: ${({ theme }) => theme.units.padding.sm};
  ${({ theme, center }) => theme.minMedia.md`
    padding: 0;
    justify-content: ${center ? 'center' : ''};
  `}
`

const TagWrapper = styled.li`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.35rem;
  display: inline-flex;
  align-items: center;
  font-family: 'Karla', sans-serif;
  font-size: ${({ theme }) => theme.remCalc(12)};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.remCalc(8)};
  margin-right: ${({ theme }) => theme.remCalc(8)};
  a {
    padding: ${({ theme }) => `${theme.remCalc(6)} ${theme.remCalc(10)}`};
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
  ${({ theme }) => theme.minMedia.md`
    font-size: ${theme.remCalc(14)};
    margin-bottom: ${theme.units.padding.sm};
    margin-right: ${theme.units.padding.sm};
    a {
      padding: ${theme.remCalc(8)} ${theme.remCalc(14)};
    }
  `}
`

export { TagsWrapper, TagWrapper }
