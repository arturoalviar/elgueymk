import styled from '@emotion/styled'

const CardStandardWrapper = styled.div`
  position: relative;
  .emk-card-content {
    padding: ${({ theme }) => `${theme.units.padding.sm} 0 0`};
  }
  h2 {
    font-size: ${props => props.theme.remCalc(14)};
    line-height: 1;
    margin: 0;

    ${props => props.theme.minMedia.sm`
      font-size: ${props.theme.remCalc(18)};
    `};
    ${props => props.theme.minMedia.md`
      font-size: ${props.theme.remCalc(22)};
    `};
    ${props => props.theme.minMedia.lg`
      font-size: ${props.theme.remCalc(28)};
    `};
  }

  ${props => props.theme.minMedia.sm`
    .emk-card-content {
      padding: ${props.theme.units.padding.md} 0;
    }
  `};
`

const CardWrapper = styled.div`
  border-radius: 0.35rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  a {
    display: block;
    width: 100%;
  }
  ${props => props.theme.minMedia.md`
    &::after {
      content: '';
      display: block;
      padding-bottom: 56.45%;
      width: 100%;
    }
    a {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  `};
`

const CardGradient = styled.div`
  display: block;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${props => props.theme.minMedia.md`
    background: linear-gradient(
      to bottom,
      transparent 35%,
      rgba(0, 0, 0, 0.25) 100%
    );
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 5;
  `}
`

const CardImageWrapper = styled.div`
  background: ${props => props.theme.colors.gray};
  overflow: hidden;
  img {
    display: block;
    object-fit: cover;
    position: relative;
    width: 100%;
    transition: transform 0.25s cubic-bezier(0.39, 0.58, 0.57, 1);
  }
  ${props => props.theme.minMedia.md`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `};
`

const CardBody = styled.div`
  border-top: 2px solid ${props => props.theme.colors.gray};
  padding: ${props => props.theme.units.padding.sm};
  width: 100%;
  z-index: 10;
  ${props => props.theme.minMedia.md`
    border: 0;
    background: transparent;
    color: ${props.theme.colors.white};
    position: absolute;
    left: 0;
    bottom: 0;
  `};
  ${props => props.theme.minMedia.lg`
    padding: ${props.theme.units.padding.md};
  `};
  p {
    color: ${props => props.theme.colors.lGray};
    font-style: italic;
    font-size: ${props => props.theme.remCalc(10)};
    line-height: 1;
    margin: 0;
    margin-bottom: ${props => props.theme.remCalc(12)};
    position: relative;
    text-transform: lowercase;
    &::after {
      content: '';
      display: none;
    }
    ${props => props.theme.minMedia.md`
      color: currentColor;
      &::after {
        background: ${props.theme.colors.white};
        display: block;
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 15px;
        height: 1px;
      }
    `};
    ${props => props.theme.minMedia.lg`
      font-size: ${props.theme.remCalc(14)};
      margin-bottom: ${props.theme.units.padding.md};
      &::after {
        bottom: -15px;
        width: 20px;
      }
    `};
  }
  h2 {
    font-size: ${props => props.theme.remCalc(20)};
    line-height: 1;
    margin: 0;
    ${props => props.theme.minMedia.sm`
      font-size: ${props.theme.remCalc(24)};
    `};
    ${props => props.theme.minMedia.md`
      font-size: ${props.theme.remCalc(30)};
    `};
    ${props => props.theme.minMedia.lg`
      font-size: ${props.theme.remCalc(38)};
    `};
  }
`

export {
  CardBody,
  CardGradient,
  CardImageWrapper,
  CardWrapper,
  CardStandardWrapper,
}
