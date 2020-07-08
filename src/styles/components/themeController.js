import styled from '@emotion/styled'

const ThemeControllerButton = styled.button`
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  font-size: ${props => props.theme.remCalc(18)};
  padding: ${props => `${props.theme.remCalc(18)} ${props.theme.remCalc(14)}`};
  outline: none;
`

export { ThemeControllerButton }
