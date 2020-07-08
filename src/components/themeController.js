import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

import { useThemeWrapper } from '@components/themeContext'

import { ThemeControllerButton } from '@styles/components/themeController'

const ThemeController = () => {
  const { mode, toggleMode } = useThemeWrapper()

  return (
    <div className="theme-controller-wrapper">
      <ThemeControllerButton
        data-testid="theme-toggle-btn"
        aria-label={`Activate ${mode === 'light' ? 'dark' : 'light'} mode`}
        onClick={toggleMode}
      >
        {mode === 'light' ? <FiMoon /> : <FiSun />}
      </ThemeControllerButton>
    </div>
  )
}

export default ThemeController
