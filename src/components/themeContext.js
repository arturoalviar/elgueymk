import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import '../styles/noFlash.css'

import useThemeMode from '../hooks/useTheme'

const ThemeContextWrapper = React.createContext()

export const useThemeWrapper = () => useContext(ThemeContextWrapper)

const ThemeContext = ({ children }) => {
  const { mode, toggleMode } = useThemeMode()

  useEffect(() => {
    document.body.classList.remove('is-dark', 'is-light')
  }, [])

  return (
    <ThemeContextWrapper.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </ThemeContextWrapper.Provider>
  )
}

ThemeContext.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContext
