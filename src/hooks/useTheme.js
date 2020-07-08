import { useState, useEffect } from 'react'
import { darkTheme, lightTheme } from '@styles/theme'

const STORAGE_KEY = 'elgueymk-theme-mode'

const storage = {
  get: init => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) || init
    } catch (error) {
      console.warn(
        'localStorage is disabled and color mode might not work as expected.',
        error
      )
    }
  },
  set: value => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch (error) {
      console.warn(
        'localStorage is disabled and color mode might not work as expected.',
        error
      )
    }
  },
}

const getMediaQuery = () => {
  // theme will be light on inital visit for the monsters that use light mode
  // although this site does look pretty good in light mode
  const lightQuery = '(prefers-color-scheme: light)'
  const lightMQL = window.matchMedia ? window.matchMedia(lightQuery) : {}
  const light = lightMQL.media === lightQuery && lightMQL.matches
  if (light) return 'light'
  // default theme value for first time vistors will be dark
  return 'dark'
}

const getTheme = mode => {
  return mode === 'light' ? lightTheme : darkTheme
}

const useThemeMode = () => {
  const [mode, setMode] = useState('dark')

  useEffect(() => {
    const stored = storage.get()
    if (!stored) {
      const preferredMode = getMediaQuery()
      setMode(preferredMode)
      return
    }
    if (stored === mode) return
    setMode(stored)
  }, [])

  useEffect(() => {
    storage.set(mode)
  }, [mode])

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
  }

  return {
    mode,
    toggleMode,
  }
}

export default useThemeMode
export { getTheme }
