import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  background: ${props => props.theme.colors.footer};
  padding-top: ${props => props.theme.units.padding.xl};
  padding-bottom: ${props => props.theme.units.padding.xl};
  margin-top: ${props => props.theme.units.padding.xl};
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const FooterFlex = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  p {
    font-size: ${props => props.theme.remCalc(14)};
    margin: 0;
  }
`

export { FooterFlex, FooterWrapper }
