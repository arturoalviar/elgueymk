import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import 'typeface-lora'
import 'typeface-karla'

import Header from '@components/header'
import { useThemeWrapper } from '@components/themeContext'
import { getTheme } from '../hooks/useTheme'

import GlobalStyles from '@styles/global'

const Wrapper = ({ location, children }) => {
  const { mode } = useThemeWrapper()
  const theme = getTheme(mode)

  return (
    theme && (
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Header location={location} />
        <>{children}</>
      </ThemeProvider>
    )
  )
}

Wrapper.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Wrapper
