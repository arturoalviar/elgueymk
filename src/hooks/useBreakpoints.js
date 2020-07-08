import { useEffect } from 'react'
import { breakpoints } from '@styles/breakpoints'
import { remCalc } from '@styles/mixins'

const useBreakpoints = ({ breakpoint, state, onResize }) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${remCalc(breakpoints[breakpoint])})`
    )

    function handleResize() {
      if (state && mediaQuery.matches) {
        onResize()
      }
    }

    window.addEventListener('resize', handleResize, {
      passive: true,
    })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoint, state, onResize])
}

export default useBreakpoints
