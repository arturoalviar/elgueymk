import styled from '@emotion/styled'
import { ContainerWrapper } from '@styles/pages/layout'

const PageBannerWrapper = styled(ContainerWrapper)`
  position: relative;
  padding-top: ${({ theme }) => theme.remCalc(20)};
  ${({ theme }) => theme.minMedia.sm`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    align-items: center;
    padding-top: ${theme.remCalc(20)};
    padding-bottom: ${theme.remCalc(40)};
  `}
  ${({ theme }) => theme.minMedia.md`
    padding-bottom: ${theme.remCalc(60)};
  `}
`

const PageBannerTitle = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.remCalc(40)};
    font-weight: bold;

    ${({ theme }) => theme.minMedia.md`
      font-size: ${theme.remCalc(64)};
    `};

    ${({ theme }) => theme.minMedia.lg`
      font-size: ${theme.remCalc(86)};
    `}
  }
`
const PageBannerContent = styled.div`
  color: ${({ theme }) => theme.colors.lGray};
  position: relative;
  max-width: 420px;
  p {
    font-style: italic;
    padding-right: ${({ theme }) => theme.remCalc(30)};
    margin: 0;
  }
  ${({ theme }) => theme.minMedia.sm`
    margin-left: auto;
  `};
  ${({ theme }) => theme.minMedia.md`
    p {
      padding: 0;
    }
  `};
`

export { PageBannerWrapper, PageBannerTitle, PageBannerContent }
