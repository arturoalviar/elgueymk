import React from 'react'

import Container from '@components/container'
import Social from '@components/social'

import { FooterFlex, FooterWrapper } from '@styles/components/footer'

const Footer = React.forwardRef(function FooterRefWrapper(props, ref) {
  return (
    <FooterWrapper ref={ref}>
      <Container>
        <FooterFlex>
          <Social size="large" />
          <p>
            © {new Date().getFullYear()} elguey.mk | Made with{' '}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Gatsby
            </a>
          </p>
        </FooterFlex>
      </Container>
    </FooterWrapper>
  )
})

export default Footer
